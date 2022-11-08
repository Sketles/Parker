import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Platform, ToastController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Vehiculos } from './vehiculos';

@Injectable({
  providedIn: 'root'
})
export class DbserviceService {

  public database: SQLiteObject;
  
  tablaVehiculos: string = "CREATE TABLE IF NOT EXISTS vehiculos(id INTEGER PRIMARY KEY autoincrement, matricula VARCHAR(50) NOT NULL, modelo TEXT NOT NULL);";
  registro: string = "INSERT or IGNORE INTO vehiculos(id, matricula, modelo) VALUES (1, 'UV3104', 'Kia Carens xlsr');";
  listaVehiculos = new BehaviorSubject([]);

  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(private sqlite: SQLite, private platform: Platform, public toastController: ToastController) {
    this.crearBD();
   }

   addVehiculo(matricula,modelo){
    let data=[matricula,modelo];
    return this.database.executeSql('INSERT INTO vehiculos(matricula,modelo) VALUES(?,?)',data)
    .then(res =>{
      this.buscarVehiculos();
    })

  }

  updateVehiculo(id, matricula, modelo){
    let data = [matricula, modelo, id];
    return this.database.executeSql('UPDATE vehiculos SET matricula = ?, modelo = ? WHERE id = ?', data)
    .then(data2 =>{
      this.buscarVehiculos();
    })

  }

  deleteVehiculo(id){
    return this.database.executeSql('DELETE FROM vehiculos WHERE id = ?', [id])
    .then(a =>{
      this.buscarVehiculos();
    })
  }

  dbState() {
    return this.isDbReady.asObservable();
  }

  crearBD() {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'vehiculos3.db',
        location: 'default'

      }).then((db: SQLiteObject) => {
        this.database = db;
        this.presentToast("BD Creada");
        this.crearTablas();
      }).catch(e => this.presentToast(e));
    })
  }

  async crearTablas() {
    try {
      await this.database.executeSql(this.tablaVehiculos, []);
      await this.database.executeSql(this.registro, []);
      this.presentToast("Tabla Creada");
      this.buscarVehiculos();
      this.isDbReady.next(true);
    } catch (e) {
      this.presentToast("error creartabla " + e);
    }
  }

  buscarVehiculos() {
    //this.presentAlert("a");
    return this.database.executeSql('SELECT * FROM vehiculos', []).then(res => {
      let items: Vehiculos[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            id: res.rows.item(i).id,
            matricula: res.rows.item(i).matricula,
            modelo: res.rows.item(i).modelo
          });
        }
      }
      this.listaVehiculos.next(items);
    });
  }

  fetchVehiculos(): Observable<Vehiculos[]> {
  return this.listaVehiculos.asObservable();
  }

  async presentToast(mensaje: string) {
  const toast = await this.toastController.create({
    message: mensaje,
    duration: 3000
  });
  toast.present();
  }

}

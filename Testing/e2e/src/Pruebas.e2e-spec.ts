import { browser, element, by} from 'protractor';

describe('Testing de la Aplicacion',()=>{

    beforeEach(()=>{
        browser.get("/"); // CONFIGURACION BEFOREEACH
    });

    //TESTING-1
    it("El Usuario puede acceder a la pagina [ Inicio ]",()=>{
        browser.driver.sleep(2000);
        expect(element(by.css(".tab-selected ion-label")).getText()).toContain("Tab 1");
    });

    //TESTING-2 
    it("El Usuario puede acceder a la pagina [ Vehiculos ]",async ()=>{
        await element(by.css("[tab=tab2]")).click();
        browser.driver.sleep(2000);
        expect(element(by.css(".tab-selected ion-label")).getText()).toContain("Tab 2");
    });

    //TESTING-3
    it("El Usuario puede acceder a la pagina [ Estacionamientos ]",async ()=>{
        await element(by.css("[tab=tab3]")).click();
        browser.driver.sleep(2000);
        expect(element(by.css(".tab-selected ion-label")).getText()).toContain("Tab 3");
    });
});
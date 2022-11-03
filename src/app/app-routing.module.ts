import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGardService } from './servicios/auth-gard.service';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'slide',
    pathMatch: 'full'
  },

  //RUTAS A LAS PAGINAS

  {
    path: 'login', loadChildren: () => import('./Paginas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'regoogle', loadChildren: () => import('./Paginas/regoogle/regoogle.module').then( m => m.RegooglePageModule)
  },
  {
    path: 'renumero', loadChildren: () => import('./Paginas/renumero/renumero.module').then( m => m.RenumeroPageModule)
  },
  {
    path: 'home', loadChildren: () => import('./Paginas/home/home.module').then( m => m.HomePageModule)
  },
   {
    path: 'slide', loadChildren: () => import('./Paginas/slide/slide.module').then( m => m.SlidePageModule)
  },
  {
    path: 'vehiculos', loadChildren: () => import('./PaginasMenu/vehiculos/vehiculos.module').then( m => m.VehiculosPageModule)
  },
  {
    path: 'ayuda', loadChildren: () => import('./PaginasMenu/ayuda/ayuda.module').then( m => m.AyudaPageModule)
  },
  {
    path: 'ajustes', loadChildren: () => import('./PaginasMenu/ajustes/ajustes.module').then( m => m.AjustesPageModule)
  },
  {
    path: '**', loadChildren: () => import('./Paginas/not-found/not-found.module').then( m => m.NotFoundPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

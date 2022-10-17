import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'bienvenida',
    pathMatch: 'full'
  },

  //RUTAS A LAS PAGINAS
  {
    path: 'bienvenida', loadChildren: () => import('./Paginas/bienvenida/bienvenida.module').then( m => m.BienvenidaPageModule)
  },
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

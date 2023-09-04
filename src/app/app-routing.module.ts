import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },
  {
    path: 'inicio-alum',
    loadChildren: () => import('./inicio-alum/inicio-alum.module').then( m => m.InicioAlumPageModule)
  },
  {
    path: 'inicio-prof',
    loadChildren: () => import('./inicio-prof/inicio-prof.module').then( m => m.InicioProfPageModule)
  },
  {
    path: 'login-prof',
    loadChildren: () => import('./login-prof/login-prof.module').then( m => m.LoginProfPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

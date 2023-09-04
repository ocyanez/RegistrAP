import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioAlumPage } from './inicio-alum.page';

const routes: Routes = [
  {
    path: '',
    component: InicioAlumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioAlumPageRoutingModule {}

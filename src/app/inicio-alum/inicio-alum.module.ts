import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioAlumPageRoutingModule } from './inicio-alum-routing.module';

import { InicioAlumPage } from './inicio-alum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioAlumPageRoutingModule
  ],
  declarations: [InicioAlumPage]
})
export class InicioAlumPageModule {}

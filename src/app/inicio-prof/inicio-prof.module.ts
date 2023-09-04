import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioProfPageRoutingModule } from './inicio-prof-routing.module';

import { InicioProfPage } from './inicio-prof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioProfPageRoutingModule
  ],
  declarations: [InicioProfPage]
})
export class InicioProfPageModule {}

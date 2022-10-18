import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Estudiante1PageRoutingModule } from './estudiante1-routing.module';

import { Estudiante1Page } from './estudiante1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Estudiante1PageRoutingModule
  ],
  declarations: [Estudiante1Page]
})
export class Estudiante1PageModule {}

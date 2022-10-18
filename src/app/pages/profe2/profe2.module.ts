import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Profe2PageRoutingModule } from './profe2-routing.module';

import { Profe2Page } from './profe2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Profe2PageRoutingModule
  ],
  declarations: [Profe2Page]
})
export class Profe2PageModule {}

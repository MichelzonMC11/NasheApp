import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Profe1PageRoutingModule } from './profe1-routing.module';

import { Profe1Page } from './profe1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Profe1PageRoutingModule
  ],
  declarations: [Profe1Page]
})
export class Profe1PageModule {}

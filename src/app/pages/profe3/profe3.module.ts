import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Profe3PageRoutingModule } from './profe3-routing.module';

import { Profe3Page } from './profe3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Profe3PageRoutingModule
  ],
  declarations: [Profe3Page]
})
export class Profe3PageModule {}

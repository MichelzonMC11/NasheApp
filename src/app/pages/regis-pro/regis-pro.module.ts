import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisProPageRoutingModule } from './regis-pro-routing.module';

import { RegisProPage } from './regis-pro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisProPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegisProPage]
})
export class RegisProPageModule {}

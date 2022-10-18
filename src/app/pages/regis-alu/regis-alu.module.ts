import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisAluPageRoutingModule } from './regis-alu-routing.module';

import { RegisAluPage } from './regis-alu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisAluPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegisAluPage]
})
export class RegisAluPageModule {}

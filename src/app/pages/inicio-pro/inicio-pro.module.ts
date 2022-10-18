import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioProPageRoutingModule } from './inicio-pro-routing.module';

import { InicioProPage } from './inicio-pro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioProPageRoutingModule
  ],
  declarations: [InicioProPage]
})
export class InicioProPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilAluPageRoutingModule } from './perfil-alu-routing.module';

import { PerfilAluPage } from './perfil-alu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilAluPageRoutingModule
  ],
  declarations: [PerfilAluPage]
})
export class PerfilAluPageModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisProPage } from './regis-pro.page';

const routes: Routes = [
  {
    path: '',
    component: RegisProPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisProPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Profe2Page } from './profe2.page';

const routes: Routes = [
  {
    path: '',
    component: Profe2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Profe2PageRoutingModule {}

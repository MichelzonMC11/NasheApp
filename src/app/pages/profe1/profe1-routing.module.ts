import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Profe1Page } from './profe1.page';

const routes: Routes = [
  {
    path: '',
    component: Profe1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Profe1PageRoutingModule {}

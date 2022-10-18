import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Profe3Page } from './profe3.page';

const routes: Routes = [
  {
    path: '',
    component: Profe3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Profe3PageRoutingModule {}

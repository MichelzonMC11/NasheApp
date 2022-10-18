import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Estudiante1Page } from './estudiante1.page';

const routes: Routes = [
  {
    path: '',
    component: Estudiante1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Estudiante1PageRoutingModule {}

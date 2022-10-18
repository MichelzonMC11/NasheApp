import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisAluPage } from './regis-alu.page';

const routes: Routes = [
  {
    path: '',
    component: RegisAluPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisAluPageRoutingModule {}

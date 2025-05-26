import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PegarBebidaCopoPage } from './pegar-bebida-copo.page';

const routes: Routes = [
  {
    path: '',
    component: PegarBebidaCopoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PegarBebidaCopoPageRoutingModule {}

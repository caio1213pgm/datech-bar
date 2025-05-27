import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PegarPeloAlcoolPage } from './pegar-pelo-alcool.page';

const routes: Routes = [
  {
    path: '',
    component: PegarPeloAlcoolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PegarPeloAlcoolPageRoutingModule {}

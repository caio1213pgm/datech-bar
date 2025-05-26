import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PegarBebidaNomePage } from './pegar-bebida-nome.page';

const routes: Routes = [
  {
    path: '',
    component: PegarBebidaNomePage
  }
];

@NgModule({
  imports: [PegarBebidaNomePageRoutingModule, PegarBebidaNomePage, RouterModule.forChild(routes),],
  exports: [RouterModule],
})
export class PegarBebidaNomePageRoutingModule {}

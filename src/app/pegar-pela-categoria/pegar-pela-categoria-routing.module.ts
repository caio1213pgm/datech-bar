import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PegarPelaCategoriaPage } from './pegar-pela-categoria.page';

const routes: Routes = [
  {
    path: '',
    component: PegarPelaCategoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PegarPelaCategoriaPageRoutingModule {}

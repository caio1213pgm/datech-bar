import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PegarPeloIngredientePage } from './pegar-pelo-ingrediente.page';

const routes: Routes = [
  {
    path: '',
    component: PegarPeloIngredientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PegarPeloIngredientePageRoutingModule {}

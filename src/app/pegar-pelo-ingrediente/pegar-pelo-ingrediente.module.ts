import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PegarPeloIngredientePageRoutingModule } from './pegar-pelo-ingrediente-routing.module';

import { PegarPeloIngredientePage } from './pegar-pelo-ingrediente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PegarPeloIngredientePageRoutingModule
  ],
  declarations: [PegarPeloIngredientePage]
})
export class PegarPeloIngredientePageModule {}

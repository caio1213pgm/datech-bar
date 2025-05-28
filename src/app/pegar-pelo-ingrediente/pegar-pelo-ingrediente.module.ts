import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PegarPeloIngredientePageRoutingModule } from './pegar-pelo-ingrediente-routing.module';

import { PegarPeloIngredientePage } from './pegar-pelo-ingrediente.page';
import { UppercaseDrinksPipe } from "../pipes/uppercase-drinks.pipe";
import { EncurtarNomesBebidasPipe } from "../pipes/encurtar-nomes-bebidas.pipe";
import {MostrarNomeCompletoDirective} from "../directives/mostrar-nome-completo.directive"

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PegarPeloIngredientePageRoutingModule,
    UppercaseDrinksPipe,
    EncurtarNomesBebidasPipe,
    MostrarNomeCompletoDirective
],
  declarations: [PegarPeloIngredientePage]
})
export class PegarPeloIngredientePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PegarPeloAlcoolPageRoutingModule } from './pegar-pelo-alcool-routing.module';

import { PegarPeloAlcoolPage } from './pegar-pelo-alcool.page';
import { EncurtarNomesBebidasPipe } from "../pipes/encurtar-nomes-bebidas.pipe";
import {MostrarNomeCompletoDirective} from "../directives/mostrar-nome-completo.directive"

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PegarPeloAlcoolPageRoutingModule,
    EncurtarNomesBebidasPipe,
    MostrarNomeCompletoDirective
],
  declarations: [PegarPeloAlcoolPage]
})
export class PegarPeloAlcoolPageModule {}

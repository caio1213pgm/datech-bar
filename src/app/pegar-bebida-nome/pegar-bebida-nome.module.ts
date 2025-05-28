import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PegarBebidaNomePageRoutingModule } from './pegar-bebida-nome-routing.module';

import { PegarBebidaNomePage } from './pegar-bebida-nome.page';
import { EncurtarNomesBebidasPipe } from "../pipes/encurtar-nomes-bebidas.pipe";
import {MostrarNomeCompletoDirective} from "../directives/mostrar-nome-completo.directive"

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PegarBebidaNomePageRoutingModule,
    EncurtarNomesBebidasPipe,
    MostrarNomeCompletoDirective 
  ],
  declarations: [PegarBebidaNomePage]
})
export class PegarBebidaNomePageModule {}

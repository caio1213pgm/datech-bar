import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PegarBebidaCopoPageRoutingModule } from './pegar-bebida-copo-routing.module';

import { PegarBebidaCopoPage } from './pegar-bebida-copo.page';
import { EncurtarNomesBebidasPipe } from "../pipes/encurtar-nomes-bebidas.pipe";
import {MostrarNomeCompletoDirective} from "../directives/mostrar-nome-completo.directive"

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PegarBebidaCopoPageRoutingModule,
    EncurtarNomesBebidasPipe,
    MostrarNomeCompletoDirective
],
  declarations: [PegarBebidaCopoPage]
})
export class PegarBebidaCopoPageModule {}

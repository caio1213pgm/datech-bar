import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PegarPelaCategoriaPageRoutingModule } from './pegar-pela-categoria-routing.module';

import { PegarPelaCategoriaPage } from './pegar-pela-categoria.page';
import { EncurtarNomesBebidasPipe } from "../pipes/encurtar-nomes-bebidas.pipe";
import {MostrarNomeCompletoDirective} from "../directives/mostrar-nome-completo.directive"

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PegarPelaCategoriaPageRoutingModule,
    EncurtarNomesBebidasPipe,
    MostrarNomeCompletoDirective
],
  declarations: [PegarPelaCategoriaPage]
})
export class PegarPelaCategoriaPageModule {}

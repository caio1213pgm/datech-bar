import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PegarPelaCategoriaPageRoutingModule } from './pegar-pela-categoria-routing.module';

import { PegarPelaCategoriaPage } from './pegar-pela-categoria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PegarPelaCategoriaPageRoutingModule
  ],
  declarations: [PegarPelaCategoriaPage]
})
export class PegarPelaCategoriaPageModule {}

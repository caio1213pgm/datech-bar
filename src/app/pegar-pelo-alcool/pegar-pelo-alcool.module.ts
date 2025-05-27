import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PegarPeloAlcoolPageRoutingModule } from './pegar-pelo-alcool-routing.module';

import { PegarPeloAlcoolPage } from './pegar-pelo-alcool.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PegarPeloAlcoolPageRoutingModule
  ],
  declarations: [PegarPeloAlcoolPage]
})
export class PegarPeloAlcoolPageModule {}

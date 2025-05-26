import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PegarBebidaNomePageRoutingModule } from './pegar-bebida-nome-routing.module';

import { PegarBebidaNomePage } from './pegar-bebida-nome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PegarBebidaNomePageRoutingModule
  ],
  declarations: [PegarBebidaNomePage]
})
export class PegarBebidaNomePageModule {}

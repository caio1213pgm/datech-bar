import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PegarBebidaCopoPageRoutingModule } from './pegar-bebida-copo-routing.module';

import { PegarBebidaCopoPage } from './pegar-bebida-copo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PegarBebidaCopoPageRoutingModule
  ],
  declarations: [PegarBebidaCopoPage]
})
export class PegarBebidaCopoPageModule {}

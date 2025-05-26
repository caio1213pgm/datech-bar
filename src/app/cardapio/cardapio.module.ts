import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UppercaseDrinkPipe } from '../pipes/uppercase-drink.pipe'; // pipevh converter o nome da bebida para maiúscula

import { IonicModule } from '@ionic/angular';

import { CardapioPageRoutingModule } from './cardapio-routing.module';

import { CardapioPage } from './cardapio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardapioPageRoutingModule,
     UppercaseDrinkPipe
  ],
  declarations: [CardapioPage]
})
export class CardapioPageModule {}

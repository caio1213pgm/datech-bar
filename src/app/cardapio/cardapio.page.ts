import { Component, OnInit } from '@angular/core';
import { CardapioService } from '../service/cardapio.service';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.page.html',
  styleUrls: ['./cardapio.page.scss'],
  standalone: false,
})
export class CardapioPage implements OnInit {
  constructor(private cardapio: CardapioService) {}

  ingrediente: string = '';
  bebidas: any = []
  ngOnInit() {}

  showIngredient() {
    console.log(this.ingrediente);
    this.cardapio.getBebidasPorIngrediente(this.ingrediente).subscribe(
      (response) => {
        this.bebidas = response.drinks;
      }
    );
  }
}

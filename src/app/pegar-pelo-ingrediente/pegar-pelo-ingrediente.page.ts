import { Component, OnInit } from '@angular/core';
import { CardapioService } from '../service/cardapio.service';

@Component({
  selector: 'app-pegar-pelo-ingrediente',
  templateUrl: './pegar-pelo-ingrediente.page.html',
  styleUrls: ['./pegar-pelo-ingrediente.page.scss'],
  standalone: false,
})
export class PegarPeloIngredientePage implements OnInit {
  constructor(private cardapio: CardapioService) {}

  bebidas: any = [];
  ingrediente: string = '';
  chegou: any;
  ngOnInit() {}
  showIngredient() {
    console.log(this.ingrediente);
    this.cardapio
      .getBebidasPorIngrediente(this.ingrediente)
      .subscribe((response) => {
        this.bebidas = response.drinks;
        if(this.bebidas !== "no data found"){
          console.log(this.bebidas)
          this.chegou = true
        }else{
          this.chegou = false
        }

      });
  }
}

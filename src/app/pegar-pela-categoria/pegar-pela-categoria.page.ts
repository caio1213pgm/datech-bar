import { Component, OnInit } from '@angular/core';
import { CardapioService } from '../service/cardapio.service';

@Component({
  selector: 'app-pegar-pela-categoria',
  templateUrl: './pegar-pela-categoria.page.html',
  styleUrls: ['./pegar-pela-categoria.page.scss'],
  standalone: false
})
export class PegarPelaCategoriaPage implements OnInit {

  constructor(private cardapio: CardapioService) { }
  bebidas: any = []
  categoria: string = ""
  chegou: any

  ngOnInit() {
  }
  showCategory() {
    console.log(this.categoria);
    this.cardapio.getBebidasPorCategoria(this.categoria).subscribe((response) => {
      this.bebidas = response.drinks;
      if (this.bebidas && this.bebidas.length > 0) {
        console.log(this.bebidas);
        this.chegou = true;
      } else {
        this.chegou = false;
      }
    });
  }

}

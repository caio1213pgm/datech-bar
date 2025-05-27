import { Component, OnInit } from '@angular/core';
import { CardapioService } from '../service/cardapio.service';

@Component({
  selector: 'app-pegar-pelo-alcool',
  templateUrl: './pegar-pelo-alcool.page.html',
  styleUrls: ['./pegar-pelo-alcool.page.scss'],
  standalone: false
})
export class PegarPeloAlcoolPage implements OnInit {

  constructor(private cardapio: CardapioService) { }

  bebidas : any = []
  teorAlcool: string = ""
  chegou: any


  ngOnInit() {
  }
 showAlcohol() {
    console.log(this.teorAlcool);
    this.cardapio.getBebidasPorAlcool(this.teorAlcool).subscribe((response) => {
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

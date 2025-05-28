import { Component, OnInit } from '@angular/core';
import { CardapioService } from '../service/cardapio.service';

@Component({
  selector: 'app-pegar-bebida-nome',
  templateUrl: './pegar-bebida-nome.page.html',
  styleUrls: ['./pegar-bebida-nome.page.scss', '../app.component.scss'],
  standalone: false,
})
export class PegarBebidaNomePage implements OnInit {
  constructor(private cardapio: CardapioService) {}
  nome: string = '';
  bebidas: any[] = [];
  chegou: boolean | null = null;

  ngOnInit() {}

  showDrinkByName() {
    console.log(this.nome);
    this.cardapio.getBebidaPorNome(this.nome).subscribe((response) => {
      this.bebidas = response.drinks ?? [];
      this.chegou = this.bebidas.length > 0;
      console.log(this.bebidas);
    });
  }
}

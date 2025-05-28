import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardapioService } from '../service/cardapio.service';

@Component({
  selector: 'app-bebida',
  templateUrl: './bebida.page.html',
  styleUrls: ['./bebida.page.scss', '../app.component.scss'],
  standalone: false,
})
export class BebidaPage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private cardapio: CardapioService
  ) {}
  id: string = '';
  bebida: any = [];
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if(id){
    this.cardapio.getBebidaById(id).subscribe((response) => {
      this.bebida = response;
      console.log(this.bebida);
    });
  }
  }
}

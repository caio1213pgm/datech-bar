import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pegar-bebida-copo',
  templateUrl: './pegar-bebida-copo.page.html',
  styleUrls: ['./pegar-bebida-copo.page.scss', '../app.component.scss'],
  standalone: false,
})
export class PegarBebidaCopoPage implements OnInit {

  constructor(private http: HttpClient) { }

  copo: string = '';
  bebidas: any[] = [];
  chegou: boolean | null = null;

  ngOnInit() {
  }

  showByGlass() {
    this.http
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${this.copo}`
      )
      .subscribe((res: any) => {
        if (res.drinks !== 'no data found') {
          this.bebidas = res.drinks;
          this.chegou = true;
        } else {
          this.bebidas = [];
          this.chegou = false;
        }
      });
  }
}

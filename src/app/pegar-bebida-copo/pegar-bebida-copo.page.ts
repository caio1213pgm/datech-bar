import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pegar-bebida-copo',
  standalone: true,
  imports: [IonicModule, CommonModule, HttpClientModule, FormsModule, RouterModule],
  templateUrl: './pegar-bebida-copo.page.html',
  styleUrls: ['./pegar-bebida-copo.page.scss'],
})
export class PegarBebidaCopoPage {
  copo: string = '';
  bebidas: any[] = [];
  chegou: boolean | null = null;

  constructor(private http: HttpClient) {}

 showByGlass() {
  this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${this.copo}`)
    .subscribe((res: any) => {
      if (res.drinks) {
        this.bebidas = res.drinks;
        this.chegou = true;
      } else {
        this.bebidas = [];
        this.chegou = false;
      }
    }, (error: any) => {
      this.bebidas = [];
      this.chegou = false;
    });
}
}
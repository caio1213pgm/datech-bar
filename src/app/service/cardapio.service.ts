import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CardapioService {
  private apiBase = 'https://www.thecocktaildb.com/api/json/v1/1';

  constructor(private http: HttpClient) {}

  getBebidasPorCategoria(categoria: string) {
    return this.http.get(`${this.apiBase}/filter.php?c=${categoria}`);
  }

  getBebidasPorIngrediente(ingrediente: string) {
    return this.http.get(`${this.apiBase}/filter.php?i=${ingrediente}`);
  }

  getBebidasPorCopo(tipoCopo: string) {
    return this.http.get(`${this.apiBase}/filter.php?g=${tipoCopo}`);
  }

  getBebidasPorAlcool(alcoolico: string) {
    return this.http.get(`${this.apiBase}/filter.php?a=${alcoolico}`);
  }
}
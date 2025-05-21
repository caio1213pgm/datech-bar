import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Drink {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
}

interface DrinkResponse {
  drinks: Drink[] | null;
}

@Injectable({
  providedIn: 'root',
})
export class CardapioService {
  private apiBase = 'https://www.thecocktaildb.com/api/json/v1/1';

  constructor(private http: HttpClient) {}

  getBebidasPorCategoria(categoria: string): Observable<DrinkResponse> {
    return this.http.get<DrinkResponse>(
      `${this.apiBase}/filter.php?c=${categoria}`
    );
  }

  getBebidasPorIngrediente(ingrediente: string): Observable<DrinkResponse> {
    return this.http.get<DrinkResponse>(
      `${this.apiBase}/filter.php?i=${ingrediente}`
    );
  }

  getBebidasPorCopo(tipoCopo: string): Observable<DrinkResponse> {
    return this.http.get<DrinkResponse>(
      `${this.apiBase}/filter.php?g=${tipoCopo}`
    );
  }

  getBebidasPorAlcool(alcoolico: string): Observable<DrinkResponse> {
    return this.http.get<DrinkResponse>(
      `${this.apiBase}/filter.php?a=${alcoolico}`
    );
  }

  getBebidaPorNome(nome: string): Observable<DrinkResponse> {
    return this.http.get<DrinkResponse>(`${this.apiBase}/search.php?s=${nome}`);
  }

  getBebidaById(id: string): Observable<DrinkResponse> {
    return this.http.get<any>(`${this.apiBase}/lookup.php?i=${id}`).pipe(
      map((response) => (response.drinks ? response.drinks[0] : null)) // pega o primeiro drink
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BebidaService {
  constructor(private http: HttpClient) {}

  getBebidas() {
    return this.http.get('https://suaapi.com/bebidas');
  }
}

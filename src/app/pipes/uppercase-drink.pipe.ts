import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercaseDrink',
  standalone: true
})
export class UppercaseDrinkPipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    if (!value) return ''; // Se for vazio/nulo
    return value.toUpperCase(); // Converte para MAIÚSCULAS
  }
}
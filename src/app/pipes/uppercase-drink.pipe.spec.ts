import { UppercaseDrinkPipe } from './uppercase-drink.pipe';

describe('UppercaseDrinkPipe', () => {
  let pipe: UppercaseDrinkPipe;

  beforeEach(() => {
    pipe = new UppercaseDrinkPipe();  // Inicializa o pipe antes de cada teste
  });

  it('deve criar uma instância', () => {
    expect(pipe).toBeTruthy();  // Verifica se o pipe existe
  });

  it('deve retornar string vazia para valores nulos/undefined', () => {
    expect(pipe.transform(null)).toBe('');
    expect(pipe.transform(undefined)).toBe('');
  });

  it('deve converter strings para MAIÚSCULAS', () => {
    expect(pipe.transform('caipirinha')).toBe('CAIPIRINHA');
    expect(pipe.transform('whisky')).toBe('WHISKY');
  });
});
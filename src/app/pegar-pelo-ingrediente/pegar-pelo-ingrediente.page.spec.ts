import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PegarPeloIngredientePage } from './pegar-pelo-ingrediente.page';

describe('PegarPeloIngredientePage', () => {
  let component: PegarPeloIngredientePage;
  let fixture: ComponentFixture<PegarPeloIngredientePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PegarPeloIngredientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

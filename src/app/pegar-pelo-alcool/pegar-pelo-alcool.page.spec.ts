import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PegarPeloAlcoolPage } from './pegar-pelo-alcool.page';

describe('PegarPeloAlcoolPage', () => {
  let component: PegarPeloAlcoolPage;
  let fixture: ComponentFixture<PegarPeloAlcoolPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PegarPeloAlcoolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

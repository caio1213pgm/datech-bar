import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PegarPelaCategoriaPage } from './pegar-pela-categoria.page';

describe('PegarPelaCategoriaPage', () => {
  let component: PegarPelaCategoriaPage;
  let fixture: ComponentFixture<PegarPelaCategoriaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PegarPelaCategoriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

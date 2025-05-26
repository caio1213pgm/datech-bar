import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PegarBebidaNomePage } from './pegar-bebida-nome.page';

describe('PegarBebidaNomePage', () => {
  let component: PegarBebidaNomePage;
  let fixture: ComponentFixture<PegarBebidaNomePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PegarBebidaNomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PegarBebidaCopoPage } from './pegar-bebida-copo.page';

describe('PegarBebidaCopoPage', () => {
  let component: PegarBebidaCopoPage;
  let fixture: ComponentFixture<PegarBebidaCopoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PegarBebidaCopoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaoDePerfilComponent } from './cartao-de-perfil.component';

describe('CartaoDePerfilComponent', () => {
  let component: CartaoDePerfilComponent;
  let fixture: ComponentFixture<CartaoDePerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartaoDePerfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaoDePerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

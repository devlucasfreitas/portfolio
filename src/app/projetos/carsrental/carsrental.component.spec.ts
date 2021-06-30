import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsrentalComponent } from './carsrental.component';

describe('CarsrentalComponent', () => {
  let component: CarsrentalComponent;
  let fixture: ComponentFixture<CarsrentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsrentalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsrentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

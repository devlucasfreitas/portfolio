import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingIntroComponent } from './tracking-intro.component';

describe('TrackingIntroComponent', () => {
  let component: TrackingIntroComponent;
  let fixture: ComponentFixture<TrackingIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackingIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

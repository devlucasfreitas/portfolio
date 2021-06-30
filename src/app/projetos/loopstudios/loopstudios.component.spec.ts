import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopstudiosComponent } from './loopstudios.component';

describe('LoopstudiosComponent', () => {
  let component: LoopstudiosComponent;
  let fixture: ComponentFixture<LoopstudiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoopstudiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoopstudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

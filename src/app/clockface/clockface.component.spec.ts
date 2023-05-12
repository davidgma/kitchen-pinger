import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockfaceComponent } from './clockface.component';

describe('ClockfaceComponent', () => {
  let component: ClockfaceComponent;
  let fixture: ComponentFixture<ClockfaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClockfaceComponent]
    });
    fixture = TestBed.createComponent(ClockfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

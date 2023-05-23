import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconTimerComponent } from './icon-timer.component';

describe('IconTimerComponent', () => {
  let component: IconTimerComponent;
  let fixture: ComponentFixture<IconTimerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconTimerComponent]
    });
    fixture = TestBed.createComponent(IconTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconStopwatchComponent } from './icon-stopwatch.component';

describe('IconStopwatchComponent', () => {
  let component: IconStopwatchComponent;
  let fixture: ComponentFixture<IconStopwatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconStopwatchComponent]
    });
    fixture = TestBed.createComponent(IconStopwatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

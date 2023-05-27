import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconClockComponent } from './icon-clock.component';

describe('IconClockComponent', () => {
  let component: IconClockComponent;
  let fixture: ComponentFixture<IconClockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconClockComponent]
    });
    fixture = TestBed.createComponent(IconClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

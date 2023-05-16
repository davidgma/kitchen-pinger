import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconDayComponent } from './icon-day.component';

describe('IconDayComponent', () => {
  let component: IconDayComponent;
  let fixture: ComponentFixture<IconDayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconDayComponent]
    });
    fixture = TestBed.createComponent(IconDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

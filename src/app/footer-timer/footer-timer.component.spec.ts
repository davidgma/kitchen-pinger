import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterTimerComponent } from './footer-timer.component';

describe('FooterTimerComponent', () => {
  let component: FooterTimerComponent;
  let fixture: ComponentFixture<FooterTimerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterTimerComponent]
    });
    fixture = TestBed.createComponent(FooterTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

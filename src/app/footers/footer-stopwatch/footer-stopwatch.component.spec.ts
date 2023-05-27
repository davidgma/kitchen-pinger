import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterStopwatchComponent } from './footer-stopwatch.component';

describe('FooterStopwatchComponent', () => {
  let component: FooterStopwatchComponent;
  let fixture: ComponentFixture<FooterStopwatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterStopwatchComponent]
    });
    fixture = TestBed.createComponent(FooterStopwatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

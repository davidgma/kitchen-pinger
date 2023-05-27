import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterClockComponent } from './footer-clock.component';

describe('FooterClockComponent', () => {
  let component: FooterClockComponent;
  let fixture: ComponentFixture<FooterClockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterClockComponent]
    });
    fixture = TestBed.createComponent(FooterClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

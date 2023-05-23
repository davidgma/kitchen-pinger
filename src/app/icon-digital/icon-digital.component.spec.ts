import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconDigitalComponent } from './icon-digital.component';

describe('IconDigitalComponent', () => {
  let component: IconDigitalComponent;
  let fixture: ComponentFixture<IconDigitalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconDigitalComponent]
    });
    fixture = TestBed.createComponent(IconDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

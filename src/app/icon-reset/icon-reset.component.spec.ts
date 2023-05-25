import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconResetComponent } from './icon-reset.component';

describe('IconResetComponent', () => {
  let component: IconResetComponent;
  let fixture: ComponentFixture<IconResetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconResetComponent]
    });
    fixture = TestBed.createComponent(IconResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

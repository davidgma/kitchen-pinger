import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconCancelComponent } from './icon-cancel.component';

describe('IconCancelComponent', () => {
  let component: IconCancelComponent;
  let fixture: ComponentFixture<IconCancelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconCancelComponent]
    });
    fixture = TestBed.createComponent(IconCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

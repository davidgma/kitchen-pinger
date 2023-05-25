import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconStartComponent } from './icon-start.component';

describe('IconStartComponent', () => {
  let component: IconStartComponent;
  let fixture: ComponentFixture<IconStartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconStartComponent]
    });
    fixture = TestBed.createComponent(IconStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

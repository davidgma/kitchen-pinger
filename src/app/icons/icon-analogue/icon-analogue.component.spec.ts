import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconAnalogueComponent } from './icon-analogue.component';

describe('IconAnalogueComponent', () => {
  let component: IconAnalogueComponent;
  let fixture: ComponentFixture<IconAnalogueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconAnalogueComponent]
    });
    fixture = TestBed.createComponent(IconAnalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

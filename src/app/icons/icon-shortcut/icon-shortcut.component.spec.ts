import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconShortcutComponent } from './icon-shortcut.component';

describe('IconShortcutComponent', () => {
  let component: IconShortcutComponent;
  let fixture: ComponentFixture<IconShortcutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconShortcutComponent]
    });
    fixture = TestBed.createComponent(IconShortcutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Show18Component } from './show18.component';

describe('Show18Component', () => {
  let component: Show18Component;
  let fixture: ComponentFixture<Show18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Show18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Show18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

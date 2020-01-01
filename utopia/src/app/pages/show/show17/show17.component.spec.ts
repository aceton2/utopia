import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Show17Component } from './show17.component';

describe('Show17Component', () => {
  let component: Show17Component;
  let fixture: ComponentFixture<Show17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Show17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Show17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

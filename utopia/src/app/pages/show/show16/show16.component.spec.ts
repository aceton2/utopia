import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Show16Component } from './show16.component';

describe('Show16Component', () => {
  let component: Show16Component;
  let fixture: ComponentFixture<Show16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Show16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Show16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

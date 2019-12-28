import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Y2017Component } from './y2017.component';

describe('Y2017Component', () => {
  let component: Y2017Component;
  let fixture: ComponentFixture<Y2017Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Y2017Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Y2017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

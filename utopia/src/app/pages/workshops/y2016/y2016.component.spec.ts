import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Y2016Component } from './y2016.component';

describe('Y2016Component', () => {
  let component: Y2016Component;
  let fixture: ComponentFixture<Y2016Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Y2016Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Y2016Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

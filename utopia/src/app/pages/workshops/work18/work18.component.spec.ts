import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Work18Component } from './work18.component';

describe('Work18Component', () => {
  let component: Work18Component;
  let fixture: ComponentFixture<Work18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Work18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Work18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

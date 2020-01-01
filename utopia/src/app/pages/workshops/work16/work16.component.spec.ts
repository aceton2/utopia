import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Work16Component } from './work16.component';

describe('Work16Component', () => {
  let component: Work16Component;
  let fixture: ComponentFixture<Work16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Work16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Work16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

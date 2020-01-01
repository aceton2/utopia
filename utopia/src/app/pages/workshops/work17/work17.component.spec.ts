import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Work17Component } from './work17.component';

describe('Work17Component', () => {
  let component: Work17Component;
  let fixture: ComponentFixture<Work17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Work17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Work17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScWidgetComponent } from './sc-widget.component';

describe('ScWidgetComponent', () => {
  let component: ScWidgetComponent;
  let fixture: ComponentFixture<ScWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

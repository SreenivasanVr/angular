import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Appdetail2Component } from './appdetail2.component';

describe('Appdetail2Component', () => {
  let component: Appdetail2Component;
  let fixture: ComponentFixture<Appdetail2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Appdetail2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Appdetail2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

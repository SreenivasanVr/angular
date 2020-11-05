import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App1detailComponent } from './app1detail.component';

describe('App1detailComponent', () => {
  let component: App1detailComponent;
  let fixture: ComponentFixture<App1detailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App1detailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App1detailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

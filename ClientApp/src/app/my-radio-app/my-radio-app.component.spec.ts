import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRadioAppComponent } from './my-radio-app.component';

describe('MyRadioAppComponent', () => {
  let component: MyRadioAppComponent;
  let fixture: ComponentFixture<MyRadioAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRadioAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRadioAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSignUpComponent } from './admin-sign-up.component';

describe('AdminSignUpComponent', () => {
  let component: AdminSignUpComponent;
  let fixture: ComponentFixture<AdminSignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

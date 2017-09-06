import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySignUpComponent } from './company-sign-up.component';

describe('CompanySignUpComponent', () => {
  let component: CompanySignUpComponent;
  let fixture: ComponentFixture<CompanySignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanySignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanySignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

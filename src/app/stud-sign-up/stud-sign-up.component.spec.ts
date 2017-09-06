import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudSignUpComponent } from './stud-sign-up.component';

describe('StudSignUpComponent', () => {
  let component: StudSignUpComponent;
  let fixture: ComponentFixture<StudSignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudSignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

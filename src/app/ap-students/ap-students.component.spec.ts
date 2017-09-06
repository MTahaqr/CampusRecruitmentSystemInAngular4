import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApStudentsComponent } from './ap-students.component';

describe('ApStudentsComponent', () => {
  let component: ApStudentsComponent;
  let fixture: ComponentFixture<ApStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

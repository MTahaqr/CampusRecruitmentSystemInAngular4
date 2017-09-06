import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStudComponent } from './all-stud.component';

describe('AllStudComponent', () => {
  let component: AllStudComponent;
  let fixture: ComponentFixture<AllStudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllStudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllStudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

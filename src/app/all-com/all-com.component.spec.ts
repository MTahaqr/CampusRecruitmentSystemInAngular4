import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllComComponent } from './all-com.component';

describe('AllComComponent', () => {
  let component: AllComComponent;
  let fixture: ComponentFixture<AllComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

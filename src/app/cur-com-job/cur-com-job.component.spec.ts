import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurComJobComponent } from './cur-com-job.component';

describe('CurComJobComponent', () => {
  let component: CurComJobComponent;
  let fixture: ComponentFixture<CurComJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurComJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurComJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

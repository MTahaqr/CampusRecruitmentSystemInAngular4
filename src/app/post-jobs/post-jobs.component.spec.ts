import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostJobsComponent } from './post-jobs.component';

describe('PostJobsComponent', () => {
  let component: PostJobsComponent;
  let fixture: ComponentFixture<PostJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

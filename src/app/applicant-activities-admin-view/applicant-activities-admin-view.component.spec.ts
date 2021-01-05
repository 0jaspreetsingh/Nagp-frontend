import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantActivitiesAdminViewComponent } from './applicant-activities-admin-view.component';

describe('ApplicantActivitiesAdminViewComponent', () => {
  let component: ApplicantActivitiesAdminViewComponent;
  let fixture: ComponentFixture<ApplicantActivitiesAdminViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantActivitiesAdminViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantActivitiesAdminViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

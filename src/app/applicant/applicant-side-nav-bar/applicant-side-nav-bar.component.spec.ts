import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantSideNavBarComponent } from './applicant-side-nav-bar.component';

describe('ApplicantSideNavBarComponent', () => {
  let component: ApplicantSideNavBarComponent;
  let fixture: ComponentFixture<ApplicantSideNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantSideNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantSideNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

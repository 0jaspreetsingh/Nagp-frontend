import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolledActivitiesComponent } from './enrolled-activities.component';

describe('EnrolledActivitiesComponent', () => {
  let component: EnrolledActivitiesComponent;
  let fixture: ComponentFixture<EnrolledActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrolledActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrolledActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

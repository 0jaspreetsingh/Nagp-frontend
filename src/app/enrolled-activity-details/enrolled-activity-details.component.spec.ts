import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolledActivityDetailsComponent } from './enrolled-activity-details.component';

describe('EnrolledActivityDetailsComponent', () => {
  let component: EnrolledActivityDetailsComponent;
  let fixture: ComponentFixture<EnrolledActivityDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrolledActivityDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrolledActivityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

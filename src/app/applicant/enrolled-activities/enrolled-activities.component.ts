import { AuthenticateAdminService } from './../../services/authenticate-admin.service';
import { ApplicantActivityService } from './../../services/applicant-activity.service';
import { ApplicantActivityRecordIO } from './../../models/applicantActivityRecordIO.model';
import { ApplicantActivityRecord } from './../../models/applicantActivityRecord.model';
import { Activity } from './../../models/activity.model';
import { Applicant } from './../../models/applicant.model';
import { ActivityService } from './../../services/activity.service';
import { Router } from '@angular/router';
import { ApplicantIO } from 'src/app/models/applicantIO.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applicant-activities',
  templateUrl: './enrolled-activities.component.html',
  styleUrls: ['./enrolled-activities.component.css']
})
export class EnrolledActivitiesComponent implements OnInit {

  activityList: any;
  applicant: Applicant;
  applicantToSend: ApplicantIO;
  applicantActivityRecord: ApplicantActivityRecordIO;
  constructor(private activities: ActivityService, private router: Router, private applicantActivityService: ApplicantActivityService,private authenticate:AuthenticateAdminService) { }

  ngOnInit() {
    if (sessionStorage.getItem("applicant") == null || sessionStorage.getItem("applicant") == undefined) {
      alert("session timeout ,please login again");
      this.router.navigateByUrl("");
    }
    this.applicant = new Applicant;
    this.applicantToSend = new ApplicantIO;
    this.applicantActivityRecord = new ApplicantActivityRecordIO;

    this.applicant = JSON.parse(sessionStorage.getItem("applicant"));
   // console.log(this.applicant);
    this.applicantToSend.employee_id = this.applicant.employee_id;
    this.applicantToSend.batch_id = this.applicant.batch.batch_id;
    this.applicantToSend.level_id = this.applicant.level.level_id;
    this.applicantToSend.nagp_status = this.applicant.contactNumber;
    this.applicantToSend.email = this.applicant.email;
    this.applicantToSend.name = this.applicant.name;
    this.applicantToSend.password = this.applicant.password;
   // this.getActivitiesOfApplicant(this.applicantToSend);
    // console.log("************8");
    // this.getAllApplicantActivityRecord();
    // this.getAllApplicantActivityRecordFilterByEmp("6");
    // console.log("************8");

    this.getAllApplicantActivityRecordFilterByEmp(this.applicant.employee_id);
  }

  // getActivitiesOfApplicant(applicant: ApplicantIO) {
  //   this.activities.getActivitiesOfApplicant(applicant).subscribe((data) => {
  //     this.activityList = data;
  //     console.log(data);
  //     console.log(data[0]);
  //   }, (error) => {
  //     console.log(error);
  //   })
  // }

  // enroll(activity: Activity) {
  //   console.log(activity);
  //   this.applicantActivityRecord.activity_id = activity.activity_id;
  //   this.applicantActivityRecord.level_id = this.applicant.level.level_id;
  //   this.applicantActivityRecord.employee_id = this.applicant.employee_id;
  //   this.applicantActivityRecord.status = "PLANNED";
  //   this.applicantActivityService.addApplicantActivityRecord(this.applicantActivityRecord).subscribe((data) => {
  //     console.log(data);
  //   }, (error) => {
  //     console.log(error);
  //   })
  //   //this.applicantActivityRecord.employee_id= this.applicant.employee_id;
  // }

  // getAllApplicantActivityRecord() {
  //   this.applicantActivityService.getAllApplicantActivityRecord().subscribe((data) => {
  //     console.log(data);
  //   }, (error) => {
  //     console.log(error);
  //   })
  // }

  getAllApplicantActivityRecordFilterByEmp(employee_id: string) {
    this.applicantActivityService.getAllApplicantActivityRecordFilterByEmpId(employee_id).subscribe((data:any) => {
      console.log(data);
      this.activityList=data;
    }, (error) => {
      console.log(error);
    })
  }

  getDetails(activity:Activity){
    this.applicantActivityService.enrolledActivityDetails=activity;
    if(this.authenticate.applicantLogin){
    this.router.navigateByUrl("applicantHome/activityDetails");}else if(this.authenticate.adminLogin){
      this.router.navigateByUrl("home/applicant/applicantProfile/activityDetails");
    }
  }
}

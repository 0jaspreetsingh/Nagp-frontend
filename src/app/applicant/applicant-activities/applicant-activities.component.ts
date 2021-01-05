import { ApplicantActivityService } from './../../services/applicant-activity.service';
import { ApplicantActivityRecordIO } from './../../models/applicantActivityRecordIO.model';
import { Activity } from './../../models/activity.model';
import { Applicant } from './../../models/applicant.model';
import { ActivityService } from './../../services/activity.service';
import { Router } from '@angular/router';
import { ApplicantIO } from 'src/app/models/applicantIO.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applicant-activities',
  templateUrl: './applicant-activities.component.html',
  styleUrls: ['./applicant-activities.component.css']
})
export class ApplicantActivitiesComponent implements OnInit {

  activityList: any;
  applicant: Applicant;
  applicantToSend: ApplicantIO;
  applicantActivityRecord: ApplicantActivityRecordIO;
  applicantActivityRecordIsAlreadyEnrolled: ApplicantActivityRecordIO;
  isEnrolledBoolean: boolean;
  alreadyEnrolledactivityList: any;

  constructor(private activities: ActivityService, private router: Router, private applicantActivityService: ApplicantActivityService) { }

  ngOnInit() {
    if (sessionStorage.getItem("applicant") == null || sessionStorage.getItem("applicant") == undefined) {
      alert("session timeout ,please login again");
      this.router.navigateByUrl("");
    }
    this.applicant = new Applicant;
    this.applicantToSend = new ApplicantIO;
    this.applicantActivityRecord = new ApplicantActivityRecordIO;
    this.applicant = JSON.parse(sessionStorage.getItem("applicant"));
    console.log(this.applicant);
    this.applicantToSend.employee_id = this.applicant.employee_id;
    this.applicantToSend.batch_id = this.applicant.batch.batch_id;
    this.applicantToSend.level_id = this.applicant.level.level_id;
    this.applicantToSend.nagp_status = this.applicant.contactNumber;
    this.applicantToSend.email = this.applicant.email;
    this.applicantToSend.name = this.applicant.name;
    this.applicantToSend.password = this.applicant.password;
    this.getActivitiesOfApplicant(this.applicantToSend);

    this.applicantActivityRecordIsAlreadyEnrolled = new ApplicantActivityRecordIO();
    this.applicantActivityRecordIsAlreadyEnrolled.employee_id = this.applicant.employee_id;
    this.applicantActivityRecordIsAlreadyEnrolled.level_id = this.applicant.level.level_id;
    // for(let list of this.activityList){
    //  this.isAlreadyEnrolled(list);
    // }
    console.log(this.activityList);
    // this.getAllApplicantActivityRecordFilterByEmp(this.applicant.employee_id);
    // console.log("************8");
    // this.getAllApplicantActivityRecord();
    // this.getAllApplicantActivityRecordFilterByEmp("6");
    // console.log("************8");

  }

  getActivitiesOfApplicant(applicant: ApplicantIO) {
    this.activities.getActivitiesOfApplicant(applicant).subscribe((data) => {
      this.activityList = data;
      console.log(data);
      console.log(data[0]);
    }, (error) => {
      console.log(error);
    })
  }

  // isAlreadyEnrolled(activity: Activity) {
  //   this.applicantActivityRecordIsAlreadyEnrolled.activity_id = activity.activity_id;
  //   console.log("doing it over ad over");
  //   console.log(this.applicantActivityRecordIsAlreadyEnrolled);
  //   this.applicantActivityService.isRecordPresent(this.applicantActivityRecordIsAlreadyEnrolled).subscribe((data) => {

  //     console.log(data);
  //     return data;
  //   })
  // } // get status with it

  enroll(activity: Activity) {
    console.log(activity);
    this.applicantActivityRecord.activity_id = activity.activity_id;
    this.applicantActivityRecord.level_id = this.applicant.level.level_id;
    this.applicantActivityRecord.employee_id = this.applicant.employee_id;
    this.applicantActivityRecord.status = "PLANNED";
    this.applicantActivityService.addApplicantActivityRecord(this.applicantActivityRecord).subscribe((message)=>{
      alert(message);
    },(error)=>{
      console.log(error);
    })
    // this.applicantActivityService.isRecordPresent(this.applicantActivityRecord).subscribe((data:any) => { //return number of same activity record in database
    //********** */
      //   console.log(data);
    //   if (data !== null || data != undefined) {
    //    if(activity.max_qualification>=data.length){
    //      alert("Already Enrolled in this Activity");
    //    }else{

    //    }
    //   } else {
    //     this.applicantActivityRecord.status = "PLANNED";
    //     this.applicantActivityService.addApplicantActivityRecord(this.applicantActivityRecord).subscribe((data: any) => {
    //       this.isEnrolledBoolean = data;
    //       if (this.isEnrolledBoolean) {
    //         alert("Enrolled Succesfully , an email with activity details is sent to your registered Email id");
    //       } else {
    //         alert("Already Enrolled in this Activity");
    //       }
    //       console.log(data);
    //     }, (error) => {
    //       console.log(error);
    //     })

    //   }
    // }, (error) => {
    //   console.log(error);
    // })
    //******** */
    // this.applicantActivityRecord.status = "PLANNED";
    // this.applicantActivityService.addApplicantActivityRecord(this.applicantActivityRecord).subscribe((data:boolean) => {
    //   this.isEnrolledBoolean=data;
    //   if(this.isEnrolledBoolean){
    //     alert("Enrolled Succesfully , an email with activity details is sent to your registered Email id");
    //   }else{
    //     alert("Already Enrolled in this Activity");
    //   }
    //   console.log(data);
    // }, (error) => {
    //   console.log(error);
    // })
  }

  // getAllApplicantActivityRecord() {
  //   this.applicantActivityService.getAllApplicantActivityRecord().subscribe((data) => {
  //     console.log(data);
  //   }, (error) => {
  //     console.log(error);
  //   })
  // }

  //   getAllApplicantActivityRecordFilterByEmp(employee_id: string) {
  //     this.applicantActivityService.getAllApplicantActivityRecordFilterByEmpId(employee_id).subscribe((data) => {
  //       console.log(data);
  //       this.alreadyEnrolledactivityList=data;
  //     }, (error) => {
  //       console.log(error);
  //     })
  //   }


}
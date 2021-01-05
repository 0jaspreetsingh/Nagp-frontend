import { AuthenticateAdminService } from './../services/authenticate-admin.service';
import { Router } from '@angular/router';
import { ApplicantActivityService } from './../services/applicant-activity.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enrolled-activity-details',
  templateUrl: './enrolled-activity-details.component.html',
  styleUrls: ['./enrolled-activity-details.component.css']
})
export class EnrolledActivityDetailsComponent implements OnInit {
  applicantdetails: any;
  activityDetails: any;
  adminLoggedIn:boolean;
  applicantLoggedin:boolean;
  percentscore:any='';
  constructor(private applicantActivityService: ApplicantActivityService, private router: Router,private authenticate:AuthenticateAdminService) { }

  ngOnInit() {
    if (this.applicantActivityService.enrolledActivityDetails != null || this.applicantActivityService.enrolledActivityDetails != undefined) {
      this.activityDetails = this.applicantActivityService.enrolledActivityDetails;
    }
    if (sessionStorage.getItem("applicant") != null || sessionStorage.getItem("applicant") != undefined) {
      this.applicantdetails = JSON.parse(sessionStorage.getItem("applicant"));
    }
    if (this.applicantdetails == undefined || this.activityDetails == undefined) {
      alert("Opps an error occoured , please try again");
      this.router.navigateByUrl("");
    }
    console.log(this.activityDetails);
    console.log(this.applicantdetails);
    this.adminLoggedIn=this.authenticate.adminLogin;
    this.applicantLoggedin=this.authenticate.applicantLogin;
  }


  updateStatus(status:string) {
    console.log("update status in database and then admin can filter activities where status is done and then review the activity and if activity is completed automatically update points");
    if(status=="COMPLETED"){
      status=status+" "+this.percentscore;
      console.log(status);
    }
    this.applicantActivityService.changeStatus(this.activityDetails.applicantActvityId,status).subscribe((data) => {
      if(data==null||data==undefined){
        alert("an error occoured while updating status");
      }else{
        alert("status updated sucessfully");
      }
      this.activityDetails=data;
      console.log(data);
    }, (error) => {
      console.log(error);
    })
  }




}

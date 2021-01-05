import { AuthenticateAdminService } from './../services/authenticate-admin.service';
import { comment } from './../models/comment.model';
import { ApplicantActivityService } from './../services/applicant-activity.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  owner: string;
  commentstring: string = "";
  commentbody: comment;
  activityDetails: any;
  applicantdetails: any;
  commentList: any;
  constructor(private applicantActivityService: ApplicantActivityService, private authenticate: AuthenticateAdminService) { }

  ngOnInit() {
    this.commentbody = new comment();
    if (this.applicantActivityService.enrolledActivityDetails != null || this.applicantActivityService.enrolledActivityDetails != undefined) {
      this.activityDetails = this.applicantActivityService.enrolledActivityDetails;
    }
    if (sessionStorage.getItem("applicant") != null || sessionStorage.getItem("applicant") != undefined) {
      this.applicantdetails = JSON.parse(sessionStorage.getItem("applicant"));
    } if (this.authenticate.adminLogin) {
      this.commentbody.owner = sessionStorage.getItem('name');
    } else {
      this.commentbody.owner = this.applicantdetails.name;
    }
    this.getComments(this.activityDetails.applicantActvityId);
  }

  getComments(n: any) {
    this.applicantActivityService.getComments(n).subscribe((data) => {
      console.log(data);
      this.commentList = data;
    }, (error) => {
      console.log(error);
    })
  }

  postComment() {

    this.commentbody.activityRecord = this.activityDetails.applicantActvityId;
    console.log(this.commentstring);
    if(this.commentstring!='' || this.commentstring!=undefined){ 
    this.commentbody.comment = this.commentstring;
    // if (this.authenticate.adminLogin) {
    //   this.commentbody.owner = sessionStorage.getItem('name');
    // } else {
    //   this.commentbody.owner = this.applicantdetails.name;
    // }
    console.log(this.commentbody);
  
    // if (this.commentbody.comment != null || this.commentbody.comment != undefined || this.commentbody.comment != "") {
      this.applicantActivityService.postComment(this.commentbody).subscribe((data) => {
        console.log(data);
        this.commentList = data;
      }, (error) => {
        console.log(error);
      })
    }
  }
}

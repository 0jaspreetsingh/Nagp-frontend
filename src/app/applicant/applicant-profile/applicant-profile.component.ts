import { Router } from '@angular/router';
import { ApplicantService } from './../../services/applicant.service';
import { Applicant } from './../../models/applicant.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applicant-profile',
  templateUrl: './applicant-profile.component.html',
  styleUrls: ['./applicant-profile.component.css']
})
export class ApplicantProfileComponent implements OnInit {

viewApplicant:Applicant;

  constructor(private applicantService:ApplicantService,private router:Router) { }

  ngOnInit() {
    if(this.applicantService.viewApplicant==null||this.applicantService.viewApplicant==undefined){
      alert("opps , an error occcoured!");
      this.router.navigateByUrl("home/applicant");
    }else{
      this.viewApplicant=this.applicantService.viewApplicant;
      console.log(this.viewApplicant);
      sessionStorage.setItem("applicant",JSON.stringify(this.viewApplicant));
    }
  }

  // showActivityDetails(){
  //   sessionStorage.setItem("applicant",JSON.stringify(this.viewApplicant));
  //   this.router.navigateByUrl("home/applicantshowApplicantActivities");
  // }

  

}

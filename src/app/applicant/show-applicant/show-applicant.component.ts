import { Router } from '@angular/router';
import { Applicant } from './../../models/applicant.model';
import { ApplicantService } from './../../services/applicant.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-show-applicant',
  templateUrl: './show-applicant.component.html',
  styleUrls: ['./show-applicant.component.css']
})
export class ShowApplicantComponent implements OnInit {

  applicantList:any;
  constructor(private applicants:ApplicantService,private router:Router) { }

  ngOnInit() {
    this.getApplicants();
  }

  getApplicants(){
    this.applicants.getAllApplicants().subscribe((data)=>{
      this.applicantList=data;
      console.log(data);
      console.log(data[0]);
    },(error)=>{
      console.log(error);
    })
  }
  viewProfile(applicant:Applicant){
    this.applicants.viewApplicant=applicant;
    this.router.navigateByUrl("home/applicant/applicantProfile/applicantdetails");
    
  }
}

import { EventEmitter } from '@angular/core';

import { ApplicantIO } from 'src/app/models/applicantIO.model';
import { Applicant } from './../../models/applicant.model';
import { Router } from '@angular/router';
import { ApplicantService } from './../../services/applicant.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  viewApplicant:Applicant;
  sendApplicant:ApplicantIO;
  applicantPoints:number;

  constructor(private applicantService:ApplicantService,private router:Router) { }
  
    ngOnInit() {
      if(sessionStorage.getItem("applicant")==null||sessionStorage.getItem("applicant")==undefined){
        alert("opps , an error occcoured! please login again");
        this.router.navigateByUrl("");
      }else{
        //this.viewApplicant=this.applicantService.viewApplicant;
        this.viewApplicant=JSON.parse(sessionStorage.getItem("applicant"));
        console.log(this.viewApplicant);
        this.sendApplicant= new ApplicantIO();
        this.sendApplicant.employee_id=this.viewApplicant.employee_id;
        this.sendApplicant.level_id= this.viewApplicant.level.level_id;
        this.getApplicantPoints(this.sendApplicant);
       // sessionStorage.save("applicantIO",JSON.stringify(this.sendApplicant));
      }
    }
  
    getApplicantPoints(applicant:ApplicantIO){
      this.applicantService.getApplicantPoints(applicant).subscribe((data:any)=>{
        this.applicantPoints=data;
        this.applicantService.pointsData=data;
       this.applicantService.dataFetched.emit(data);
      })
    }
  
  }
  
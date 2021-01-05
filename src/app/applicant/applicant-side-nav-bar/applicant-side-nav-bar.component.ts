import { Router } from '@angular/router';
import { Applicant } from './../../models/applicant.model';
import { ApplicantService } from './../../services/applicant.service';
import { AuthenticateAdminService } from './../../services/authenticate-admin.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-applicant-side-nav-bar',
  templateUrl: './applicant-side-nav-bar.component.html',
  styleUrls: ['./applicant-side-nav-bar.component.css']
})
export class ApplicantSideNavBarComponent implements OnInit {

  employee_id:string;
  constructor(private authenticate: AuthenticateAdminService,private applicantService:ApplicantService,private router:Router) { }

  ngOnInit() {
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
      });
    });

    // if (this.applicantService.viewApplicant == null || this.applicantService.viewApplicant == undefined) {
    //   alert("opps , an error occoured , please login again");
    //   this.router.navigateByUrl("");
      
    // }

  }

  // getApplicant(employee_id:string) {
  //   return this.applicantService.getApplicant(employee_id).subscribe((data:Applicant)=>{
  //     this.applicantService.applicantdetails=data;
  //     console.log(data);
  //   },(error)=>{
  //     console.log(error);
  //   })
  // }
}

import { ApplicantIO } from 'src/app/models/applicantIO.model';
import { Admin } from './../models/admin.model';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateAdminService {

  // url:string="http://localhost:9999/NAGP_ManagementRestApi/webapi/admin/Levels";
  // AdminUrl:string="http://localhost:9999/NAGP_ManagementRestApi/webapi/admin/authenticate";
  url:string="http://localhost:9999/level/all";
  AdminUrl:string="http://localhost:9999/login";
  ApplicantUrl:string="http://localhost:9999/loginApplicant";
  constructor(private http: HttpClient) { }
  
  public employee_id:string;
  public adminLogin:boolean=false;
  public applicantLogin:boolean=false;

  getAllLevels(){
    return (this.http.get(this.url));
  }

  authenticateAdmin(admin:Admin){
    return(this.http.post(this.AdminUrl,admin,{
      // responseType: 'text'
    }));
  }

  authenticateApplicant(applicant:ApplicantIO){
    console.log(applicant);
    return(this.http.post(this.ApplicantUrl,applicant,{
      // responseType: 'text'
    }));
  }
}

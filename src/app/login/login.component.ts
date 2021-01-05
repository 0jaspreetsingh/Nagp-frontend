import { ApplicantService } from './../services/applicant.service';
import { ApplicantIO } from 'src/app/models/applicantIO.model';
import { Applicant } from './../models/applicant.model';
import { AuthenticateAdminService } from './../services/authenticate-admin.service';
import { Admin } from './../models/admin.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name: string = "";
  password: string = "";
  admin: Admin;
  applicant:ApplicantIO;
  levelsData: any;
  data: string;
  message: string = "";

  constructor(private authenticate: AuthenticateAdminService,private applicantService:ApplicantService, private router: Router) {
    // this.name = sessionStorage.getItem("name");
    // this.password = sessionStorage.getItem("password");
  }

  ngOnInit() {
    sessionStorage.clear();
    this.authenticate.adminLogin=false;
    this.authenticate.applicantLogin=false;
  }

  // authenticateUser() {
  //   this.message = "";
  //   console.log("reached here");
  //   this.admin = new Admin(this.name, this.password);
  //   // this.authenticate.getAllLevels().subscribe((data: any) => {
  //   //   this.levelsData = data;
  //   //   console.log(data);
  //   //   // console.log(data.city.country);
  //   // }), (error) => {
  //   //   //console.log("City not found")
  //   //   console.log(error)
  //   // }
  //   this.authenticate.authenticateAdmin(this.admin).subscribe(((data: any) => {
  //     console.log("type of data" + typeof data);
  //     this.data = data;
  //     this.admin = JSON.parse(this.data.jsonData);
  //     //this.data = JSON.parse(data);
  //     // this.data = data;
  //     console.log(this.data);
  //     console.log("admin is ...");
  //     console.log(this.admin);
  //     console.log("------");
  //     // if (this.data.sessionKey == "Invalid User") {
  //     //   this.message = "Invalid Username or Passsword";
  //     //   console.log("invalid")
  //     // } else {
  //     //   // console.log(data)
  //     //   this.admin = data.object;
  //     //   console.log(this.data.sessionKey);
  //     //   console.log(this.data.object.userName);
  //     //   sessionStorage.setItem("sessionkey", data.sessionKey);
  //     // }
  //   }), (error) => {
  //     console.log("error")
  //   })
  // }
  // @ViewChild('f') loginForm:NgForm
  authenticateUser() {
    //console.log(this.loginForm.value.checkBox);
    console.log("waiting for the server to respond");
    this.data = null;
    this.message = "Loading...";
    this.admin = new Admin(this.name, this.password);
    this.authenticate.authenticateAdmin(this.admin).subscribe((data: string) => {
      this.data = data;
      console.log(data);

      sessionStorage.setItem("sessionKey", data);
      sessionStorage.setItem("name",this.name);
      this.message = "";
      console.log("Redirect to home page");
      this.authenticate.adminLogin=true;
      this.router.navigateByUrl('home');


    }, (error) => {
      this.message="Invalid Username or Password";
      console.log("Invalid Username or password");
      console.log(error);
    })
  }

  authenticateApplicant(){
    console.log("waiting for the server to respond");
    this.data = null;
    this.message = "Loading...";
    // this.applicant.email=this.name;
    // this.applicant.password=this.password;
    this.applicant= new ApplicantIO;
    this.applicant.employee_id= this.name;
    this.applicant.password=this.password;
    this.authenticate.authenticateApplicant(this.applicant).subscribe((data: Applicant) => {
     // this.data = data;
      console.log(data);

    //  sessionStorage.setItem("sessionKey", data);
      sessionStorage.setItem("name",this.name);
      this.message = "";
      console.log("Redirect to home page");
      this.applicantService.viewApplicant=data;
      sessionStorage.setItem("applicant",JSON.stringify(this.applicantService.viewApplicant));
      this.authenticate.applicantLogin=true;
      this.router.navigateByUrl('applicantHome');


    }, (error) => {
      this.message="Invalid Username or Password";
      console.log("Invalid Username or password");
      console.log(error);
    })
  }

  // rememberMe(e) {
  //   console.log("data saved");
  //   if (e.target.checked) {
  //     sessionStorage.setItem("name", this.name);
  //     sessionStorage.setItem("password", this.password);
  //   }
  // }
}

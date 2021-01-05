import { EventEmitter } from '@angular/core';
import { ApplicantIO } from './../models/applicantIO.model';
import { Applicant } from './../models/applicant.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApplicantService {
  public dataFetched:EventEmitter<any>=new EventEmitter<any>();
    viewApplicant: Applicant;
  applicantdetails: Applicant;
  pointsData:any;
  url: string = "http://localhost:9999/applicant/";
  constructor(private http: HttpClient) { }

  getAllApplicants() {
    return (this.http.get(this.url + "all"));
  }

  getApplicant(employee_id: string) {
    return (this.http.post(this.url + "getById", employee_id));
  }

  addApplicant(applicant: ApplicantIO) {
    console.log(applicant);
    return (this.http.post(this.url + "add", applicant));
  }

  checkIfAvailable(employee_id: string) {
    return (this.http.post(this.url + "isIdAvailable", employee_id, ));
  }

  getApplicantPoints(applicant: ApplicantIO) {
    return (this.http.post(this.url + "getPoints", applicant));
  }
}

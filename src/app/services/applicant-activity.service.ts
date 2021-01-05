import { comment } from './../models/comment.model';
import { ApplicantActivityRecordIO } from './../models/applicantActivityRecordIO.model';
import { HttpClient } from '@angular/common/http';
import { ApplicantActivityRecord } from './../models/ApplicantActivityRecord.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicantActivityService {

  userandkey:string;
  enrolledActivityDetails:any;
  applicantActivityRecordURL: string = "http://localhost:9999/applicantActivityRecord/"
  commentsURL:string="http://localhost:9999/comment/";
  generateReportURL:string="http://localhost:9999/generateReport";
  constructor(private http: HttpClient) { }

  addApplicantActivityRecord(applicantActivityRecord: ApplicantActivityRecordIO) {
    return this.http.post(this.applicantActivityRecordURL + "add", applicantActivityRecord,{responseType: 'text'});
  }

  isRecordPresent(applicantActivityRecordIsAlreadyEnrolled: ApplicantActivityRecordIO) {
    return (this.http.post(this.applicantActivityRecordURL + "isRecordPresent", applicantActivityRecordIsAlreadyEnrolled
    ));
  }

  getAllApplicantActivityRecord() {
    return this.http.get(this.applicantActivityRecordURL + "all");
  }

  getAllApplicantActivityRecordFilterByEmpId(employee_id) {
    return this.http.post(this.applicantActivityRecordURL + "filterByEmployeeId", employee_id);
  }

  statusDetails:string;
  changeStatus(applicantActvityId:number,status:String){
    this.statusDetails=applicantActvityId+" "+status;
    return this.http.post(this.applicantActivityRecordURL+"changeStatus",this.statusDetails);
  }

  getComments(n:any){
    return this.http.post(this.commentsURL+"getAllComments",n);
  }

  postComment(commentbody:any){
    return this.http.post(this.commentsURL+"postComment",commentbody);
  }

  generatereport(){
    this.userandkey=sessionStorage.getItem("name")+" "+sessionStorage.getItem("sessionKey")
    return this.http.post(this.generateReportURL,this.userandkey);
  }
}

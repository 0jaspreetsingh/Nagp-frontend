import { ApplicantIO } from 'src/app/models/applicantIO.model';
import { ActivityIO } from 'src/app/models/activityIO.model';
import { Activity } from './../models/activity.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  activity:ActivityIO;
  activityMain:Activity;
  url:string="http://localhost:9999/activity/";
  constructor(private http: HttpClient) { }

  getAllActivities(){
    return (this.http.get(this.url+"all"));
  }

  getActivity(){

  }

  addActivity(activity:ActivityIO){
    console.log(activity);
    return(this.http.post(this.url+"add",activity));
  }

  checkIfAvailable(activity_id:string){
    return(this.http.post(this.url+"isIdAvailable",activity_id,));
  }

  editActivity(activity:ActivityIO){
    console.log(activity);
    return(this.http.put(this.url+"edit",activity));
  }

  getActivitiesOfApplicant(applicant:ApplicantIO){
    return (this.http.post(this.url+"filterActivity",applicant));
  }

}

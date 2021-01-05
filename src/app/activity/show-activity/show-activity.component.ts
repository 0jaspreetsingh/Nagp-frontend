import { Activity } from './../../models/activity.model';
import { Router } from '@angular/router';
import { ActivityService } from './../../services/activity.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-activity',
  templateUrl: './show-activity.component.html',
  styleUrls: ['./show-activity.component.css']
})
export class ShowActivityComponent implements OnInit {

  activityList:any;
  constructor(private activities:ActivityService,private router:Router) { }

  ngOnInit() {
    this.getActivities();
  }

  getActivities(){
    this.activities.getAllActivities().subscribe((data)=>{
      this.activityList=data;
      console.log(data);
      console.log(data[0]);
    },(error)=>{
      console.log(error);
    })
  }
  goToEdit(activity:Activity){
    this.activities.activityMain=activity;
    console.log(this.activities.activity);
    this.router.navigateByUrl("home/activity/editActivity");
  }
}
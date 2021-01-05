import { Activity } from './../../models/activity.model';
import { BatchService } from './../../services/batch.service';
import { GetLevelsService } from './../../services/get-levels.service';
import { ActivityService } from './../../services/activity.service';

import { Router } from '@angular/router';


import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivityIO } from "src/app/models/activityIO.model";

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.css']
})
export class AddActivityComponent implements OnInit {
  message: string = "";
  activity_id: string;
  activityValid:boolean=true;
  messagecolor:string='green';
  levelList:any;
  batchList:any;

  @ViewChild('f') activityForm: NgForm

  private activity: ActivityIO;
  private checkIfAvailable: string = "";
  constructor(private activities: ActivityService , private router:Router,private levels:GetLevelsService,private batches:BatchService) { }

  ngOnInit() {
    this.message = "Leave Blank to auto generate Batch Identifier";
    this.getBatches();
    this.getLevels();
  }
  getBatches(){
    this.batches.getAllBatches().subscribe((data)=>{
      this.batchList=data;
      console.log(data);
      console.log(data[0]);
    },(error)=>{
      console.log(error);
    })
  }

  getLevels(){
    this.levels.getAllLevels().subscribe((data)=>{
      this.levelList=data;
      console.log(data);
      console.log(data[0]);
    },(error)=>{
      console.log(error);
    })
  }

  addActivity() {
    console.log("adding..")
    this.activity = this.activityForm.value;
    // this.activity.level= this.levelList[Number(this.activityForm.value.level)];
    // this.activity.batch= this.batchList[Number(this.activityForm.value.batch)];
    console.log(this.activity);
    //   console.log("============");
    //   console.log(this.level);
    //   console.log("============")

    //  console.log(this.levelForm);
    this.activities.addActivity(this.activity).subscribe((data) => {
      console.log(data);
      console.log("*********kavan");
      console.log(this.activity.level);
      console.log("*********kavan");
      
      alert("Activity added Successfully");
      console.log("level added");
      this.router.navigateByUrl("home/activity");
    }, (error) => {
      console.log("an error occoured");
      console.log(error);
    })

  }

  onChange(newValue) {
    console.log(this.activityForm);
    this.activityValid=false;
    this.messagecolor="red";
    if(newValue.length!=0){
      this.activityValid=false;
      this.messagecolor="red";
    this.message="";
    console.log(newValue);
    console.log("checking");
    this.activity_id = newValue;
    if (this.activity_id.length > 4 && this.activity_id.length < 11) {
      this.activities.checkIfAvailable(this.activity_id).subscribe((data) => {
        console.log(data);
        if (!data) {
          this.message = "Level Identifier available";
          this.activityValid=true;
          this.messagecolor="green"          
        } else {
          this.message = "Level Identifier unavailable"
        }
      }, (error) => {
        console.log("error ocoured");
      })
    } else {
      this.message = "Id Length should be between 5 to 10 characters";
    }
  }else{
    this.message = "Leave Blank to auto generate Level Identifier";
    this.activityValid=true;
    this.messagecolor="green"
  }
}
}
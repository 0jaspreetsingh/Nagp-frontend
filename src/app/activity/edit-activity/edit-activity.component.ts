import { BatchService } from './../../services/batch.service';
import { GetLevelsService } from './../../services/get-levels.service';
import { Router } from '@angular/router';
import { ActivityService } from './../../services/activity.service';
import { ActivityIO } from 'src/app/models/activityIO.model';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-edit-activity',
  templateUrl: './edit-activity.component.html',
  styleUrls: ['./edit-activity.component.css']
})
export class EditActivityComponent implements OnInit {
  @ViewChild('f') activityForm: NgForm

  private activity: ActivityIO;
  private checkIfAvailable: string = "";

  private editactivity_id: string;
  private editname: string;
  private editlevel: string;
  private editbatch: string;
  private editdescription: string;
  private editpoints: number;
  private editmax_qualification: number;

  activity_id: string;
  activityValid: boolean = true;
  messagecolor: string = 'green';
  levelList: any;
  batchList: any;

  constructor(private activities: ActivityService, private router: Router, private levels: GetLevelsService, private batches: BatchService) { }

  ngOnInit() {
    console.log(this.activities.activityMain);
    // this.getBatches();
    // this.getLevels();
    if (this.activities.activityMain == undefined || this.activities.activityMain == null) {
      alert("opps , an error occoured");
      this.router.navigateByUrl("/home/activity");
    } else {
      this.editactivity_id = this.activities.activityMain.activity_id;
      this.editbatch = this.activities.activityMain.batch.batch_id;
      this.editdescription = this.activities.activityMain.description;
      this.editlevel = this.activities.activityMain.level.level_id;
      this.editname = this.activities.activityMain.name;
      this.editpoints = this.activities.activityMain.points;
      this.editmax_qualification = this.activities.activityMain.max_qualification;
    }
  }
  // getBatches(){
  //   this.batches.getAllBatches().subscribe((data)=>{
  //     this.batchList=data;
  //     console.log(data);
  //     console.log(data[0]);
  //   },(error)=>{
  //     console.log(error);
  //   })
  // }

  // getLevels(){
  //   this.levels.getAllLevels().subscribe((data)=>{
  //     this.levelList=data;
  //     console.log(data);
  //     console.log(data[0]);
  //   },(error)=>{
  //     console.log(error);
  //   })
  // }

  editActivity() {
    console.log("adding..")
    this.activity = this.activityForm.value;
    // this.activity.level= this.levelList[Number(this.activityForm.value.level)];
    // this.activity.batch= this.batchList[Number(this.activityForm.value.batch)];
    console.log(this.activity);
    //   console.log("============");
    //   console.log(this.level);
    //   console.log("============")

    //  console.log(this.levelForm);
    this.activities.editActivity(this.activity).subscribe((data) => {
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

  goBack() {
    this.router.navigateByUrl("home/activity");
  }
}
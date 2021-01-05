import { BatchService } from './../../services/batch.service';
import { GetLevelsService } from './../../services/get-levels.service';
import { Router } from '@angular/router';
import { ApplicantService } from './../../services/applicant.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ApplicantIO } from "src/app/models/applicantIO.model";

@Component({
  selector: 'app-add-applicant',
  templateUrl: './add-applicant.component.html',
  styleUrls: ['./add-applicant.component.css']
})
export class AddApplicantComponent implements OnInit {
  message: string = "";
  messagecolor:string='green';
  levelList:any;
  batchList:any;

  @ViewChild('f') activityForm: NgForm

  private applicant: ApplicantIO;
  private checkIfAvailable: string = "";
  constructor(private applicants: ApplicantService , private router:Router,private levels:GetLevelsService,private batches:BatchService) { }

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

  addApplicant() {
    console.log("adding..")
    this.applicant = this.activityForm.value;
    // this.activity.level= this.levelList[Number(this.activityForm.value.level)];
    // this.activity.batch= this.batchList[Number(this.activityForm.value.batch)];
    console.log(this.applicant);
    //   console.log("============");
    //   console.log(this.level);
    //   console.log("============")

    //  console.log(this.levelForm);
    this.applicants.addApplicant(this.applicant).subscribe((data) => {
      console.log(data);
      console.log("*********kavan");
      console.log(this.applicant);
      console.log("*********kavan");
      
      alert("Activity added Successfully");
      console.log("applicant added");
      this.router.navigateByUrl("home/applicant");
    }, (error) => {
      console.log("an error occoured");
      console.log(error);
    })

  }

}
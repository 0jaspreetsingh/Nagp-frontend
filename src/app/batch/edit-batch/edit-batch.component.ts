import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Batch } from './../../models/batch.model';
import { BatchService } from './../../services/batch.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-edit-batch',
  templateUrl: './edit-batch.component.html',
  styleUrls: ['./edit-batch.component.css']
})
export class EditBatchComponent implements OnInit {
  // Editqualification_points: number;
  // Editdescription: string;
  // Editname: string;
  // Editnumber: number;
  // Editlevel_id: string;
  // message: string = "";
  // level_id: string;
  // levelValid: boolean = true;
  // tobeEditedLevel: any;
  @ViewChild('f') BatchForm: NgForm

  private batch: Batch;
  private checkIfAvailable: string = "";

  private editBatchId: string;
  private editYear: number;
  private editTechnology: string;
  private editDescription: string;
  private editQualificationPoints: number;
  private editStartDate: string;

  constructor(private batches: BatchService, private router: Router) { }

  ngOnInit() {
    // this.message = "Leave Blank to auto generate Level Identifier";
    if (this.batches.batch == null || this.batches.batch == undefined) {
      alert("Sorry , an error occoured ");
      this.router.navigateByUrl("home/batch");
    } else {
      this.editBatchId = this.batches.batch.batch_id;
      this.editDescription = this.batches.batch.description;
      this.editQualificationPoints = this.batches.batch.qualification_points;
      this.editStartDate = this.batches.batch.startdate;
      this.editTechnology = this.batches.batch.technology;
      this.editYear = this.batches.batch.year;
    }

  }

  // getById(){
  //   this.levels.getLevel(sessionStorage.getItem("level_id")).subscribe((data)=>{
  //     console.log(data);
  //     return data;
  //   },(error)=>{
  //     console.log(error);
  //   })
  // }

  editBatch() {
    console.log("adding..")
    this.batch = this.BatchForm.value;
    //   console.log("============");
    //   console.log(this.level);
    //   console.log("============")

    //  console.log(this.levelForm);
    this.batches.editBatch(this.batch).subscribe((data) => {
      console.log(data);
      console.log("batch edited");
      alert("Batch edited Successfully");
      console.log("Batch edited");
      this.router.navigateByUrl("home/batch");
    }, (error) => {
      console.log("an error occoured");
      console.log(error);
    })

  }

  goBack() {
    this.router.navigateByUrl("home/batch");
  }
}
import { Router } from '@angular/router';
import { BatchService } from './../../services/batch.service';
import { Batch } from './../../models/batch.model';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-batch',
  templateUrl: './add-batch.component.html',
  styleUrls: ['./add-batch.component.css']
})
export class AddBatchComponent implements OnInit {

  message: string = "";
  batch_id: string;
  batchValid:boolean=true;
  messagecolor:string='green';
  @ViewChild('f') levelForm: NgForm

  private batch: Batch;
  private checkIfAvailable: string = "";
  constructor(private batches: BatchService , private router:Router) { }

  ngOnInit() {
    this.message = "Leave Blank to auto generate Batch Identifier";
  }

  addBatch() {
    console.log("adding..")
    this.batch = this.levelForm.value;
    //   console.log("============");
    //   console.log(this.level);
    //   console.log("============")

    //  console.log(this.levelForm);
    this.batches.addBatch(this.batch).subscribe((data) => {
      console.log(data);
      alert("Batch added Successfully");
      console.log("level added");
      this.router.navigateByUrl("home/batch");
    }, (error) => {
      console.log("an error occoured");
      console.log(error);
    })

  }

  onChange(newValue) {
    this.batchValid=false;
    this.messagecolor="red";
    if(newValue.length!=0){
      this.batchValid=false;
      this.messagecolor="red";
    this.message="";
    console.log(newValue);
    console.log("checking");
    this.batch_id = newValue;
    if (this.batch_id.length > 4 && this.batch_id.length < 11) {
      this.batches.checkIfAvailable(this.batch_id).subscribe((data) => {
        console.log(data);
        if (!data) {
          this.message = "Level Identifier available";
          this.batchValid=true;
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
    this.batchValid=true;
    this.messagecolor="green"
  }
}
}
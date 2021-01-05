import { Batch } from './../../models/batch.model';
import { Router } from '@angular/router';
import { BatchService } from './../../services/batch.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-batch',
  templateUrl: './show-batch.component.html',
  styleUrls: ['./show-batch.component.css']
})
export class ShowBatchComponent implements OnInit {

  batchList:any;
  constructor(private batches:BatchService,private router:Router) { }

  ngOnInit() {
    this.getBatches();
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

  goToEdit(batch:Batch){
    this.batches.batch=batch;
    console.log(this.batches.batch);
    this.router.navigateByUrl("home/batch/editBatch");
  }
}

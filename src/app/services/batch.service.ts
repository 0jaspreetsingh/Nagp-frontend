import { Batch } from './../models/batch.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BatchService {

  batch: Batch;
  url: string = "http://localhost:9999/batch/";
  constructor(private http: HttpClient) { }

  getAllBatches() {
    return (this.http.get(this.url + "all"));
  }

  getBatch() {

  }

  addBatch(batch: Batch) {
    console.log(batch);
    return (this.http.post(this.url + "add", batch));
  }

  editBatch(batch: Batch) {
    console.log(batch);
    return (this.http.put(this.url + "edit", batch));
  }

  checkIfAvailable(batch_id: string) {
    return (this.http.post(this.url + "isIdAvailable", batch_id, {

    }));
  }
}

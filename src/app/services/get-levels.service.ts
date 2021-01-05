import { Level } from './../models/level.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetLevelsService {

  level: Level;

  url: string = "http://localhost:9999/level/";
  constructor(private http: HttpClient) { }

  getAllLevels() {
    return (this.http.get(this.url + "all"));
  }

  getLevel(level_id: string) {
    return (this.http.post(this.url + "getById", level_id));
  }

  addLevel(level: Level) {
    console.log(level);
    return (this.http.post(this.url + "add", level));
  }

  editLevel(level: Level) {
    console.log("876543");
    console.log(level);
    console.log("76543");
    return (this.http.put(this.url + "edit", level));
  }

  checkIfAvailable(level_id: string) {
    return (this.http.post(this.url + "isIdAvailable", level_id, {

    }));
  }
}

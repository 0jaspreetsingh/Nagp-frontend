import { Router } from '@angular/router';
import { GetLevelsService } from './../../services/get-levels.service';
import { Level } from './../../models/level.model';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-level',
  templateUrl: './add-level.component.html',
  styleUrls: ['./add-level.component.css']
})
export class AddLevelComponent implements OnInit {
  message: string = "";
  level_id: string;
  levelValid:boolean=true;

  @ViewChild('f') levelForm: NgForm

  private level: Level;
  private checkIfAvailable: string = "";
  constructor(private levels: GetLevelsService ,private router:Router) { }

  ngOnInit() {
    this.message = "Leave Blank to auto generate Level Identifier";
  }

  addLevel() {
    console.log("adding..")
    this.level = this.levelForm.value;
    //   console.log("============");
    //   console.log(this.level);
    //   console.log("============")

    //  console.log(this.levelForm);
    this.levels.addLevel(this.level).subscribe((data) => {
      console.log(data);
      console.log("level added");
      alert("Level added Successfully");
      console.log("level added");
      this.router.navigateByUrl("home/level");
    }, (error) => {
      console.log("an error occoured");
      console.log(error);
    })

  }

  onChange(newValue) {
    this.levelValid=false;
    if(newValue.length!=0){
      this.levelValid=false;
    this.message="";
    console.log(newValue);
    console.log("checking");
    this.level_id = newValue;
    if (this.level_id.length > 4 && this.level_id.length < 11) {
      this.levels.checkIfAvailable(this.level_id).subscribe((data) => {
        console.log(data);
        if (!data) {
          this.message = "Level Identifier available";
          this.levelValid=true;
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
    this.levelValid=true;
  }
}
}
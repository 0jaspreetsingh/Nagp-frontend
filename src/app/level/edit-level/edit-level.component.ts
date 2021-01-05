import { NgForm } from '@angular/forms';
import { Level } from './../../models/level.model';
import { Router } from '@angular/router';
import { GetLevelsService } from './../../services/get-levels.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-edit-level',
  templateUrl: './edit-level.component.html',
  styleUrls: ['./edit-level.component.css']
})
export class EditLevelComponent implements OnInit {
  Editqualification_points: number;
  Editdescription: string;
  Editname: string;
  Editnumber: number;
  Editlevel_id: string;
  message: string = "";
  level_id: string;
  levelValid: boolean = true;
  tobeEditedLevel: any;
  @ViewChild('f') levelForm: NgForm

  private level: Level;
  private checkIfAvailable: string = "";
  constructor(private levels: GetLevelsService, private router: Router) { }

  ngOnInit() {
    // this.message = "Leave Blank to auto generate Level Identifier";
    try {
    this.tobeEditedLevel = this.levels.level;
      console.log(this.tobeEditedLevel);
      // this.levelForm.value=this.tobeEditedLevel;
      this.Editlevel_id = this.tobeEditedLevel.level_id;
      this.Editnumber = this.tobeEditedLevel.number;
      this.Editname = this.tobeEditedLevel.name;
      this.Editdescription = this.tobeEditedLevel.description;
      this.Editqualification_points = this.tobeEditedLevel.qualification_points;
    } catch (e) {
      alert("Sorry , an error occoured ");
      this.router.navigateByUrl("home/level");
    }
    // console.log(this.levelForm);
  }

  // getById(){
  //   this.levels.getLevel(sessionStorage.getItem("level_id")).subscribe((data)=>{
  //     console.log(data);
  //     return data;
  //   },(error)=>{
  //     console.log(error);
  //   })
  // }

  editLevel() {
    console.log("adding..")
    this.level = this.levelForm.value;
    //   console.log("============");
    //   console.log(this.level);
    //   console.log("============")

    //  console.log(this.levelForm);
    this.levels.editLevel(this.level).subscribe((data) => {
      console.log(data);
      console.log("level added");
      alert("Level edited Successfully");
      console.log("level edited");
      this.router.navigateByUrl("home/level");
    }, (error) => {
      console.log("an error occoured");
      console.log(error);
    })

  }

  goBack(){
    this.router.navigateByUrl("home/level");
  }

  //   onChange(newValue) {
  //     this.levelValid=false;
  //     if(newValue.length!=0){
  //       this.levelValid=false;
  //     this.message="";
  //     console.log(newValue);
  //     console.log("checking");
  //     this.level_id = newValue;
  //     if (this.level_id.length > 4 && this.level_id.length < 11) {
  //       this.levels.checkIfAvailable(this.level_id).subscribe((data) => {
  //         console.log(data);
  //         if (!data) {
  //           this.message = "Level Identifier available";
  //           this.levelValid=true;
  //         } else {
  //           this.message = "Level Identifier unavailable"
  //         }
  //       }, (error) => {
  //         console.log("error ocoured");
  //       })
  //     } else {
  //       this.message = "Id Length should be between 5 to 10 characters";
  //     }
  //   }else{
  //     this.message = "Leave Blank to auto generate Level Identifier";
  //     this.levelValid=true;
  //   }
  // }
}
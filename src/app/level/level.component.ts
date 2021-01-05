import { Level } from './../models/level.model';
import { GetLevelsService } from './../services/get-levels.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent implements OnInit {

  levelList:any;
  constructor(private levels:GetLevelsService) { }

  ngOnInit() {
  //  this.getLevels();
  }

  // getLevels(){
  //   this.levels.getAllLevels().subscribe((data)=>{
  //     this.levelList=data;
  //     console.log(data);
  //     console.log(data[0]);
  //   },(error)=>{
  //     console.log(error);
  //   })
  // }

}

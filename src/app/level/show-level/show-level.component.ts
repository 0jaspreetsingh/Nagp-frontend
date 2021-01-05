import { Level } from './../../models/level.model';
import { Router } from '@angular/router';
import { GetLevelsService } from './../../services/get-levels.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-level',
  templateUrl: './show-level.component.html',
  styleUrls: ['./show-level.component.css']
})
export class ShowLevelComponent implements OnInit {

  levelList:any;
  constructor(private levels:GetLevelsService,private router:Router) {  }

  ngOnInit() {
    this.getLevels();
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

  goToEdit(level:Level){
    this.levels.level=level;
    console.log(this.levels.level);
    this.router.navigateByUrl("home/level/editLevel");
  }
}



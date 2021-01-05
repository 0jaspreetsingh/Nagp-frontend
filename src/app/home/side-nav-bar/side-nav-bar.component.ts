import { ApplicantActivityService } from './../../services/applicant-activity.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.css']
})
export class SideNavBarComponent implements OnInit {

  constructor(private applicantActivityService:ApplicantActivityService) { }

  ngOnInit() {
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
      });
  });
  }

  generatereport(){
    console.log("generating report");
    this.applicantActivityService.generatereport().subscribe((data)=>{
      console.log(data);
    },(error)=>{
      console.log(error);
    })
  }
}

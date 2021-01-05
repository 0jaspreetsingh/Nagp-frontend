import { ApplicantService } from './../../services/applicant.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-activity-graph',
  templateUrl: './activity-graph.component.html',
  styleUrls: ['./activity-graph.component.css']
})
export class ActivityGraphComponent implements OnInit {
  public isGraphFetched: boolean = false;
  public lineChartData: ChartDataSets[] =null;
  public lineChartLabels: Label[] = [];
  public lineChartOptions: (ChartOptions & { annotation: any }) = null;
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = null;
  public lineChartType = null;
  public lineChartPlugins = [];

  points: any;
  activityName: any;

  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  constructor(private applicantService: ApplicantService) { }

  ngOnInit() {

    this.applicantService.dataFetched.subscribe(data => {
     let obj= { data:data.points, label: 'Series A' };
      this.lineChartLegend = true;
      this.lineChartType = 'line';
      this.lineChartPlugins = [pluginAnnotations];
      console.log(data.points);
      console.log(data.activityName);

      this.lineChartData =[obj];
      console.log(this.lineChartData)
      this.lineChartLabels = data.activityName;
      this.isGraphFetched = true;

     this.lineChartOptions= {
        responsive: true,
        scales: {
          // We use this empty structure as a placeholder for dynamic theming.
          xAxes: [{}],
          yAxes: [
            {
              id: 'y-axis-0',
              position: 'left',
            },
            {
              id: 'y-axis-1',
              position: 'right',
              gridLines: {
                color: 'rgba(255,0,0,0.3)',
              },
              ticks: {
                fontColor: 'red',
              }
            }
          ]
        },
        annotation: {
          annotations: [
            {
              type: 'line',
              mode: 'vertical',
              scaleID: 'x-axis-0',
              value: 'March',
              borderColor: 'orange',
              borderWidth: 2,
              label: {
                enabled: true,
                fontColor: 'orange',
                content: 'LineAnno'
              }
            },
          ],
        },
      };


    console.log(data);
  })
  // this.points=this.applicantService.pointsData.points;
  // this.activityName=this.applicantService.pointsData.activityName;
  // console.log("graph");
}

  
}

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username:string;
  constructor(private router:Router) { }

  ngOnInit() {
    this.username=sessionStorage.getItem("name");
  }

  home(){
    this.router.navigateByUrl("/home");
  }

  logout(){
    sessionStorage.clear();
    this.router.navigateByUrl("/");
  }
}

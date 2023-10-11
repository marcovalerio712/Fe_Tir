import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { TirService } from 'src/service/TirService/tir.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 

  constructor(private tirservice: TirService) {}

  ngOnInit() {
  
 
  }



 title = 'prog-tir-frontend';
  }
 

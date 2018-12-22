import { Component, ViewChild, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'ngm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'NgRx Movies';
  @ViewChild('snav') snav: MatSidenav;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(e => {
      if(e instanceof NavigationEnd) {
        if(this.snav) this.snav.close();
      }
    });
  }
}

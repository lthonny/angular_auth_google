import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userDetails: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    const storage = localStorage.getItem('google_auth');

    if(storage) {
      this.userDetails = JSON.parse(storage);
    } else {

    }
  }

  signOut(): void {
    localStorage.removeItem('google_auth');
    this.router.navigateByUrl('/login');
  }

}

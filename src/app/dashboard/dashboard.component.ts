import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(private router: Router) {}
  details = [
    { name: 'Rohit', age: 23, phn: 1235446464, email: 'rohit@123' },
    { name: 'Manoj', age: 22, phn: 1010101010, email: 'rohit@123' },
    { name: 'Sai', age: 40, phn: 92919493923, email: 'rohit@123' },
    { name: 'Harsha', age: 62, phn: 1019181716, email: 'rohit@123' },
    { name: 'Siva', age: 33, phn: 1015432898, email: 'rohit@123' },
    { name: 'Anvesh', age: 18, phn: 1018654132, email: 'rohit@123' },
  ];
  navigateTo() {
    this.router.navigate(['home']);
  }
}

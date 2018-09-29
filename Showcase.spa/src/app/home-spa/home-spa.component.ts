import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home-spa.component.html',
  styleUrls: ['./home-spa.component.css']
})
export class HomeSpaComponent implements OnInit {
  registerMode = false;
  values: any;

  constructor(private http: Http) { }

  ngOnInit() {
  }

  registerToggle() {
    this.registerMode = true;
  }

  cancelRegisterMode(registerMode: boolean) {
   this.registerMode = registerMode;
 }
}

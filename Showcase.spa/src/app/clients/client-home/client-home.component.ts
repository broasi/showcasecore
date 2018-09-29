import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.css']
})
export class ClientHomeComponent implements OnInit {
  
  constructor(public authService: AuthService, private route: ActivatedRoute) { 
    // this.route.params.subscribe( params => console.log(params) );
  }

  ngOnInit() {
  }

  loggedIn() {
    return this.authService.loggedIn();
  }
}

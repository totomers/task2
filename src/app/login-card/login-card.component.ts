import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss']
})
export class LoginCardComponent implements OnInit {
  username:string;
  password:string;
  constructor() { }

  ngOnInit(): void {
  }

}

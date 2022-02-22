import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-card',
  templateUrl: './register-card.component.html',
  styleUrls: ['./register-card.component.scss']
})
export class RegisterCardComponent implements OnInit {
  username:string;
  password:string;
  constructor() { }

  ngOnInit(): void {
  }

}

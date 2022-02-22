import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/account.service';

@Component({
  selector: 'app-register-card',
  templateUrl: './register-card.component.html',
  styleUrls: ['./register-card.component.scss']
})
export class RegisterCardComponent implements OnInit {
  username:string;
  password:string;
  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
  }
  register(){
    const user = {username:this.username,password:this.password}
    this.accountService.register(user);
  }
}

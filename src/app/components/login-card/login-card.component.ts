import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../../account.service';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss']
})
export class LoginCardComponent implements OnInit {
  username:string;
  password:string;
  errorMessage:string;
  constructor(private accountService: AccountService,private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.errorMessage = "";
    const userValue = {username:this.username,password:this.password}
    const isUser = this.accountService.isUser(userValue);
    if(isUser){
      this.accountService.setUserSubject(userValue);
      this.router.navigate(['/']);

    }
    else{
      this.errorMessage = "Incorrect Username or password."
    }
  }

}

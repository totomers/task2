import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/account.service';

@Component({
  selector: 'app-register-card',
  templateUrl: './register-card.component.html',
  styleUrls: ['./register-card.component.scss']
})
export class RegisterCardComponent implements OnInit {
  username:string;
  password:string;
  constructor(private accountService:AccountService,private  router:Router) { }

  ngOnInit(): void {
  }
  async register(){
    const user = {username:this.username,password:this.password}
    await this.accountService.register(user);
  await this.router.navigate(['/login']);

  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/account.service';
import { IUser } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLoggedIn:boolean;
  user$:Observable<IUser>;
  user:IUser;
  constructor(private accountService:AccountService,private router:Router) { }

  ngOnInit(): void {
    this.accountService.getUser().subscribe(user=>{
       console.log("navbars user:",user)
       this.user = user;
     });
  }
   logout(){
    this.accountService.logout();
    this.accountService.setUserSubject({username:"",password:""});
   this.router.navigate(['/login']);


  }
}

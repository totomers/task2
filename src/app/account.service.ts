import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from './interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private userSubject= new BehaviorSubject<IUser>(this._getUserFromLs());
  private _user$ = this.userSubject.asObservable();

  constructor( private router: Router, private http: HttpClient) {}

   _getUserFromLs(){
    const user = localStorage.getItem('user');
    return user? JSON.parse(user):{username:"",password:""};
   } 

   get userValue(){
     return this.userSubject.getValue()
   }

   getUser(){
     console.log(this._user$)
     return this._user$;
   }

 
   setUserSubject(user:IUser){
     return this.userSubject.next(user);
   }

 logout() {
   this.setUserSubject({username:"",password:""});
}

register(user: IUser) {
  console.log(user);
  localStorage.setItem('user',JSON.stringify(user));
}

isUser(user:IUser):boolean{
  const userLS = localStorage.getItem('user')
  if(!userLS) return false;
  else{
    const parsedUserLs = JSON.parse(userLS) as IUser;
    return parsedUserLs.username===user.username && parsedUserLs.password ===user.password;
}

}

deleteAccount(){
  localStorage.removeItem('user');
  localStorage.removeItem('topTeams');
  this.router.navigate(['/login'])
}



}

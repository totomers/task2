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
  user = this.userSubject.asObservable();

  constructor( private router: Router, private http: HttpClient) {}

   _getUserFromLs(){
    const user = localStorage.getItem('user');
    return user? JSON.parse(user):{username:"",password:""};
   } 

   get userValue(){
     return this.userSubject.getValue()
   }
   setUserSubject(user:IUser){
      this.userSubject.next(user);
   }

//    login(user:IUser) {
//      const isUser = this.authenticateUser(user);
//      if(isUser){
//       this.setUserSubject(user);
//       this.router.navigate(['/']);
//      }
//      else{
//        return false
//      }

// }

logout() {
    // remove user from local storage and set current user to null
    // localStorage.removeItem('user');
    this.userSubject.next({username:"",password:""});
    this.router.navigate(['/login']);
}

register(user: IUser) {
  console.log(user);
  localStorage.setItem('user',JSON.stringify(user));
  this.router.navigate(['/login']);
}

isUser(user:IUser):boolean{
  const userLS = localStorage.getItem('user')
  if(!userLS) return false;
  else{
    const parsedUserLs = JSON.parse(userLS) as IUser;
    return parsedUserLs.username===user.username && parsedUserLs.password ===user.password;
}

}




}

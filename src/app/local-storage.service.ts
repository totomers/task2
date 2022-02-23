import { Injectable } from '@angular/core';
import { TOP_TEAMS } from './consts/team.variables';
import { ITeam } from './interfaces/team.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() { }
  
  get(key:string){
    const strData = localStorage.getItem(key);
    return strData? JSON.parse(strData):[];
  }

  set(key:string,value:any){
    localStorage.setItem(key,JSON.stringify(value)); //save to local storage
  }
  getTopTeams(){
    return this.get(TOP_TEAMS);
  }
  setTopTeams(topTeams: ITeam[]){
    return this.set(TOP_TEAMS,topTeams);
  }
}

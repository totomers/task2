import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, take } from 'rxjs';
import { TOP_TEAMS } from './consts/team.variables';
import { ILeague } from './interfaces/league.interface';
import { ITeam, ITeamHashMap } from './interfaces/team.interface';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  private _topTeamsFromLs: ITeam[] = this.localStorage.getTopTeams();;
  private _topTeams = new BehaviorSubject<ITeam[]>(this._topTeamsFromLs)
  private _topTeams$ =  this._topTeams.asObservable();  
  private _topTeamsHashMap = new BehaviorSubject<ITeamHashMap>(this._createHashMap(this._topTeamsFromLs));
  private _topTeamsHashMap$ = this._topTeamsHashMap.asObservable();



  private _createHashMap(teams:ITeam[]){
   return teams.reduce((p:any,c:any)=>{
      p[c.idTeam] = true;
      return p;
     },{} as ITeamHashMap);
  }

  constructor(private http: HttpClient, private localStorage:LocalStorageService) { 
  }


  getTopTeams(){
    return this._topTeams$
  }
getTopTeamsHashMap(){
  return this._topTeamsHashMap$
}

  setTopTeams(topTeams:ITeam[]){
    this.localStorage.setTopTeams(topTeams);
    this._topTeamsHashMap.next(this._createHashMap(topTeams));
    return this._topTeams.next(topTeams);
  }

  addToTopTeams(team:ITeam){
    const topTeams = this._topTeams.getValue();
    topTeams.unshift(team);
    if(topTeams.length>5){
      topTeams.pop();
    }
    console.log(topTeams);
    this.setTopTeams(topTeams);
  }
  removeFromTopTeams(idTeam:string){
    const topTeams = this._topTeams.getValue();
    const indexToRemove = topTeams.findIndex(t=>t.idTeam ==idTeam);
    topTeams.splice(indexToRemove,1);
    console.log(topTeams)
    this.setTopTeams(topTeams);
  }

  

  async getLeagues(){
    return this.http
    .get<{ leagues: ILeague[] }>(`https://www.thesportsdb.com/api/v1/json/2/all_leagues.php
    `)
    .pipe(take(5))
    .toPromise()
    .then((data) => {
      if (data) {
        console.log(`leages :`, data);
        return data;
      }
      else return {}
    })
    .catch((error) => {
      alert(error)
    }); 
  }
  async getTeams(leagueName:string){
    return this.http
    .get<{ teams: ITeam[] }>(`https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=${leagueName}`)
    // .pipe(map((team)=>{

    //   return {teamLogo:team}
    // }))
    .toPromise()
    //@ts-ignore
    .then((data) => {
      if (data) {
        console.log(`teams :`, data);
        return data;
      }
    })
    .catch((error) => {
      alert(error)
    }); 
  }

  
}

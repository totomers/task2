import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, take } from 'rxjs';
import { ILeague } from './interfaces/league.interface';
import { ITeam } from './interfaces/team.interface';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  private _topTeams = new BehaviorSubject<ITeam[]>([])
  private _topTeams$ =  this._topTeams.asObservable()


  constructor(private http: HttpClient) { 
  }

  getTopTeams(){
    return this._topTeams$
  }
  setTopTeams(topTeams:ITeam[]){
    return this._topTeams.next(topTeams);
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

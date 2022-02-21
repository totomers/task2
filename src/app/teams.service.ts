import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, take } from 'rxjs';
import { ILeague } from './interfaces/league.interface';
import { ITeam } from './interfaces/team.interface';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http: HttpClient) { 
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

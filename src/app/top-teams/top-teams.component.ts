import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITeam } from '../interfaces/team.interface';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-top-teams',
  templateUrl: './top-teams.component.html',
  styleUrls: ['./top-teams.component.scss']
})
export class TopTeamsComponent implements OnInit,OnDestroy {
  topTeams$:Observable<ITeam[]>;

  constructor(private teamService:TeamsService) { }


  ngOnInit(): void {
    this.topTeams$ = this.teamService.getTopTeams();
  }

  removeFromTopTeams(idTeam:string ){
    this.teamService.removeFromTopTeams(idTeam);
  }

  ngOnDestroy(): void {
      
  }


}

import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITeam, ITeamHashMap } from 'src/app/interfaces/team.interface';
import { TeamsService } from 'src/app/teams.service';

@Component({
  selector: 'app-team-item',
  templateUrl: './team-item.component.html',
  styleUrls: ['./team-item.component.scss']
})
export class TeamItemComponent implements OnInit {
@Input() team: ITeam;
topTeams$: Observable<ITeam[]>;
topTeamsHashMap$:Observable<ITeamHashMap>
isTopTeam:boolean = false;


  constructor(private teamsService:TeamsService) { }

  ngOnInit(): void {
    this.topTeamsHashMap$ = this.teamsService.getTopTeamsHashMap();
  }
  addToTopTeams(){
    this.teamsService.addToTopTeams(this.team);
  }
  removeFromTopTeams(){
    this.teamsService.removeFromTopTeams(this.team.idTeam);
  }
}

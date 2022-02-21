import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { ILeague } from 'src/app/interfaces/league.interface';
import { ITeam } from 'src/app/interfaces/team.interface';
import { TeamsService } from 'src/app/teams.service';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss']
})
export class TeamsListComponent implements OnInit ,OnChanges{
  @Input() league?: ILeague;
  teams:ITeam[];
  constructor(private teamService:TeamsService) { }

  ngOnInit(): void {
   this.getTeams();
  }
  ngOnChanges(changes: SimpleChanges): void {
      console.log((<ILeague>changes["league"].currentValue)?.strLeague);
      this.getTeams()
  }

  getTeams(){
    if(this.league)
    this.teamService.getTeams(this.league.strLeague).then(teams=>{
      console.log(teams)
      if(teams)
      this.teams = teams.teams;
    });
  }
}

import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ILeague } from 'src/app/interfaces/league.interface';
import { TeamsService } from 'src/app/teams.service';
export const LEAGUES: ILeague[] = [
  {
    "idLeague": "4328",
    "strLeague": "English Premier League",
    "strSport": "Soccer",
    "strLeagueAlternate": "Premier League"
},
{
    "idLeague": "4329",
    "strLeague": "English League Championship",
    "strSport": "Soccer",
    "strLeagueAlternate": "Championship"
},
{
    "idLeague": "4330",
    "strLeague": "Scottish Premier League",
    "strSport": "Soccer",
    "strLeagueAlternate": "Scottish Premiership"
},
{
    "idLeague": "4331",
    "strLeague": "German Bundesliga",
    "strSport": "Soccer",
    "strLeagueAlternate": "Bundesliga, Fußball-Bundesliga"
},
{
    "idLeague": "4332",
    "strLeague": "Italian Serie A",
    "strSport": "Soccer",
    "strLeagueAlternate": "Serie A"
}


];

@Component({
  selector: 'app-league-tabs-list',
  templateUrl: './league-tabs-list.component.html',
  styleUrls: ['./league-tabs-list.component.scss']
})
export class LeagueTabsListComponent implements OnInit {


  leagues = LEAGUES;
  selectedLeague: ILeague = this.leagues[0];

  constructor() { }

  ngOnInit(): void {
    
  }

  onSelect(league: ILeague): void {
    this.selectedLeague = league;
  }

}

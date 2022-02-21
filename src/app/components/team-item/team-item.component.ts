import { Component, Input, OnInit } from '@angular/core';
import { ITeam } from 'src/app/interfaces/team.interface';

@Component({
  selector: 'app-team-item',
  templateUrl: './team-item.component.html',
  styleUrls: ['./team-item.component.scss']
})
export class TeamItemComponent implements OnInit {
@Input() team: ITeam;


  constructor() { }

  ngOnInit(): void {
  }

}

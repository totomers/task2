import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LeagueTabsListComponent } from './components/league-tabs-list/league-tabs-list.component';
import { TeamItemComponent } from './components/team-item/team-item.component';
import { TeamsListComponent } from './components/teams-list/teams-list.component';
@NgModule({
  declarations: [AppComponent,LeagueTabsListComponent,TeamItemComponent,TeamsListComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

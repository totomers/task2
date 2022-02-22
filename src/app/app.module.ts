import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LeagueTabsListComponent } from './components/league-tabs-list/league-tabs-list.component';
import { TeamItemComponent } from './components/team-item/team-item.component';
import { TeamsListComponent } from './components/teams-list/teams-list.component';
import { TopTeamsComponent } from './top-teams/top-teams.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
@NgModule({
  declarations: [AppComponent,LeagueTabsListComponent,TeamItemComponent,TeamsListComponent, TopTeamsComponent, HomePageComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

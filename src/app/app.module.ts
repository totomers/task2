import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LeagueTabsListComponent } from './components/league-tabs-list/league-tabs-list.component';
import { TeamItemComponent } from './components/team-item/team-item.component';
import { TeamsListComponent } from './components/teams-list/teams-list.component';
import { TopTeamsComponent } from './components/top-teams/top-teams.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginCardComponent } from './login-card/login-card.component';
@NgModule({
  declarations: [AppComponent,LeagueTabsListComponent,TeamItemComponent,TeamsListComponent, TopTeamsComponent, HomePageComponent, LoginPageComponent, NavbarComponent, LoginCardComponent],
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

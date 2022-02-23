import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { AuthGuard } from './guards/auth.guard';
import { PATHS } from './consts/routing.variables';
import { MapPageComponent } from './pages/map-page/map-page.component';

const routes:Routes = [{path:PATHS.MAIN,component:HomePageComponent,canActivate:[AuthGuard]},{path:PATHS.LOGIN,component:LoginPageComponent},{path:PATHS.REGISTER,component:RegisterPageComponent},{path:PATHS.MAP,component:MapPageComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

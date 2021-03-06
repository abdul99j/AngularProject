import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MapsComponent } from './maps/maps.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'Home', component: HomeComponent},
  {path: 'SignUp', component: SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'location',component:MapsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };

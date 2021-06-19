import { Component, OnInit } from '@angular/core';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:SocialAuthService) { }

  ngOnInit(): void {
  }

  signInWithFB():void{
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  async signInWithGoogle():Promise<void>{
    let res=await this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    console.log(res);
  }

}

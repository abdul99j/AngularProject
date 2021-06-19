import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsgridComponent } from './components/productsgrid/productsgrid.component';
import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SocialLoginModule, SocialAuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider} from "angularx-social-login";
import { AgmCoreModule } from '@agm/core';
import { MapsComponent } from './maps/maps.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    ProductsgridComponent,
    ProductComponent,
    HomeComponent,
    SignupComponent,
    FooterComponent,
    LoginComponent,
    MapsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SocialLoginModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyBrP_pgby6ZG_YC6TXVax0XrN6kGBeSUvc'
    })
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '1031565430657-qu4173p34dir89b6bec7u94g8j0cbj33.apps.googleusercontent.com'
          )
        },
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('939574440160011')
        },
      ]
    } as SocialAuthServiceConfig,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

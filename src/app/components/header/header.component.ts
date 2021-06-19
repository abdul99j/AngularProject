import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goToHome():void{
    this.router.navigate(['Home']);
  }
  goToSignUP():void{
    this.router.navigate(['SignUp']);
  }
  goToLogin():void{
    this.router.navigate(['login']);
  }
  goToMaps():void{
    this.router.navigate(['location']);

  }
}

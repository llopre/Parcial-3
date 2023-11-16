import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent {
  
  constructor(private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    setTimeout(() => {
      console.log("entra al timeout");
      this._router.navigate(['form'], { relativeTo: this._route });
    }, 1500); 
  }
}

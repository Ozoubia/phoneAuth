import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router){

  }

  login(){
    
   
    (<any>window).FacebookAccountKit.mobileLogin(function (response) {
     //alert(JSON.stringify(response)); 
    }, function (error) { 
      console.log(error) 
    }) 
    ;
    
    this.router.navigate(['dashboard'])
    
  }
}

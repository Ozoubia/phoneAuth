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
//{ alert(JSON.stringify(response)); }, function (error) { console.log(error) });
  login(){
    /*
    (<any>window).FacebookAccountKit.mobileLogin({
        useAccessToken: true,
        facebookNotificationEnabled: true 
    }, (data)=> {
      (<any>window).FacebookAccountKit.GetAccount((info)=>{
          this.router.navigate(['dashboard']);
      })
    }, (err)=> {
      alert(err)
    })
    */
   (<any>window).FacebookAccountKit.mobileLogin(function (response) { alert(JSON.stringify(response)); }, function (error) { console.log(error) });
  }
}

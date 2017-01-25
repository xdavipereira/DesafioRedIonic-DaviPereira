import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { UserService } from '../home/user.service';

@Component({
  selector: 'user-modal',
  templateUrl: 'usermodal.html'
})

export class UserModal {

  public currentUser: any;

 constructor(public params: NavParams, public viewCtrl: ViewController, private userService: UserService) {
     this.currentUser = this.userService.getCurrentUser();
     this.currentUser.age = this.userService.getCurrentUserAge();
   }

 dismiss() {
   this.viewCtrl.dismiss();
 }

}

import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'user-modal',
  templateUrl: 'usermodal.html'
})

export class UserModal {

  public currentCardUser: any;

 constructor(public params: NavParams, public viewCtrl: ViewController, private userService: UserService) {
     this.currentCardUser = this.userService.getCurrentCardUser();
     this.currentCardUser.age = this.userService.getCurrentCardUserAge();
   }

 dismiss() {
   this.viewCtrl.dismiss();
 }

}

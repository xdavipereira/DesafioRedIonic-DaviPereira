import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { UserService } from '../home/user.service';

@Component({
  selector: 'user-modal',
  templateUrl: 'usermodal.html'
})

export class UserModal {

  user;

 constructor(public params: NavParams,public viewCtrl: ViewController, private userService: UserService) {
     this.user = this.params.get('user');
   }

 dismiss() {
   this.viewCtrl.dismiss();
 }

}

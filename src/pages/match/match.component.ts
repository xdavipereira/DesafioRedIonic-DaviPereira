import { Component} from '@angular/core';
import {  NavController, NavParams, ViewController } from 'ionic-angular';
import { UserService } from '../../services/user.service';
import { MessagePage} from '../message/message.component';

@Component({
  selector: 'match-modal',
  templateUrl: 'match.html'
})
export class MatchPage {

  currentUser: any;
  user: any;
  messagePage: MessagePage;

  constructor(public navCtrl: NavController, public params: NavParams, public viewCtrl: ViewController, private userService: UserService) {
    this.currentUser = this.userService.getCurrentCardUser();
    this.user = this.userService.getFacebookUser();
  }

  goToMessagePage(){
    this.navCtrl.push(MessagePage);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}

import { Component} from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { UserService } from '../home/user.service';
import { User } from '../user/moc-user';

@Component({
  selector: 'match-modal',
  templateUrl: 'match.html'
})
export class MatchPage {

  public currentUser;
  public user = User;

  constructor(public params: NavParams, public viewCtrl: ViewController, private userService: UserService) {
    this.currentUser = this.userService.getCurrentUser();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}

import { Component} from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { UserService } from '../home/user.service';

@Component({
  selector: 'match-modal',
  templateUrl: 'match.html'
})
export class MatchPage {

  constructor(public params: NavParams, public viewCtrl: ViewController, private userService: UserService) {
  }

}

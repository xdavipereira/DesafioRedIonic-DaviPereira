import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { User } from '../user/moc-user';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  public user = User;

  constructor(public navCtrl: NavController) {

  }

}

import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { User } from '../user/moc-user';

import { ConfigPage } from '../config/config.component';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  public user = User;
  configPage: any = ConfigPage;

  constructor(public navCtrl: NavController) {

  }

}

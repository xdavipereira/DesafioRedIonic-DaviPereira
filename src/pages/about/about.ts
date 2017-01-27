import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';


import { ConfigPage } from '../config/config.component';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  user: any;
  configPage: any = ConfigPage;

  constructor(public navCtrl: NavController, public userService: UserService) {
    this.user = this.userService.getFacebookUser();
  }

}

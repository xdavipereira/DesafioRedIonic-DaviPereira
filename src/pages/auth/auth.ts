import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { NavController} from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html'
})

export class PageAuth {
  user = {};
  tabsPage = TabsPage;

  constructor(public angularFire: AngularFire, public navCtrl: NavController, private userService: UserService) {
  }

  login() {
         this.angularFire.auth
         .login()
         .then(value => {
           this.userService.setFacebookUser(value.auth);
           this.navCtrl.push(this.tabsPage);
         });
  }

  logout() {
    this.angularFire.auth.logout();
  }



}

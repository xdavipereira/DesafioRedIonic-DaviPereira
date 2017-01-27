import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { NavController} from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { UserService } from '../../services/user.service';
import { LoadingController } from 'ionic-angular'

@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html'
})

export class PageAuth {
  user = {};
  tabsPage = TabsPage;

  constructor(
    public angularFire: AngularFire,
    public navCtrl: NavController,
    private userService: UserService,
    public loadingCtrl: LoadingController
  ) {}

  login() {
        let loading = this.loadingCtrl.create({
    content: 'Please wait...'
    });
      loading.present();
         this.angularFire.auth
         .login()
         .then(value => {
           this.userService.setFacebookUser(value.auth);
           this.navCtrl.push(this.tabsPage);
           loading.dismiss();
         });
  }

  logout() {
    this.angularFire.auth.logout();
  }



}

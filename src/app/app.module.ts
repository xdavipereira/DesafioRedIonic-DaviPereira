import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule }    from '@angular/http';
import { SwingModule } from 'angular2-swing';
import {KSSwiperModule} from 'angular2-swiper';
import { AngularFireModule, AuthMethods, AuthProviders } from "angularfire2";

import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { MessagePage } from '../pages/message/message.component';
import { HomePage } from '../pages/home/home';
import { UserService } from '../services/user.service';
import { TabsPage } from '../pages/tabs/tabs';

import { UserModal} from '../pages/user/usermodal';
import { MatchPage } from '../pages/match/match.component';
import { ConfigPage } from '../pages/config/config.component';
import { PageAuth } from '../pages/auth/auth'


const firebaseConfig = {
  apiKey: "AIzaSyD2snFpdFiGcR7h7s4uqPL9S6z-bfDzeYw",
  authDomain: "redrocket-tinder.firebaseapp.com",
  databaseURL: "https://redrocket-tinder.firebaseio.com",
  storageBucket: "redrocket-tinder.appspot.com",
  messagingSenderId: "123129263826"
};




@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    MessagePage,
    HomePage,
    TabsPage,
    UserModal,
    MatchPage,
    ConfigPage,
    PageAuth
  ],
  imports: [
    IonicModule.forRoot(MyApp,{ tabsPlacement: 'top' }),
    HttpModule,
    SwingModule,
    KSSwiperModule,
    AngularFireModule.initializeApp(firebaseConfig,{
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    MessagePage,
    HomePage,
    UserModal,
    TabsPage,
    MatchPage,
    ConfigPage,
    PageAuth
  ],
  providers: [ UserService ,{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}

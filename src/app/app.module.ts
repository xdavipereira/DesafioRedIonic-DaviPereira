import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { MessagePage } from '../pages/message/message.component';
import { HomePage } from '../pages/home/home';
import { UserService } from '../pages/home/user.service';
import { TabsPage } from '../pages/tabs/tabs';
import { HttpModule }    from '@angular/http';
import { SwingModule } from 'angular2-swing';
import {KSSwiperModule} from 'angular2-swiper';
import { UserModal} from '../pages/user/usermodal';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    MessagePage,
    HomePage,
    TabsPage,
    UserModal
  ],
  imports: [
    IonicModule.forRoot(MyApp,{ tabsPlacement: 'top' }),
    HttpModule,
    SwingModule,
    KSSwiperModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    MessagePage,
    HomePage,
    UserModal,
    TabsPage
  ],
  providers: [ UserService ,{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}

import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { UserService } from '../pages/home/user.service';
import { TabsPage } from '../pages/tabs/tabs';
import { HttpModule }    from '@angular/http';
import { SwingModule } from 'angular2-swing';
import { UserModal} from '../pages/user/usermodal';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    UserModal
  ],
  imports: [
    IonicModule.forRoot(MyApp,{ tabsPlacement: 'top' }),
    HttpModule,
    SwingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    UserModal,
    TabsPage
  ],
  providers: [ UserService ,{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}

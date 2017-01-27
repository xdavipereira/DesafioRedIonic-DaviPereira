import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { MessagePage } from '../message/message.component';
import { PageAuth } from '../auth/auth';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabHome: any = HomePage;
  tabAbout: any = AboutPage;
  tabMessage: any = MessagePage;

  constructor() { }
}

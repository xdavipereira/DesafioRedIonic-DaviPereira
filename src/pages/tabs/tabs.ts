import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { MessagePage } from '../message/message.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  tab3Root: any = MessagePage;

  constructor() {

  }
}

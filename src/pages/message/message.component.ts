import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import {KSSwiperContainer, KSSwiperSlide} from 'angular2-swiper';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'page-message',
  templateUrl: 'message.html'
})
export class MessagePage {

 @ViewChild(KSSwiperContainer) swiperContainer: KSSwiperContainer;

 example1SwipeOptions: any;
 users: Array<any> = [];

  constructor(public navCtrl: NavController, private userService: UserService) {
    this.example1SwipeOptions = {
      slidesPerView: 4,
      loop: false,
      spaceBetween: 2
    };
  }


  ngAfterViewInit() {
    this.addNewUsers();
  }

  addNewUsers() {
      this.userService.getUsers()
                      .subscribe( users => {   this.users = users;   });
  }


}

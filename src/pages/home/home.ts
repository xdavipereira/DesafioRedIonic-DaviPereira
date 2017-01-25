import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { UserModal } from '../user/usermodal';
import { UserService} from './user.service'

import {
  StackConfig,
  Stack,
  Card,
  ThrowEvent,
  DragEvent,
  SwingStackComponent,
  SwingCardComponent} from 'angular2-swing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  @ViewChild('myswing1') swingStack: SwingStackComponent;
  @ViewChildren('mycards1') swingCards: QueryList<SwingCardComponent>;

  cards: Array<any> = [];
  stackConfig: StackConfig;
  public like;

  constructor(public navCtrl: NavController, private http: Http, public modalCtrl: ModalController, private userService: UserService) {
    this.stackConfig = {
      throwOutConfidence: (offset, element) => {
        return Math.min(Math.abs(offset) / (element.offsetWidth / 2), 1);
      },
      transform: (element, x, y, r) => {
        this.onItemMove(element, x, y, r);
      },
      throwOutDistance: (d) => {
        return 800;
      }
    };
  }



    openModal(user){
      let modal = this.modalCtrl.create(UserModal,user);
      this.userService.setCurrentUser(user);
      modal.present();
    }


    addNewUsers() {
        this.userService.getUsers()
                        .subscribe( users => {
                          for(let user of users){
                            this.cards.push(user);
                          }});
    }

    voteUp(like: boolean) {
      let removedCard = this.cards.pop();
      this.cleanCard();
      //Carregar mais cards quando houver apenas duas cards faltando.
        if (this.cards.length < 2){
          this.addNewUsers();
        }
    }


  ngAfterViewInit() {
    this.swingStack.throwin.subscribe((event: DragEvent) => {
   	    this.cleanCard();
   	  });

    this.addNewUsers();
  }

  onItemMove(element, x, y, r) {
    x < 0 ?  this.like = true : this.like = false;
    element.style['transform'] = `translate3d(0, 0, 0) translate(${x}px, ${y}px) rotate(${r}deg)`;
  }

  cleanCard() {
    this.like = undefined;
  }


}

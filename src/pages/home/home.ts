import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import 'rxjs/Rx';
import { UserModal } from '../user/usermodal';
import { UserService} from '../../services/user.service';
import { MatchPage } from '../match/match.component';
import {
  StackConfig,
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
  colorFlag;
  removedCard;


  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private userService: UserService) {
    //Configuração do component de cards.
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



    openModal(){
      let modal = this.modalCtrl.create(UserModal);
      this.userService.setCurrentCardUser(this.cards[this.cards.length - 1] );
      modal.present();
    }

    openMatchModal(){
      let modal = this.modalCtrl.create(MatchPage);
      this.userService.setCurrentCardUser(this.cards[this.cards.length - 1] );
      modal.present();
    }

    returnCard(){
      if(this.cards.length !== 10){
        this.cards.unshift(this.removedCard);
      }
    }


    addNewUsers() {
        this.userService.getUsers()
                        .subscribe( users => {   this.cards = users;  });
    }

    voteUp(like: boolean) {
      this.removedCard = this.cards.pop();
      this.cleanCard();
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
    x < 0 ?  this.colorFlag = true : this.colorFlag = false;
    element.style['transform'] = `translate3d(0, 0, 0) translate(${x}px, ${y}px) rotate(${r}deg)`
  }

  cleanCard() {
    this.colorFlag = undefined;
  }


}

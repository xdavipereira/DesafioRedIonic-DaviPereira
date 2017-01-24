import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';
import { LoadingController } from 'ionic-angular'

@Injectable()
export class UserService {

  currentUser: any;

  constructor(private http: Http, public loadCtrl: LoadingController){}

  getUsers(){
    this.loadCtrl.create({ duration: 3000}).present();
    return this.http.get('https://randomuser.me/api/?results=' + 10)
       .map(data => data.json().results);
      // .subscribe(result => {
      //   for (let val of result) {
      //     this.cards.push(val);
      //   }
      // })
  }

  setCurrentUser(user){
    this.currentUser = user;
  }

  getCurrentUser() {
    return this.currentUser;
  }

}

import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { LoadingController } from 'ionic-angular'

@Injectable()
export class UserService {

  public currentCardUser: any;
  public facebookUser: any;

  constructor(private http: Http, public loadCtrl: LoadingController){}

  getUsers(){
    this.loadCtrl.create({ duration: 1000}).present();
    return this.http.get('https://randomuser.me/api/?results=' + 10)
       .map(data => data.json().results);
  }

  setCurrentCardUser(user){
    this.currentCardUser = user;
  }

  getCurrentCardUser() {
    return this.currentCardUser;
  }

  setFacebookUser(user){
    this.facebookUser = user;
  }

  getFacebookUser() {
    return this.facebookUser;
  }

  getCurrentCardUserAge(){
    let birthdate = new Date(this.currentCardUser.dob);
    let currentDate = new Date();
    console.log(`${currentDate.getFullYear()} - ${birthdate.getFullYear()} = ${currentDate.getFullYear() - birthdate.getFullYear()}`);
    return currentDate.getFullYear() - birthdate.getFullYear();
  }

}

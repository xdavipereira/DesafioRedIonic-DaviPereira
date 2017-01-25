import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';
import { LoadingController } from 'ionic-angular'

@Injectable()
export class UserService {

  public currentUser: any;

  constructor(private http: Http, public loadCtrl: LoadingController){}

  getUsers(){
    this.loadCtrl.create({ duration: 1000}).present();
    return this.http.get('https://randomuser.me/api/?results=' + 10)
       .map(data => data.json().results);
  }

  setCurrentUser(user){
    this.currentUser = user;
  }

  getCurrentUser() {
    return this.currentUser;
  }

  getCurrentUserAge(){
    let birthdate = new Date(this.currentUser.dob);
    let currentDate = new Date();
    console.log(`${currentDate.getFullYear()} - ${birthdate.getFullYear()} = ${currentDate.getFullYear() - birthdate.getFullYear()}`);
    return currentDate.getFullYear() - birthdate.getFullYear();
  }

}

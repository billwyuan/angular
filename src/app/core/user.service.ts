import { Injectable } from "@angular/core";
import 'rxjs/add/operator/toPromise';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class UserService {

  constructor(
   public db: AngularFirestore,
   public afAuth: AngularFireAuth
 ){
 }


  getCurrentUser(){
    return new Promise<any>((resolve, reject) => {
      var user = firebase.auth().onAuthStateChanged(function(user){
        if (user) {
          resolve(user);
        } else {
          reject('No user logged in');
        }
      })
    })
  }

  updateCurrentUser(value){
    
    return new Promise<any>((resolve, reject) => {
      var user = firebase.auth().currentUser;
      
      console.log(value.name+','+user.photoURL);
      user.updateProfile({
        displayName: value.name,
        photoURL: user.photoURL
      }).then(res => {
        console.log(res);
        resolve(res);
        console.log(res);
      }, err => reject(err))
    })
  }
}

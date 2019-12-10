import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) {}

  getAvatars(){
      return this.db.collection('/avatar').valueChanges()
  }

  getUser(userKey){
    return this.db.collection('pizzas').doc(userKey).snapshotChanges();
  }

  updateUser(userKey, value){
    value.nameToSearch = value.name.toLowerCase();
    return this.db.collection('pizzas').doc(userKey).set(value);
  }

  deleteUser(userKey){
    return this.db.collection('pizzas').doc(userKey).delete();
  }

  getUsers(){
    return this.db.collection('pizzas').snapshotChanges();
  }

  searchUsers(searchValue){
    return this.db.collection('pizzas',ref => ref.where('name', '>=', searchValue)
      .where('name', '<=', searchValue + '\uf8ff'))
      .snapshotChanges()
  }

  searchUsersByName(value){
    return this.db.collection('pizzas',ref => ref.orderBy('name').startAt(value)).snapshotChanges();
  }


  createUser(value){
    return this.db.collection('pizzas').add({
      name: value.name,
      id: value.name.toLowerCase(),
      wife: value.name,
      desc: value.name,
      parent: value.name,
      children: value.name,
    });
  }
}

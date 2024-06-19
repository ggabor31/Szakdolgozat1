import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { User } from '../models/users';
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DbService {
  constructor(private firestoredb: AngularFirestore)
  {

  }

  

  updateUser(user: User) {
    return this.firestoredb.collection('user').doc(user.id).update(user);
  }

  getDatabaseList(name:string)
  {
    return this.firestoredb.collection(name).valueChanges({ idField: 'propertyId' });
  }

  getUserbyId(id:string)
  {
    return this.firestoredb.collection<User>("user").doc(id).valueChanges();
  }

  getUserbyCurrentID(){
    const user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    return this.firestoredb.collection<User>('user').doc(user.uid).valueChanges();
  }

  createnewUser(data: User) {
    return new Promise<any>((resolve, reject) => {
      this.firestoredb
        .collection("Users")
        .doc(data.id)
        .set(data);
    }).then(resolve =>{
      console.log('Sikers regisztráció');
      console.log(resolve);
    }).catch(reject =>
    {
      console.error(reject);
    });
  }

  deleteObject(name:string,id:string)
  {
    return this.firestoredb.collection(name).doc(id).delete();
  }

  deleteUser(data: any) {
    return this.firestoredb
      .collection("coffeeOrders")
      .doc(data.payload.doc.id)
      .delete();
  }
  
}

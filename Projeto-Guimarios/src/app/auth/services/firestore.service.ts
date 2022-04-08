import { collection } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { AuthService } from './../auth.service';
import { User } from './../user';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private usersCollection: AngularFirestoreCollection<User>;
  users$: Observable<User[]>

  constructor(private afs: AngularFirestore, private authService: AuthService) {

    this.usersCollection = this.afs.collection<User>('users');
    this.users$ = this.usersCollection.valueChanges();

  }

  getDataUsers (user: User) {

  }

}

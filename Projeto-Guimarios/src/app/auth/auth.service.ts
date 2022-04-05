import { from, Observable, throwError } from 'rxjs';
import { User } from './user';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { switchMap, catchError } from 'rxjs/operators';
import { getAuth, createUserWithEmailAndPassword, UserCredential, signInWithEmailAndPassword  } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userCollection: AngularFirestoreCollection<User> = this.afs.collection('users');

  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) { }

  register(user: User): Observable<boolean> {

      const auth = getAuth();

      return from (createUserWithEmailAndPassword(auth, user.email, user.senha!))
        .pipe(
          switchMap((u: UserCredential) =>
            this.userCollection.doc(u.user.uid).set({...user, id: u.user.uid}).then(() => true)
          ),
          catchError((err) => throwError(err))
        )
  }

  login(email: string, password: string) {

    const auth = getAuth();

    return from (signInWithEmailAndPassword(auth, email, password))
      .pipe(
        switchMap((u: UserCredential) => this.userCollection.doc<User>(u.user.uid).valueChanges()),
        catchError(() => throwError('Invalid credentials or user is not registered'))
      )

  }

  logout(){

    this.afAuth.signOut();

  }

}

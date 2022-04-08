import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from './user';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth = getAuth();

  private userCollection: AngularFirestoreCollection<User> = this.afs.collection('users');

  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth, private router: Router, private snackBar: MatSnackBar) { }

  getCurrentUser() {

    return this.auth.currentUser

  }

  register(user: User) {

    const newUser = createUserWithEmailAndPassword(this.auth, user.email, user.senha)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

      });

  }

  login(email: string, password: string) {

    this.logout()

    return signInWithEmailAndPassword(this.auth, email, password);

  }

  logout(){

    this.afAuth.signOut();

  }

}

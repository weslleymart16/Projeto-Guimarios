import { environment } from './../../../environments/environment';
import { AuthService } from './../auth.service';
import { User } from './../user';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { getFirestore, collection, addDoc, Firestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { FirebaseApp } from '@angular/fire/app';

@Injectable()
export class FirestoreService {

  private app: FirebaseApp;
  private db: Firestore;

  constructor(private afs: AngularFirestore, private authService: AuthService) {

    this.app = initializeApp(environment.firebaseConfig);
    this.db = getFirestore(this.app)
  }

 async register (user: User) {

    try {

      const docRef = await addDoc(collection(this.db, "users"), {
          nome: user.nome,
          dataDeNascimento: user.dataDeNascimento,
          sobrenome: user.sobrenome,
          genero: user.genero,
          cpf: user.cpf,
          turma: user.turma,
          rua: user.rua,
          complemento: user.complemento,
          bairro: user.bairro,
          cidade: user.cidade,
          numero: user.numero,
          estado: user.estado,
          email: user.email
      });
      console.log("Document written with ID: ", docRef.id);

    } catch (e) {

      console.error("Error adding document: ", e);

    }



  }

}

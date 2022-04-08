import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from './../user';
import { AuthService } from './../auth.service';
import { ViewController } from './model/viewController.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  viewController: ViewController = {} as ViewController;
  newUserRegister = new User();
  personalData$: any
  address$: any
  finishRegister$: any

  constructor(private authService: AuthService, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.viewController.personalData = true;
  }

  setPersonalData(event: any){

    this.viewController.personalData = false;
    this.viewController.address = true;

    this.newUserRegister.nome = event.nome
    this.newUserRegister.dataDeNascimento = event.dataDeNascimento
    this.newUserRegister.sobrenome = event.sobrenome
    this.newUserRegister.genero = event.genero
    this.newUserRegister.cpf = event.cpf
    this.newUserRegister.turma = event.turma

  }

  setAddress(event: any){

    this.viewController.address = false;
    this.viewController.finishRegister = true;

    this.newUserRegister.rua = event.rua
    this.newUserRegister.complemento = event.complemento
    this.newUserRegister.bairro = event.bairro
    this.newUserRegister.cidade = event.cidade
    this.newUserRegister.numero = event.numero
    this.newUserRegister.estado = event.estado

  }

  setFinishRegister(event: any) {

    this.newUserRegister.email = event.email
    this.newUserRegister.senha = event.senha

    this.authService.register(this.newUserRegister)
    this.snackBar.open(
      'Successfully registered. Us your new credntials to sign in', 'OK', {duration: 2000}
    );
    
    this.router.navigateByUrl('/login');

  }

  personalData(){

    this.viewController.personalData = true;
    this.viewController.address = false;
    this.viewController.finishRegister = false;
  }

  address(){

    this.viewController.personalData = false;
    this.viewController.address = true;
    this.viewController.finishRegister = false;

  }

  finishRegister(){

    this.viewController.personalData = false;
    this.viewController.address = false;
    this.viewController.finishRegister = true;

  }


}

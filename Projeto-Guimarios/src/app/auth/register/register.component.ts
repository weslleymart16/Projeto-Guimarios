import { FormGroup } from '@angular/forms';
import { ViewController } from './model/viewController.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  viewController: ViewController = {} as ViewController;
  personalData$: any
  address$: any
  finishRegister$: any

  constructor() { }

  ngOnInit(): void {
    this.viewController.personalData = true;
  }

  setPersonalData(event: any){
    this.personalData$ = event.value
    this.viewController.personalData = false;
    this.viewController.address = true;
  }

  setAddress(event: any){
    this.address$ = event.value
    this.viewController.address = false;
    this.viewController.finishRegister = true;
  }

  setFinishRegister(event: any) {
    this.finishRegister$ = event.value
    console.log("cadastrado com sucesso")
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

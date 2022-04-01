import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-finish-register',
  templateUrl: './finish-register.component.html',
  styleUrls: ['./finish-register.component.css'],
})
export class FinishRegisterComponent implements OnInit {
  formsFinishRegister!: FormGroup;
  @Output() formEmitterFinish = new EventEmitter();

  hide = true;

  constructor(private formBuilder: FormBuilder) {
    this.formsFinishRegister = this.formBuilder.group({
      email: [''],
      senha: [''],
      confirmSenha: [''],
    });
  }

  ngOnInit(): void {}

  teste() {
    console.log(this.formsFinishRegister.value);
    this.formEmitterFinish.emit(this.formsFinishRegister.value);
  }
}

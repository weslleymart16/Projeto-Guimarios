import { AuthService } from './../../auth.service';
import { User } from './../../user';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {

  formsPersonalDate!: FormGroup;
  @Output() formEmitterPersonalDate = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {

    this.formsPersonalDate = this.formBuilder.group({

      nome: ['', [Validators.required]],
      dataDeNascimento: ['', [Validators.required]],
      sobrenome: ['', [Validators.required] ],
      genero: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      turma: ['', [Validators.required]]

    })
  }


  ngOnInit(): void {
  }

  formPersonalDataEmit() {
    console.log(this.formsPersonalDate.value)
    this.formEmitterPersonalDate.emit(this.formsPersonalDate.value)
  }

}

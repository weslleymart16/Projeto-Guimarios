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

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private snackBar: MatSnackBar, private router: Router) {

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

  onSubmit(){

    const newUserPersonalDate = new User();

     newUserPersonalDate.nome = this.formsPersonalDate.value.nome;
     newUserPersonalDate.dataDeNascimento = this.formsPersonalDate.value.dataDeNascimento;
     newUserPersonalDate.sobrenome = this.formsPersonalDate.value.sobrenome;
     newUserPersonalDate.genero = this.formsPersonalDate.value.genero;
     newUserPersonalDate.cpf = this.formsPersonalDate.value.cpf;
     newUserPersonalDate.turma = this.formsPersonalDate.value.turma;

     this.authService.register(newUserPersonalDate)
        .subscribe(
          (u) => {
            this.snackBar.open(
              'successfully registered. Use your new credentials to sign in', 'OK', {duration: 2000}
            );
            this.router.navigateByUrl('/login');
          }
        );
  }

}

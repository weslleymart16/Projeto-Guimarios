import { AuthService } from './../../auth.service';
import { User } from './../../user';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finish-register',
  templateUrl: './finish-register.component.html',
  styleUrls: ['./finish-register.component.css'],
})
export class FinishRegisterComponent implements OnInit {
  formsFinishRegister!: FormGroup;
  @Output() formEmitterFinish = new EventEmitter();

  hide = true;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private snackBar: MatSnackBar, private router: Router) {
    this.formsFinishRegister = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmSenha: ['', [Validators.required, Validators.minLength(6)]],
    },
    { validator: this.matchingPasswords});
  }

  ngOnInit(): void {}

  formFinishRegisterEmit() {
    console.log(this.formsFinishRegister.value);
    this.formEmitterFinish.emit(this.formsFinishRegister.value);
  }

  matchingPasswords(group: FormGroup){
    if (group){
      const senha = group.controls['senha'].value;
      const confirmSenha= group.controls['confirmSenha'].value;
      if(senha == confirmSenha){
        return null;
      }
    }
    return { matching: false };
  }

  onSubmit(){

    const newUserFinishRegister = new User();

     newUserFinishRegister.nome = this.formsFinishRegister.value.email;
     newUserFinishRegister.dataDeNascimento = this.formsFinishRegister.value.senha;

     this.authService.register(newUserFinishRegister)
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

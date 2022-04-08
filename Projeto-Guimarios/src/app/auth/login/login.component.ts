import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.formBuilder.group ({
    'email': ['', [Validators.required, Validators.email]],
    'senha': ['', [Validators.required, Validators.minLength(6)]],
  });

  loading: boolean = false;

  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private snackbar: MatSnackBar,
    private router: Router,
    ) {  }

  ngOnInit(): void {
  }

  onSubmit(){

    this.loading = true;
    let email = this.loginForm.value.email;
    let senha = this.loginForm.value.senha;
    this.authService.login(email, senha).then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      this.snackbar.open('Logado com sucesso', 'Ok')
      localStorage.setItem('user', user.toString())
      this.router.navigateByUrl('/dashboard');
      this.loading = false
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      this.snackbar.open('Usuário/Senha invalido ou usuário não cadastrado', 'OK' )
      this.router.navigateByUrl('/login');
      this.loading = false
    });;

  }

  loginGoogle(){

  }

  register() {
    this.loading = true;
    this.router.navigateByUrl('register');
  }

}

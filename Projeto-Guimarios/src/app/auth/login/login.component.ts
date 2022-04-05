import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

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

  constructor(private formBuilder: FormBuilder) {  }

  ngOnInit(): void {
  }

  onSubmit(){

  }

  loginGoogle(){
    
  }

}

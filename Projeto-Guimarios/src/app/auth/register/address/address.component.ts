import { User } from './../../user';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  formsAddress!: FormGroup;
  @Output() formEmitterAddress = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {

    this.formsAddress = this.formBuilder.group({

      rua: ['', [Validators.required]],
      complemento: ['', [Validators.required]],
      bairro: ['', [Validators.required]],
      cidade: ['', [Validators.required]],
      numero: ['', [Validators.required]],
      estado: ['', [Validators.required]]

    });

  }

  ngOnInit(): void {
  }

  teste() {
    console.log(this.formsAddress.value)
    this.formEmitterAddress.emit(this.formsAddress.value)
  }

  onSubmit(){

    const newUserAddress = new User();

     newUserAddress.rua = this.formsAddress.value.rua;
     newUserAddress.complemento = this.formsAddress.value.complemento;
     newUserAddress.bairro = this.formsAddress.value.bairro;
     newUserAddress.cidade = this.formsAddress.value.cidade;
     newUserAddress.numero = this.formsAddress.value.numero;
     newUserAddress.estado = this.formsAddress.value.estado;

  }

}

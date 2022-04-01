import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

      rua: [''],
      complemento: [''],
      bairro: [''],
      cidade: [''],
      numero: [''],
      estado: ['']

    });

  }

  ngOnInit(): void {
  }

  teste() {
    console.log(this.formsAddress.value)
    this.formEmitterAddress.emit(this.formsAddress.value)
  }

}

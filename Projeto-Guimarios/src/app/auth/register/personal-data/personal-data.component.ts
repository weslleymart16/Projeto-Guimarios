import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

      nome: [''],
      dataDeNascimento: [''],
      sobrenome: [''],
      genero: [''],
      cpf: [''],
      turma: ['']

    })
  }


  ngOnInit(): void {
  }

  formPersonalDataEmit() {
    console.log(this.formsPersonalDate.value)
    this.formEmitterPersonalDate.emit(this.formsPersonalDate.value)
  }

}

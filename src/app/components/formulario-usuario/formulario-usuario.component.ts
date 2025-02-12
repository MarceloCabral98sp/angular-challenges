import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrl: './formulario-usuario.component.css'
})
export class FormularioUsuarioComponent implements OnInit, OnChanges {

  public formulario!: FormGroup;

  @Input()
  dadosForm!: { nome: string, email: string};

  @Output()
  newForm = new EventEmitter<{ nome: string, email: string}>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.criarFormulario();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['dadosForm'] && this.dadosForm && this.formulario) {
      this.formulario.patchValue(this.dadosForm);
    }
  }
  
  criarFormulario() {
    this.formulario = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]], // Agrupando validadores corretamente
      email: ['', [Validators.required, Validators.email]] // Agrupando validadores corretamente
    });
  }

  onSubmit() {
    if(this.formulario.valid) {
      this.newForm.emit(
        this.formulario.value
      )
    }
  }
}

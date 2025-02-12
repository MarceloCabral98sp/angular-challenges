import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-filtro-pesquisa',
  templateUrl: './filtro-pesquisa.component.html',
  styleUrl: './filtro-pesquisa.component.css',
})
export class FiltroPesquisaComponent implements OnInit {
  @Input()
  filtroPesquisa!: string;

  formulario!: FormGroup;

  @Output()
  filtragem = new EventEmitter<string>();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();

    this.formulario.patchValue({ pesquisa: this.filtroPesquisa });

    this.formulario.get('pesquisa')?.valueChanges.subscribe((valor: string) => {
      this.filtragem.emit(valor);
    })
  }

  createForm() {
    this.formulario = this.fb.group({
      pesquisa: ['', [Validators.required, Validators.minLength(3)]], // Agrupando validadores corretamente
    });
  }
}

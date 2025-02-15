import { Component } from '@angular/core';

export interface Usuario {
  nome: string,
  email: string
}

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.css'
})
export class ListaUsuariosComponent {

  public termoPesquisa: string = '';

  public usuarios: Usuario[] = [
    { nome: 'ana julia silva', email: 'ana.julia@gmail.com' },
    { nome: 'maria julia azevedo', email: 'maria.julia@gmail.com' },
    { nome: 'bruna julia messina', email: 'bruna.julia@gmail.com' },
    { nome: 'luana julia cabral', email: 'luana.julia@gmail.com' },
  ]
}

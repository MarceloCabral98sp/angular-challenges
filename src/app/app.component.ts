import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  public dados: { nome: string, email: string} = {
    nome: 'João Gomes',
    email: 'joao.gomes@gmail.com'
  }

  changeName() {
    this.dados.nome = 'João da Silva Gomes'
  }

  changeObject() {


    this.dados = {
      nome: 'João da Silva Gomes',
      email: 'joao.silvas@gmail.com'
    }
  } 
}

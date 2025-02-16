import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public titulo = 'Curso de Angular';
  public mostrarFilho = true;

  changeTitulo() {
    this.titulo = 'Curso de React.js';
  }

  toggleComponent() {
    this.mostrarFilho = false;
  }
}

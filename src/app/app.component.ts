import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  public initialValue: number = 15;

  public listaTarefas = [
    { id: 1, tarefa: "Comprar mantimentos" },
    { id: 2, tarefa: "Estudar para a prova" },
    { id: 3, tarefa: "Fazer a limpeza da casa" },
    { id: 4, tarefa: "Pagar contas" },
    { id: 5, tarefa: "Ligar para o médico" }
  ]

  onValueEmitted(number: number) {
    this.initialValue = number;
  }

  onTarefaConcluida(id: number) {
    const tarefa = this.listaTarefas.find(tarefa => tarefa.id === id);

    if(tarefa) {
      alert(`A tarefa "${tarefa.tarefa}" foi concluída`);
    }
  }
}

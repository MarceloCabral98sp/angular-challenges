import { Component } from '@angular/core';

interface Tarefa {
  descricao: string,
  concluida: boolean
}
@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrl: './lista-tarefas.component.css'
})
export class ListaTarefasComponent {

  public tarefas: Tarefa[] = [
    { descricao: 'Estudar Angular', concluida: false },
    { descricao: 'Desenvolver projeto', concluida: true },
    { descricao: 'Revisar código', concluida: false }
  ]

  alternarConclusao(tarefa: Tarefa) {
    tarefa.concluida = !tarefa.concluida;
  }
}

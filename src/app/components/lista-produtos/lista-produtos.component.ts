import { Component } from '@angular/core';

interface Produto {
  nome: string, 
  preco: number,
  dataLancamento: Date
}

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrl: './lista-produtos.component.css'
})
export class ListaProdutosComponent {

  public produtos: Produto[] = [
    { nome: 'Produto 1', preco: 29.99, dataLancamento: new Date(2025, 1, 15) },
    { nome: 'Produto 2', preco: 49.99, dataLancamento: new Date(2025, 2, 20) },
    { nome: 'Produto 3', preco: 99.99, dataLancamento: new Date(2025, 3, 25) },
    { nome: 'Produto 1', preco: 29.99, dataLancamento: new Date(2025, 1, 15) },
    { nome: 'Produto 2', preco: 4999.99, dataLancamento: new Date(2025, 2, 20) },
  ]
}

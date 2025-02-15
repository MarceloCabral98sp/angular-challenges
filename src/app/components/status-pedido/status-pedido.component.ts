import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  statusPedido?: 'pendente' | 'em_transporte' | 'entregue';
}

@Component({
  selector: 'app-status-pedido',
  templateUrl: './status-pedido.component.html',
  styleUrl: './status-pedido.component.css',
})
export class StatusPedidoComponent {
  public produtosComprados: Produto[] = [
    { id: 1, nome: 'Smartphone', preco: 2500, statusPedido: 'pendente' },
    { id: 2, nome: 'Notebook', preco: 4500, statusPedido: 'em_transporte' },
    { id: 3, nome: 'Fones de Ouvido', preco: 300, statusPedido: 'entregue' },
    { id: 4, nome: 'Câmera Digital', preco: 1200, statusPedido: 'pendente' },
    { id: 5, nome: 'Mouse Gamer', preco: 250, statusPedido: 'em_transporte' },
    { id: 6, nome: 'Iphone 16', preco: 7000}
  ];
}

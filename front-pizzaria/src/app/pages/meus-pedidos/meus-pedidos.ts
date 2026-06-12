import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-meus-pedidos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './meus-pedidos.html',
  styleUrl: './meus-pedidos.css',
})
export class MeusPedidos {

  pedidos = [
    {
      numero: '#45821',
      status: 'Em preparo',
      data: '13 Maio 2026',
      total: 89.90,
      itens: [
        'Pizza Pepperoni',
        'Refrigerante 2L'
      ]
    },
    {
      numero: '#45810',
      status: 'Entregue',
      data: '11 Maio 2026',
      total: 124.90,
      itens: [
        'Pizza Calabresa',
        'Pizza Mussarela'
      ]
    },
    {
      numero: '#45782',
      status: 'Saiu para entrega',
      data: '08 Maio 2026',
      total: 74.90,
      itens: [
        'Pizza Frango Catupiry'
      ]
    }
  ]

}
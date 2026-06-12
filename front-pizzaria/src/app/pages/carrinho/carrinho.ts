import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './carrinho.html',
  styleUrl: './carrinho.css'
})
export class Carrinho {

  itens = [
    {
      nome: 'Pizza Pepperoni',
      descricao: 'Molho artesanal, mussarela e pepperoni.',
      preco: 59.90,
      quantidade: 1,
      imagem: '/assets/img/pizza-hero.png'
    },
    {
      nome: 'Pizza Mussarela',
      descricao: 'Mussarela especial, tomate e orégano.',
      preco: 49.90,
      quantidade: 2,
      imagem: '/assets/img/pizza-hero.png'
    }
  ]

  taxaEntrega = 8.90

  aumentarQuantidade(item: any) {
    item.quantidade++
  }

  diminuirQuantidade(item: any) {
    if (item.quantidade > 1) {
      item.quantidade--
    }
  }

  removerItem(index: number) {
    this.itens.splice(index, 1)
  }

  calcularSubtotal() {
    return this.itens.reduce((total, item) => {
      return total + item.preco * item.quantidade
    }, 0)
  }

  calcularTotal() {
    return this.calcularSubtotal() + this.taxaEntrega
  }

  finalizarPedido() {
    alert('Pedido finalizado com sucesso!')
  }
}
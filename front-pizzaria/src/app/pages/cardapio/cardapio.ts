import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { ProdutoService } from '../../services/produto.service'

@Component({
  selector: 'app-cardapio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cardapio.html',
  styleUrl: './cardapio.css'
})
export class Cardapio implements OnInit {

  produtos: any[] = []

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.carregarProdutos()
  }

  carregarProdutos() {
    this.produtoService.listarProdutos().subscribe({
      next: (res: any) => {
        this.produtos = res
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
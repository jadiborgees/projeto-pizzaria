import { Routes } from '@angular/router';

import { Login } from './pages/login/login';
import { Cadastro } from './pages/cadastro/cadastro';
import { Cardapio } from './pages/cardapio/cardapio';
import { Carrinho } from './pages/carrinho/carrinho';
import { MeusPedidos } from './pages/meus-pedidos/meus-pedidos';

import { Produtos } from './pages/admin/produtos/produtos';
import { Pedidos } from './pages/admin/pedidos/pedidos';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'cardapio',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'cadastro',
    component: Cadastro
  },
  {
    path: 'cardapio',
    component: Cardapio
  },
  {
    path: 'carrinho',
    component: Carrinho
  },
  {
    path: 'meus-pedidos',
    component: MeusPedidos
  },
  {
    path: 'admin/produtos',
    component: Produtos
  },
  {
    path: 'admin/pedidos',
    component: Pedidos
  }
];
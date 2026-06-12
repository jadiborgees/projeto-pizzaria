import { Router } from 'express'

import {
  criarProduto,
  listarProdutos,
  buscarProdutoPorId,
  atualizarProduto,
  deletarProduto
} from '../controllers/produto.controller.js'

import { authMiddleware } from '../middlewares/auth.middleware.js'

const router = Router()

router.post('/', authMiddleware, criarProduto)

router.get('/', listarProdutos)

router.get('/:id', buscarProdutoPorId)

router.put('/:id', authMiddleware, atualizarProduto)

router.delete('/:id', authMiddleware, deletarProduto)

export default router
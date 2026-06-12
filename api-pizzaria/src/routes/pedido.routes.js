import { Router } from 'express'

import {
  criarPedido,
  listarPedidos,
  buscarPedidoPorId,
  atualizarStatusPedido
} from '../controllers/pedido.controller.js'

import { authMiddleware } from '../middlewares/auth.middleware.js'

const router = Router()

router.post('/', authMiddleware, criarPedido)
router.get('/', authMiddleware, listarPedidos)
router.get('/:id', authMiddleware, buscarPedidoPorId)
router.put('/:id/status', authMiddleware, atualizarStatusPedido)

export default router
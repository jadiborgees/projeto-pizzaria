import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import authRoutes from './routes/auth.routes.js'
import produtoRoutes from './routes/produto.routes.js'
import pedidoRoutes from './routes/pedido.routes.js'

dotenv.config()

const app = express()

app.use(cors())

app.use(express.json())

app.use('/auth', authRoutes)

app.use('/produtos', produtoRoutes)

app.use('/pedidos', pedidoRoutes)

app.get('/', (req, res) => {
  res.status(200).json({
    mensagem: 'API da Pizzaria funcionando 🍕'
  })
})

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})
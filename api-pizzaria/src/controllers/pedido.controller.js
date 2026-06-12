import prisma from '../lib/prisma.js'

export const criarPedido = async (req, res) => {
  try {
    const userId = req.user.id
    const { itens } = req.body

    if (!itens || itens.length === 0) {
      return res.status(400).json({ mensagem: 'Informe pelo menos um item no pedido' })
    }

    const pedido = await prisma.pedido.create({
      data: {
        status: 'PENDENTE',
        userId,
        itens: {
          create: itens.map((item) => ({
            produtoId: item.produtoId,
            quantidade: item.quantidade
          }))
        }
      },
      include: {
        itens: {
          include: {
            produto: true
          }
        },
        usuario: {
          select: {
            id: true,
            nome: true,
            email: true
          }
        }
      }
    })

    return res.status(201).json(pedido)
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro ao criar pedido' })
  }
}

export const listarPedidos = async (req, res) => {
  try {
    const pedidos = await prisma.pedido.findMany({
      include: {
        usuario: {
          select: {
            id: true,
            nome: true,
            email: true
          }
        },
        itens: {
          include: {
            produto: true
          }
        }
      }
    })

    return res.status(200).json(pedidos)
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro ao listar pedidos' })
  }
}

export const buscarPedidoPorId = async (req, res) => {
  try {
    const { id } = req.params

    const pedido = await prisma.pedido.findUnique({
      where: { id: Number(id) },
      include: {
        usuario: {
          select: {
            id: true,
            nome: true,
            email: true
          }
        },
        itens: {
          include: {
            produto: true
          }
        }
      }
    })

    if (!pedido) {
      return res.status(404).json({ mensagem: 'Pedido não encontrado' })
    }

    return res.status(200).json(pedido)
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro ao buscar pedido' })
  }
}

export const atualizarStatusPedido = async (req, res) => {
  try {
    const { id } = req.params
    const { status } = req.body

    if (!status) {
      return res.status(400).json({ mensagem: 'Status é obrigatório' })
    }

    const pedidoExiste = await prisma.pedido.findUnique({
      where: { id: Number(id) }
    })

    if (!pedidoExiste) {
      return res.status(404).json({ mensagem: 'Pedido não encontrado' })
    }

    const pedido = await prisma.pedido.update({
      where: { id: Number(id) },
      data: { status },
      include: {
        usuario: {
          select: {
            id: true,
            nome: true,
            email: true
          }
        },
        itens: {
          include: {
            produto: true
          }
        }
      }
    })

    return res.status(200).json(pedido)
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro ao atualizar status do pedido' })
  }
}
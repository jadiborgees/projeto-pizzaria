import prisma from '../lib/prisma.js'

export const criarProduto = async (req, res) => {
  try {
    const { nome, descricao, preco } = req.body

    if (!nome || !descricao || preco === undefined) {
      return res.status(400).json({ mensagem: 'Nome, descrição e preço são obrigatórios' })
    }

    const produto = await prisma.produto.create({
      data: {
        nome,
        descricao,
        preco: Number(preco)
      }
    })

    return res.status(201).json(produto)
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro ao criar produto' })
  }
}

export const listarProdutos = async (req, res) => {
  try {
    const produtos = await prisma.produto.findMany()

    return res.status(200).json(produtos)
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro ao listar produtos' })
  }
}

export const buscarProdutoPorId = async (req, res) => {
  try {
    const { id } = req.params

    const produto = await prisma.produto.findUnique({
      where: { id: Number(id) }
    })

    if (!produto) {
      return res.status(404).json({ mensagem: 'Produto não encontrado' })
    }

    return res.status(200).json(produto)
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro ao buscar produto' })
  }
}

export const atualizarProduto = async (req, res) => {
  try {
    const { id } = req.params
    const { nome, descricao, preco } = req.body

    const produtoExiste = await prisma.produto.findUnique({
      where: { id: Number(id) }
    })

    if (!produtoExiste) {
      return res.status(404).json({ mensagem: 'Produto não encontrado' })
    }

    const produto = await prisma.produto.update({
      where: { id: Number(id) },
      data: {
        nome,
        descricao,
        preco: Number(preco)
      }
    })

    return res.status(200).json(produto)
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro ao atualizar produto' })
  }
}

export const deletarProduto = async (req, res) => {
  try {
    const { id } = req.params

    const produtoExiste = await prisma.produto.findUnique({
      where: { id: Number(id) }
    })

    if (!produtoExiste) {
      return res.status(404).json({ mensagem: 'Produto não encontrado' })
    }

    await prisma.produto.delete({
      where: { id: Number(id) }
    })

    return res.status(200).json({ mensagem: 'Produto deletado com sucesso' })
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro ao deletar produto' })
  }
}

export const buscarProduto = async (req, res) => {

    const { id } = req.params

    const produto = await prisma.produto.findUnique({
        where: {
            id: Number(id)
        }
    })

    if (!produto) {
        return res.status(404).json({
            mensagem: 'Produto não encontrado'
        })
    }

    res.status(200).json(produto)
}
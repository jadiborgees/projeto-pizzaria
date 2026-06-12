import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import prisma from '../lib/prisma.js'

export const register = async (req, res) => {
  try {
    const { nome, email, senha } = req.body

    if (!nome || !email || !senha) {
      return res.status(400).json({ mensagem: 'Nome, email e senha são obrigatórios' })
    }

    const usuarioExiste = await prisma.user.findUnique({
      where: { email }
    })

    if (usuarioExiste) {
      return res.status(400).json({ mensagem: 'Email já cadastrado' })
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10)

    const usuario = await prisma.user.create({
      data: {
        nome,
        email,
        senha: senhaCriptografada
      }
    })

    return res.status(201).json({
      mensagem: 'Usuário cadastrado com sucesso',
      usuario: {
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email
      }
    })
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro ao cadastrar usuário' })
  }
}

export const login = async (req, res) => {
  try {
    const { email, senha } = req.body

    if (!email || !senha) {
      return res.status(400).json({ mensagem: 'Email e senha são obrigatórios' })
    }

    const usuario = await prisma.user.findUnique({
      where: { email }
    })

    if (!usuario) {
      return res.status(404).json({ mensagem: 'Usuário não encontrado' })
    }

    const senhaCorreta = await bcrypt.compare(senha, usuario.senha)

    if (!senhaCorreta) {
      return res.status(401).json({ mensagem: 'Senha incorreta' })
    }

    const token = jwt.sign(
      { id: usuario.id, email: usuario.email },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    )

    return res.status(200).json({
      mensagem: 'Login realizado com sucesso',
      token
    })
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro ao fazer login' })
  }
}
# 🍕 Projeto Pizzaria — Bella Massa

Sistema web de pizzaria desenvolvido com arquitetura em camadas, contendo:

- Front-end em Angular
- Back-end em Node.js + Express
- Banco de dados MySQL
- Deploy em Vercel e Railway

---

# 📌 Sobre o projeto

O Projeto Pizzaria simula uma plataforma de pedidos online, onde o cliente pode:

- Visualizar o cardápio
- Ver produtos disponíveis
- Adicionar itens ao carrinho
- Realizar pedidos

A aplicação foi separada em duas camadas principais:

- **Front-end:** interface visual para o usuário
- **Back-end:** API responsável pelas regras de negócio e acesso ao banco

---

# 🛠 Tecnologias utilizadas

## Front-end
- Angular
- TypeScript
- HTML
- CSS

## Back-end
- Node.js
- Express.js

## Banco de Dados
- MySQL
- Prisma ORM

## Deploy
- Vercel (Front-end)
- Railway (Back-end + Banco)

---

# 📂 Estrutura do projeto

```bash
projeto-pizzaria/
│
├── api-pizzaria/
│   ├── src/
│   ├── prisma/
│   └── package.json
│
├── front-pizzaria/
│   ├── src/
│   └── package.json
```

---

# 🔗 Links de produção

## Front-end
:contentReference[oaicite:0]{index=0}

## API
:contentReference[oaicite:1]{index=1}

## Rota de produtos
:contentReference[oaicite:2]{index=2}

---

# ⚙️ Como rodar localmente

## Clonar repositório

```bash
git clone https://github.com/jadiborgees/projeto-pizzaria.git
```

---

## Backend

```bash
cd api-pizzaria
npm install
npm run dev
```

Servidor roda em:

```bash
http://localhost:3000
```

---

## Frontend

```bash
cd front-pizzaria
npm install
ng serve
```

Aplicação roda em:

```bash
http://localhost:4200
```

---

# 📡 API Endpoints

## Produtos
```http
GET /produtos
```

Retorna lista de pizzas disponíveis.

## Pedidos
```http
GET /pedidos
POST /pedidos
```

## Carrinho
```http
GET /carrinho
POST /carrinho
```

---

# 🚀 Deploy

O projeto utiliza integração com GitHub.

Sempre que é feito:

```bash
git add .
git commit -m "update"
git push
```

As plataformas realizam novo deploy automaticamente:

- Vercel → Front-end
- Railway → API e banco

---

# 👩‍💻 Desenvolvido por

**Jadi Borges**

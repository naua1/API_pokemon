# 🐱‍🏍 Pokémon API

Uma API RESTful para gerenciar Pokémons, construída com **Node.js**, **Fastify** e **PostgreSQL**. Possui um CRUD completo e suporta inserção em massa.

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Fastify](https://www.fastify.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [neon.tech](https://neon.tech/) (opcional como banco em nuvem)

---

## ⚙️ Instalação

1. Clone o projeto:

   ```bash
   git clone https://github.com/seu-usuario/pokemon-api.git
   cd pokemon-api
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure o arquivo `.env`:

   ```env
   DATABASE_URL=postgres://usuario:senha@host:porta/database
   PORT=3000
   ```

4. Inicie o servidor:

   ```bash
   npm run dev
   ```

---

## 📚 Endpoints da API

### 🔎 `GET /pokemon?nome=pikachu`

Busca Pokémons cadastrados. Pode usar query param `?nome=` para filtrar por nome.

---

### ➕ `POST /pokemon`

Cria um Pokémon individual.

**Exemplo de body:**

```json
{
  "id": 1,
  "nome": "Pikachu",
  "tipo": "Elétrico",
  "ataques": ["Choque do Trovão", "Cauda de Ferro", "Ataque Rápido"]
}
```

---

### 📥 `POST /pokemon/vario`

Insere **vários Pokémons de uma vez** (bulk insert).

**Exemplo de body:**

```json
[
  {
    "id": 5,
    "nome": "Charmeleon",
    "tipo": "Fogo",
    "ataques": ["Lança-Chamas", "Garra de Metal", "Brasas"]
  },
  {
    "id": 6,
    "nome": "Charizard",
    "tipo": "Fogo",
    "ataques": ["Lança-Chamas", "Explosão de Fogo", "Asa de Aço"]
  }
]
```

> ⚠️ A coluna `ataques` no banco deve ser do tipo `text[]`. Certifique-se de converter corretamente em sua query.

---

### ✏️ `PUT /pokemon/:id`

Atualiza um Pokémon existente pelo `id`.

**Exemplo de body:**

```json
{
  "nome": "Raichu",
  "tipo": "Elétrico",
  "ataques": ["Trovão", "Investida Relâmpago"]
}
```

---

### ❌ `DELETE /pokemon/:id`

Remove o Pokémon com o `id` especificado.

---

## 🧪 Testando com HTTP Client (VSCode)

Você pode criar um arquivo `pokemon.http` com:

```http
### GET por nome
GET http://localhost:3000/pokemon?nome=pikachu

### Inserção em massa
POST http://localhost:3000/pokemon/vario
Content-Type: application/json

[
  {
    "id": 10,
    "nome": "Bulbasaur",
    "tipo": "Grama",
    "ataques": ["Chicote de Vinha", "Folha Navalha"]
  }
]

### Inserção individual
POST http://localhost:3000/pokemon
Content-Type: application/json

{
  "id": 2,
  "nome": "Charmander",
  "tipo": "Fogo",
  "ataques": ["Brasas", "Lança-Chamas"]
}

### Atualização
PUT http://localhost:3000/pokemon/3
Content-Type: application/json

{
  "nome": "Mewtwo"
}

### Remoção
DELETE http://localhost:3000/pokemon/3
```

---

## 📄 Licença

Este projeto é de código aberto e pode ser usado livremente!

---

Feito com ❤️ usando Fastify + PostgreSQL + Pokémons.
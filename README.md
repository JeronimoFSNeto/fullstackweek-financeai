# Full Stack Week - Finance Ai

- TypeScript
- PostegreSQL

## Registrando aula 3

Usando a conta Neon.tech para hospedar o banco de dados, depois de realizar o primeiro migrate
Criei uma nova variavel chamada DATABASE_URL_PROD

```bash
npx prisma migrate deploy
```

Agora copiar as configurações do clerk para o .env

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
```

CRIANDO TELA DE TRANSAÇÃO
função assicrona = async

criar dentro de lib o arquivo prisma.ts
instalar:
npm i @prisma/client@5.21.1

npx prisma studio
<http://localhost:5555>

Exibindo apnas a coluna name da tabela transactions

```bash
import { db } from "../_lib/prisma";

// Esse arquivo é um Server Component
const TransactionsPage = async () => {
  // TODO acessar as transações do meu banco de dados

  // pegando todas as transasões que estão na tabela transaction
  // {} objeto vazio
  const transactions = await db.transaction.findMany({});

  return (
    <div>
      {transactions.map((transaction) => (
        <div key={transaction.id}>{transaction.name}</div>
      ))}
    </div>
  );
};

export default TransactionsPage;

```

Instalar a component do shadcn Data Table
npx shadcn@2.1.3 add table
npm i @tanstack/react-table@8.20.5

Dentro de ui, crie data-table.tsx

E importe Table de ./table
Em transactions, uma pasta _columms e nela o index.ts

Instalar o como
badge

criar um novo componente dentro da pasta transactions, _componentes e o arquivo type-badge.tsx
e colar o codigo que estava no transactions dentro do cell, fazendo isso estamos refatorando

criar um arquivo chamado .eslintignore
e colocar tailwind.config.ts

criar um componente add-transaction-button que vai ser reutilizada em dois lugares

para lidar com formulario
form do shadcn, react-hook-form e zos

para formatar os números:
npm i react-number-format@5.4.2

Criar uma server actions | é uma função
na pasta app criamos _actions, depois add-transaction e o arquivo index.ts

### Criar a navbar

Criando o arqivo navbar.tsx dentro de _components

validando se usario logado ou não
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }

Agora a parte de filtro de mês, saldo, investimento , receita e despesas

- pegar informações do banco de dados
- e criar um componente para renderizar os 4 campos

Criar um auto group com o nome (home), especia de pasta para organizar, mas não vai ser usada na rota
exemplo
(home)/transactions
<http://localhost:3000/transactions>

Dentro de (home), criaremos _components e o summary-cards.tsx e usaremos a lib card do shadcn

Vamos precisar de uma div para englobar os 4 componentes(saldo, investimento, receita e despesas)

### Criando o gráfico

É usado o chart do Shadcn
arquivos:
_componentes/transactions-pie-chart.tsx

Criado a pasta _data/get-dashboard/index.ts para ter em um unico lugar para chamar os dados do banco de dados e ser
importado pelos componentes
E criado o types.ts na mesma pasta

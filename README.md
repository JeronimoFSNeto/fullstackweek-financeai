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

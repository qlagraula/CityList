## Requirements

```
Node 18
PNPM
Docker
```

## Installation

```bash
# install the dependencies
pnpm install

# start the database
pnpm init
```

## Getting Started

First, run the development server:

```bash
# development
pnpm run start

# watch mode
pnpm run start:dev
```

## Technical choices

[TanStack Query](https://tanstack.com/query/latest) for powerful and easy server state management.
[PandaCSS](https://panda-css.com/) for typed css in js.
[Vite](https://vitejs.dev/) for performances and easy setup.
[PNPM](https://pnpm.io/fr/) for a monorepo, because it has better performance and uses less storage.

## Improvements

- End-to-end typesafety on GraphQL connection.
- Loading display when typing.
- Dockerize dev and prod environments

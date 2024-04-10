# electron-quasar-typesafe

型定義を適当にして開発したとしても、いい感じに型推測でtypesafeになることを目指しています。

electronがメインですが、spa、ssr (nuxt) も開始できます。

vite + electron + vue3 + quasar + trpc (json or formdata) + drizzle (SQLite)

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Project Setup

### Open Project

```bash
open proj.code-workspace
```

or

```bash
code app
```

### Start Postgres for Local Debug

in `./`

```bash
docker compose up pg
```

### Install

in `./app`

```bash
pnpm install
```

```bash
cp .env.example .env
```

### Development

in `./app`

#### Electron向け

```bash
pnpm electron:dev
```

#### Server & Client (SPA) 向け

```bash
pnpm spa:dev
```

#### Server & Client (SSR) 向け

```bash
pnpm ssr:dev
```

### Build App

in `./app`

```bash
# For windows
pnpm build:win

# For macOS
pnpm build:mac

# For Linux
pnpm build:linux
```

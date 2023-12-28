# electron-quasar-typesafe

型定義を適当にして開発したとしても、いい感じに型推測でtypesafeになることを目指しています。

electronがメインですが、spa、ssr (nuxt) も開始できます。

vite + electron + vue3 + quasar + trpc (json or formdata) + drizzle (SQLite)

An Electron application with Vue and TypeScript

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Project Setup

### Install

```bash
pnpm install
```

```bash
cp .env.example .env
```

### Development

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

### Build

```bash
# For windows
npm run build:win

# For macOS
npm run build:mac

# For Linux
npm run build:linux
```

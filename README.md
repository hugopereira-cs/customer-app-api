# Node.js TypeScript Boilerplate

Boilerplate para projetos Node.js com TypeScript.

## Características

- Projeto configurado como módulo ESM (`type: module`).
- TypeScript com alvo ES2024 e verificação estrita (`strict`).
- Execução em desenvolvimento com `tsx`.
- Compilação para distribuição com `tsdown`.
- Formatação e lint com Biome.
- Código-fonte localizado em `src`.

## Requisitos

- Node.js
- npm

## Instalação

```bash
npm install
```

## Scripts

| Comando               | Descrição                                                                  |
| --------------------- | -------------------------------------------------------------------------- |
| `npm run start:dev`   | Executa o servidor em desenvolvimento e carrega as variáveis de `.env`.    |
| `npm run start:watch` | Executa o servidor observando alterações e carrega as variáveis de `.env`. |
| `npm run dist`        | Compila o código de `src` para distribuição.                               |
| `npm run start:dist`  | Compila o projeto e executa `dist/src/server.js`.                          |
| `npm run typecheck`   | Verifica os tipos sem emitir arquivos.                                     |
| `npm run lint`        | Executa as verificações do Biome.                                          |
| `npm run format`      | Formata os arquivos com o Biome.                                           |

## Estrutura

```text
src/
└── server.ts
```

O arquivo `src/server.ts` é o ponto de entrada atual e imprime `Server is running...` no console.

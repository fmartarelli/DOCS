# DOCS - Central de ajuda do Maxflow

Projeto de documentação do sistema Maxflow, criado com **Docusaurus**, **TypeScript**, **Node.js** e **npm**.

Este guia foi feito para uma máquina nova, considerando que nada esteja instalado.

## 1. O que precisa instalar

Antes de rodar o projeto, instale:

1. **Node.js**
2. **npm**
3. **Visual Studio Code**
4. **Git** (recomendado para clonar e versionar o projeto)

## 2. Versões recomendadas

- **Node.js**: `20` ou superior
- **npm**: normalmente já vem junto com o Node.js

Este projeto exige:

```bash
node >= 20
```

## 3. Como instalar os programas

### Instalar Node.js

1. Acesse o site oficial do Node.js.
2. Baixe a versão **LTS**.
3. Execute o instalador.
4. Avance nas etapas padrão até concluir.

### Instalar Visual Studio Code

1. Baixe o instalador do Visual Studio Code.
2. Execute a instalação.
3. Ao finalizar, abra o VS Code.

### Instalar Git

1. Baixe o Git para Windows.
2. Execute o instalador.
3. Pode manter as opções padrão.

## 4. Como validar se a instalação funcionou

Abra o **Prompt de Comando**, **PowerShell** ou o terminal do **VS Code** e rode:

```bash
node -v
```

```bash
npm -v
```

```bash
git --version
```

Se os comandos retornarem a versão instalada, o ambiente está pronto.

## 5. Como obter o projeto

Se o projeto ainda não estiver na máquina, clone o repositório:

```bash
git clone <URL-DO-REPOSITORIO>
```

Depois entre na pasta do projeto:

```bash
cd DOCS
```

Se o projeto já estiver na máquina, apenas abra a pasta `DOCS`.

## 6. Como abrir no Visual Studio Code

Dentro da pasta do projeto, rode:

```bash
code .
```

Se o comando `code` não funcionar, abra o VS Code manualmente e depois use:

1. **Arquivo**
2. **Abrir Pasta**
3. Selecione a pasta `DOCS`

## 7. Como instalar as dependências do projeto

No terminal, dentro da pasta `DOCS`, rode:

```bash
npm install
```

Esse comando baixa todas as dependências necessárias do Docusaurus e do projeto.

## 8. Como rodar o projeto localmente

Depois da instalação das dependências, rode:

```bash
npm run start
```

Esse comando:

- inicia o servidor local
- compila a documentação
- abre o projeto no navegador
- atualiza automaticamente quando houver alterações nos arquivos

Em geral, o endereço local será:

```bash
http://localhost:3000
```

## 9. Como gerar a build de produção

Para validar se o projeto está pronto para publicação, rode:

```bash
npm run build
```

Se tudo estiver correto, a versão final será gerada na pasta:

```bash
build
```

## 10. Como visualizar a build gerada

Depois do build, você pode testar a versão final com:

```bash
npm run serve
```

## 11. Estrutura principal do projeto

Os pontos mais importantes do projeto são:

- `docs/`: páginas da documentação em Markdown e MDX
- `src/pages/`: páginas personalizadas, como a home
- `src/components/`: componentes visuais reutilizáveis
- `src/css/`: estilos globais
- `static/`: imagens, favicon, logos e arquivos públicos
- `docusaurus.config.ts`: configuração principal do site
- `sidebars.ts`: organização do menu lateral

## 12. Fluxo recomendado para edição

1. Abra o projeto no VS Code
2. Rode `npm install` se ainda não instalou as dependências
3. Rode `npm run start`
4. Edite os arquivos em `docs/`
5. Revise o resultado no navegador
6. Rode `npm run build` antes de publicar ou versionar

## 13. Comandos principais

### Instalar dependências

```bash
npm install
```

### Rodar o projeto em desenvolvimento

```bash
npm run start
```

### Gerar build

```bash
npm run build
```

### Servir a build gerada

```bash
npm run serve
```

### Limpar cache do Docusaurus

```bash
npm run clear
```

### Validar TypeScript

```bash
npm run typecheck
```

## 14. Problemas comuns

### `node` não é reconhecido

O Node.js não está instalado corretamente ou o terminal precisa ser fechado e aberto novamente.

### `npm` não é reconhecido

O npm não foi instalado junto com o Node.js ou o ambiente ainda não foi atualizado no terminal.

### `code` não é reconhecido

Abra o VS Code manualmente e use a opção **Abrir Pasta**.

### Erro ao rodar `npm install`

Confira se:

- o Node.js está na versão 20 ou superior
- a internet está funcionando
- o terminal está aberto dentro da pasta `DOCS`

### A porta 3000 já está em uso

Feche outro projeto que esteja usando essa porta ou finalize o processo antigo no terminal.

## 15. Resumo rápido

Se a máquina estiver pronta e você quiser só o essencial:

```bash
npm install
npm run start
```

Para validar antes de entregar:

```bash
npm run build
```

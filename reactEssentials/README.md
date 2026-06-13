# React Essentials

Projeto básico com React para aprender conceitos essenciais.

## 📋 Descrição

Este é um projeto inicial de React configurado manualmente, sem usar Create React Index ou ferramentas automáticas. Ideal para entender como React funciona desde o zero.

## 🚀 Passos Realizados

### 1. Estrutura Inicial
- Criada pasta `reactEssentials`
- Criado arquivo `index.html` com elemento `root`
- Criado arquivo `global.css` para estilos globais
- Criado arquivo `index.jsx` como componente principal
- Criado arquivo `README.md` para documentação
- Criado arquivo `LICENSE` com licença MIT

### 2. Configuração do Node.js
- Executado `npm init -y` para criar `package.json`
- Preenchidas propriedades básicas (nome, versão, descrição, autor, licença)

### 3. Dependências
- Instalado React e ReactDOM: `npm install react react-dom`
- Instalado Vite como bundler (flag `-D` == only dev): `npm install -D vite @vitejs/plugin-react`
- Configurar o Vite no pacote `package.json`:

```json
{
    "scripts": {
      "dev": "vite",
      "build": "vite build",
      "preview": "vite preview"
    }
}
```

### 3.1. Instalação do Chakra UI
Para adicionar o Chakra UI ao projeto:

```bash
npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

Em seguida, execute o comando para adicionar snippets do Chakra UI:

```bash
npx @chakra-ui/cli snippet add
```

Isso configura automaticamente os providers e temas necessários para o Chakra UI funcionar corretamente.

### 4. Scripts NPM
Configurados no `package.json`:
- `npm run dev` — inicia servidor de desenvolvimento
- `npm run build` — cria build otimizado para produção
- `npm run preview` — visualiza o build localmente

### 5. Renderização do React

O arquivo `index.jsx` renderiza o conteúdo desejado no elemento `root` envolvido pelo `Provider` customizado:

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "./src/components/ui/provider";
import Index from "./components/Index/Index";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <Index/>
    </Provider>
  </React.StrictMode>
);
```

**Observação:** O `Provider` customizado (localizado em `src/components/ui/provider.jsx`) encapsula o `ChakraProvider` e o `ColorModeProvider`, permitindo suporte a tema claro/escuro e acesso a todos os componentes do Chakra UI com estilos corretos.

### 6. Estrutura de Arquivos

```
reactEssentials/
├── index.jsx
├── global.css
├── index.html
├── package.json
├── LICENSE
├── README.md
├── vite.config.js
├── components/
│   └── Index/
│       └── Index.jsx
└── src/
    └── components/
        └── ui/
            ├── provider.jsx
            ├── color-mode.jsx
            ├── tooltip.jsx
            └── toaster.jsx
```

### 7. Componentes Criados

**`components/Index/Index.jsx`** — Componente principal da aplicação
- Utiliza hooks (`useState`) para gerenciar estado
- Renderiza componentes do Chakra UI (`AbsoluteCenter`, `Stack`, `Heading`, `Separator`, `Button`)
- Exemplo de interatividade com contador de cliques

**`src/components/ui/provider.jsx`** — Provider customizado
- Encapsula `ChakraProvider` com tema padrão
- Integra `ColorModeProvider` para suporte a tema claro/escuro

## ▶️ Executar o Projeto

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação abrirá em `http://localhost:5173`

## 🎯 Próximos Passos

- [ ] Criar componentes reutilizáveis
- [ ] Explorar mais hooks do React (useEffect, useContext, useReducer)
- [ ] Adicionar roteamento (React Router)
- [ ] Estruturar estado global (Zustand, Context API)
- [ ] Adicionar testes unitários (Vitest, Testing Library)
- [ ] Deployar a aplicação (Vercel, Netlify)

## 👤 Autor

**Guilherme Bigois**
- GitHub: [@bigois](https://github.com/bigois)
- LinkedIn: [Perfil](https://www.linkedin.com/in/bigois/)

## 📄 Licença

MIT License - veja o arquivo [LICENSE](./LICENSE) para mais detalhes


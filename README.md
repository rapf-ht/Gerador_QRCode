# Gerador de QRCode

Gerador de QRCode simples e funcional, desenvolvido como projeto de portfólio. O usuário digita um texto ou URL e o QRCode é gerado em tempo real, com opção de download da imagem.

## 🖥️ Tecnologias utilizadas

- [React 19](https://react.dev/) — biblioteca para construção de interfaces
- [Vite 7](https://vite.dev/) — bundler e ambiente de desenvolvimento
- [Tailwind CSS v4](https://tailwindcss.com/) — estilização via classes utilitárias
- [qrcode.react](https://github.com/zpao/qrcode.react) — geração do QRCode como componente React

## 🚀 Como rodar localmente

**Pré-requisitos:** Node.js instalado

```bash
# Clone o repositório
git clone https://github.com/rapf-ht/Gerador_QRCode.git

# Entre na pasta
cd Gerador_QRCode

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173` no navegador.

## ⚙️ Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a versão de produção na pasta `dist/` |
| `npm run preview` | Visualiza o build de produção localmente |
| `npm run lint` | Analisa o código com ESLint |

## ✨ Funcionalidades

- Geração de QRCode em tempo real
- Download do QRCode em `.png`

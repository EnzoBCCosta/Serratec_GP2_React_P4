# Serratec | Residência de Software
## GP2 — React (P4): Quiz Game

Um aplicativo mobile de perguntas e respostas desenvolvido em **React Native** com **TypeScript** e **Expo**, utilizando o React Navigation para fluxo de telas e Context API para gerenciamento do estado global do jogo.

---

## 🌐 APIs Utilizadas

* **Tryvia API** (Perguntas e Categorias)
    * `https://tryvia.ptr.red`
* **JSONPlaceholder** (Simulação do Ranking global)
    * `https://jsonplaceholder.typicode.com`

---

## 🎨 Interface e Visual

* O design e a identidade visual seguem exatamente as especificações propostas no mesmo lindo do **Figma da P2**.

---

## 📂 Arquitetura do Projeto

A estrutura de pastas foi modularizada para separar componentes visuais, lógica de negócios (hooks customizados) e chamadas de serviços de forma limpa:

```text
QuizApp/
├── index.ts                  ← Entry point (registerRootComponent)
├── App.tsx                   ← Renderiza apenas o componente <Routes />
├── app.json
├── package.json              
├── tsconfig.json
│
├── assets/
│   └── (Imagens, ícones, fontes)
│
└── src/
    ├── @types/
    │   └── navigation.ts     ← RootStackParamList (Tipagem das rotas)
    │
    ├── components/
    │   ├── Button/
    │   │   └── index.tsx
    │   ├── Card/
    │   │   └── index.tsx
    │   ├── Header/
    │   │   └── index.tsx
    │   ├── Loading/
    │   │   └── index.tsx
    │   └── ErrorMessage/
    │       └── index.tsx
    │
    ├── context/
    │   └── QuizContext.tsx   ← Estado global (useState + createContext + useContext)
    │
    ├── hooks/
    │   ├── useQuiz.ts        ← Re-exporta o hook nativo do contexto
    │   ├── useCategories.ts  ← Busca de categorias (useEffect + useState)
    │   └── useQuizGame.ts    ← Controle da partida (perguntas, pontuação, índice atual)
    │
    ├── pages/
    │   ├── Home/
    │   │   └── index.tsx
    │   ├── Categories/
    │   │   └── index.tsx     ← Listagem de categorias (GET)
    │   ├── Quiz/
    │   │   └── index.tsx     ← Tela da partida (GET perguntas + fluxo de respostas)
    │   ├── Result/
    │   │   └── index.tsx     ← Fim de jogo e envio de pontuação (POST)
    │   └── Ranking/
    │       └── index.tsx     ← Classificação geral de pontuações (GET)
    │
    ├── services/
    │   ├── api.ts            ← Instâncias do Axios + Tipagem centralizada (Pergunta, Categoria)
    │   ├── triviaService.ts  ← Métodos getCategorias() e getPerguntas()
    │   └── rankingService.ts ← Métodos postScore() e getScores()
    │
    └── utils/
        ├── functions/
        │   ├── decodeHtml.ts ← Remove e decodifica entidades HTML vindas da API
        │   └── shuffleArray.ts← Embaralha as alternativas das perguntas
        └── routes/
            └── routes.tsx    ← Configuração do NavigationContainer + Stack.Navigator + QuizProvider

# Carrossel - HTML + TailwindCSS + JavaScript

Um carrossel simples e responsivo desenvolvido com **HTML, TailwindCSS e JavaScript**.  
Projeto criado para **estudos de frontend**, mas que pode ser facilmente adaptado e reutilizado em diferentes aplicações.

---

## 🚀 Demonstração
👉 (https://ilaycarvalho.github.io/tailwind-carousel/)

---

## 📌 Funcionalidades
- Layout responsivo 📱💻  
- Navegação entre slides com botões **Próximo** e **Anterior**  
- Rolagem suave dos cards  
- Fácil de personalizar 

---

## 🛠️ Tecnologias Utilizadas
- **HTML5**
- **CSS3** com [TailwindCSS](https://tailwindcss.com/)  
- **JavaScript**  

---

## 📖 Documentação das Classes Tailwind

## 🔹 Estrutura Geral

| Classe   | O que faz |
|----------|-----------|
| `p-4`    | Padding `1rem` em todos os lados |
| `sm:p-8` | Padding aumenta para `2rem` em telas ≥ 640px |

---

## 🔹 Container Principal

| Classe        | O que faz |
|---------------|-----------|
| `flex`        | Ativa `display: flex`, itens lado a lado |
| `items-center`| Centraliza verticalmente no eixo Y |

---

## 🔹 Botões de Navegação

| Classe             | O que faz |
|--------------------|-----------|
| `bg-purple-500`    | Fundo roxo médio |
| `text-white`       | Texto/ícone branco |
| `p-3`              | Padding interno `0.75rem` |
| `rounded-full`     | Bordas 100% arredondadas (círculo) |
| `shadow-lg`        | Sombra grande |
| `hover:bg-purple-600` | Fundo roxo mais escuro no hover |
| `h-12`             | Altura fixa `3rem` |
| `w-6`              | Largura `1.5rem` (SVG) |
| `h-6`              | Altura `1.5rem` (SVG) |

---

## 🔹 Container do Carrossel

| Classe      | O que faz |
|-------------|-----------|
| `flex`      | Exibe os cards lado a lado |
| `space-x-6` | Espaço horizontal de `1.5rem` entre itens |
| `p-2`       | Padding `0.5rem` |
| `w-full`    | Ocupa 100% da largura |

---

## 🔹 Card (Item do Carrossel)

| Classe            | O que faz |
|-------------------|-----------|
| `bg-white`        | Fundo branco |
| `p-6`             | Padding interno `1.5rem` |
| `rounded-xl`      | Bordas arredondadas grandes (`0.75rem`) |
| `shadow-lg`       | Sombra grande |
| `border-b-4`      | Borda inferior de `4px` |
| `border-purple-500` | Cor da borda roxa |
| `flex flex-col`   | Layout em coluna |
| `justify-between` | Distribui elementos igualmente (topo/meio/base) |
| `gap-1`           | Espaçamento vertical `0.25rem` |
| `min-w-[300px]`   | Largura mínima `300px` |
| `h-[250px]`       | Altura fixa `250px` |

---

## 🔹 Cabeçalho do Card

| Classe        | O que faz |
|---------------|-----------|
| `flex`        | Ícone + texto lado a lado |
| `items-center`| Centraliza verticalmente |
| `gap-2`       | Espaçamento `0.5rem` entre os itens |

---

## 🔹 Texto

| Classe          | O que faz |
|-----------------|-----------|
| `text-purple-800` | Texto roxo escuro |
| `font-bold`       | Negrito |
| `text-[10px]`     | Fonte `10px` |
| `text-[13px]`     | Fonte `13px` |
| `text-gray-500`   | Texto cinza médio |

---

## 🔹 Avaliação (Estrelas)

| Classe         | O que faz |
|----------------|-----------|
| `flex`         | Estrelas lado a lado |
| `text-yellow-500` | Estrelas amarelas |
| `text-1xl`     | Fonte maior (`1.25rem`) |

---

## 📦 Como usar
Clone o repositório:
```bash
git clone https://github.com/IlayCarvalho/tailwind-carousel.git

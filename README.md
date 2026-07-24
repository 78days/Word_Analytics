# Word Analytics

A React app that analyzes text in real time — word count, character count, and remaining characters for Instagram and Facebook posts (2,200 each).


## Features

- Live word and character counting as you type
- Instagram / Facebook character limits with a red highlight when over limit
- Blocks `<script>` tags and shows a warning message
- Responsive layout for smaller screens

## Getting started

**Requirements:** Node.js 18+

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Scripts

| Command           | Description                                      |
| ----------------- | ------------------------------------------------ |
| `npm run dev`     | Start the Vite development server                |
| `npm run build`   | Create a production build in `dist/`             |
| `npm run preview` | Preview the production build locally             |
| `npm run lint`    | Run ESLint                                       |
| `npm run biome`   | Format and lint with Biome (`check --write`)     |

## Project structure

```
src/
├── App.jsx              # Root layout (Header, Container, Footer)
├── App.css              # App styles
├── main.jsx             # React entry point
├── index.css            # Base styles
├── header.jsx           # Title + background
├── backgroundimage.jsx  # Hero background layer
├── container.jsx        # Text state + derived stats
├── Textarea.jsx         # Controlled textarea + script warning
├── warning.jsx          # Warning message UI
├── stats.jsx            # Words / characters / platform limits
└── footer.jsx           # Footer copy
```

## How it works

1. **`Container`** owns the text state and derives stats (words, characters, platform leftovers).
2. **`Textarea`** is controlled: it updates that state on change and strips `<script>` if pasted/typed.
3. **`Stats`** receives the counts as props and renders four stat cards. Negative remaining counts use the `--limit` style (red).

Character limits are hard-coded as **2200** for both Instagram and Facebook.

## Tech stack

- [React 19](https://react.dev)
- [Vite 8](https://vite.dev)
- ESLint + Biome for linting/formatting
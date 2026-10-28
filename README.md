# Word Analytics

Word Analytics is a lightweight React app that helps users track and optimize text in real time for social media posts. It calculates total words, total characters, and remaining characters for platform-specific limits, making it useful for crafting Instagram and Facebook captions without exceeding the allowed length.

Built with React and Vite, the app offers instant feedback as you type and highlights when a post exceeds the limit.

## Live Demo

- Production: https://word-analytics-gilt.vercel.app
- Repository: https://github.com/78days/Word_Analytics

## Features

- Real-time word and character counting while typing
- Instagram and Facebook character limit tracking
- Visual warning when a post exceeds the allowed limit
- Remaining-character indicators for quick post optimization
- Script-tag blocking with a warning message to reduce unsafe input
- Responsive layout for desktop and smaller screens

## Tech Stack

- React 19
- Vite 8
- JavaScript
- CSS
- Vercel for deployment

## Getting Started

### Requirements

- Node.js 18+

### Install and run

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal (usually http://localhost:5173).

## Available Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run biome
```

## Project Structure

```text
src/
├── App.jsx
├── App.css
├── main.jsx
├── index.css
├── header.jsx
├── backgroundimage.jsx
├── container.jsx
├── Textarea.jsx
├── warning.jsx
├── stats.jsx
├── footer.jsx
└── assets/
```

## How It Works

The app keeps text in state and derives the live stats from it. As the user types, the app updates the word count, total character count, and remaining count for each platform. If a user exceeds the limit, the relevant stat card is highlighted to signal the issue.

## Deployment

This project is configured for Vite on Vercel:

```bash
npm run build
vercel --prod
```

## Purpose

This project is designed to help creators, marketers, and everyday users quickly check whether a post fits within social media limits before publishing.

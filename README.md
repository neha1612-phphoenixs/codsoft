# Task 2 - AI Tic-Tac-Toe (Unbeatable AI using Minimax & Alpha-Beta Pruning)

A professional, interactive, and modern AI Tic-Tac-Toe web application built with a luxurious maroon dashboard styling. Featuring mathematical optimal AI play, live algorithm reasoning metrics, decision heatmaps, and achievement unlocks.

[![GitHub license](https://img.shields.ly/badge/License-MIT-maroon.svg)](https://github.com/neha1612-phphoenixs/codsoft/blob/main/LICENSE)
[![Vite](https://img.shields.ly/badge/Vite-6.x-646CFF.svg?logo=vite)](https://vitejs.dev/)
[![React](https://img.shields.ly/badge/React-19.x-61DAFB.svg?logo=react)](https://react.dev/)
[![TailwindCSS](https://img.shields.ly/badge/TailwindCSS-4.x-38B2AC.svg?logo=tailwindcss)](https://tailwindcss.com/)

---

## 🎨 Premium Maroon Theme Visuals

* **Primary Background:** `#111111` (Matte Dark Black)
* **Card Container:** `#1B1B1B` (Luxury Slate Glassmorphism)
* **Primary Accents:** `#800000` (Classic Crimson Maroon) & `#C04040` (Bright Maroon Highlights)
* **Visual Effects:** Smooth SVG animated tokens, micro-bounce transitions using `motion`, floating canvas particle background, and responsive winner confetti bursts.

---

## 🚀 Key Features

1. **Unbeatable AI (Minimax & Alpha-Beta Pruning):**
   * Computes the complete recursion tree instantly.
   * Discards sub-optimal paths to decrease calculation times by up to **97%**.
   * Absolute mathematical perfection (never loses on "Impossible" mode).

2. **Custom Matching Options:**
   * **Single Player (PvE):** Battle the AI.
   * **Local 2-Player (PvP):** Pass-and-play matches.
   * **Tournament (EvE):** Watch two computer agents compete dynamically.
   * **Symbol Customizer:** Choose from Classic (❌/⭕), Fire & Water (🔥/💧), Cosmic (☀️/🌙), or Royalty (👑/💎).

3. **AI Decision Analysis Panel:**
   * **Heatmap Overlay:** Toggleable board tint highlighting optimal, safe, or highly dangerous cells.
   * **Stats telemetry:** Nodes explored, recursion depth checked, and execution times in milliseconds.
   * **Natural Explanations:** Real-time sentences explaining *why* the AI selected a specific cell.

4. **Career Statistics & Accomplishments:**
   * Local storage data persistence tracking win percentages and win streaks.
   * Custom SVG pie charts.
   * Unlock achievements like *"Impenetrable Defense"* and *"Tactical Blitz"*.

5. **Step-by-Step Match Replay:**
   * Re-watch recorded match moves with timeline controls (prev, pause, auto-play, next).
   * Export match history records directly as standard `.CSV` files.

---

## 📂 Project Structure

```
Task-2/
├── index.html                   # HTML Entry Point
├── package.json                 # Dependency Management
├── vite.config.ts               # Vite configuration with Tailwind CSS v4
├── src/
│   ├── App.tsx                  # Tab Navigation & Local Storage State Handler
│   ├── main.tsx                 # React App Bootstrapper
│   ├── index.css                # Global styles with Tailwind imports
│   ├── types.ts                 # Type definitions & structures
│   ├── components/
│   │   ├── LandingPage.tsx      # Hero display section & tutorial navigators
│   │   ├── GameDashboard.tsx    # Live Arena Board, Heatmap, Settings Drawer & Replays
│   │   ├── AIExplanationPanel.tsx # Theoretical guides & Traversal Simulators
│   │   ├── StatsDashboard.tsx   # SVG dashboards, Career logs & CSV exporter
│   │   └── ParticleBackground.tsx # Canvas floating geometric particle animator
│   └── utils/
│       ├── ai.ts                # Minimax core, Alpha-Beta algorithms, and heuristic calculators
│       └── audio.ts             # Web Audio API Synthesizer (Zero asset dependancies!)
└── docs/
    └── Algorithm.md             # In-depth math behind Alpha-Beta Minimax
```

---

## 🔧 Installation & Run Instructions

Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

1. **Clone the repository:**
   ```bash
   git clone https://github.com/neha1612-phphoenixs/codsoft.git
   cd codsoft
   ```
2. **Install all workspace packages:**
   ```bash
   npm install
   ```
3. **Launch the high-performance local development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:3000`.

4. **Compile production-optimized artifacts:**
   ```bash
   npm run build
   ```

---

## 🧠 The Mathematics Behind the AI

The impossible AI leverages the **Minimax Algorithm** augmented with **Alpha-Beta Pruning**.

For any board state $S$, the evaluation function behaves as:
$$V(S) = \begin{cases} +10 - \text{depth} & \text{if Maximizer Wins} \\ \text{depth} - 10 & \text{if Minimizer Wins} \\ 0 & \text{if Draw} \end{cases}$$

### Alpha-Beta Optimization Rule:
$$ \beta \le \alpha $$
If the current candidate minimizer value $\beta$ falls below or equals our assured maximizer value $\alpha$, we skip evaluating subsequent branch options (pruning). This reduces the search space significantly, ensuring fast calculation times.

Explore further algorithm notes inside [`/docs/Algorithm.md`](./docs/Algorithm.md).

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

Developed as part of the **CodSoft Internship Program**.
GitHub Repository: https://github.com/neha1612-phphoenixs/codsoft

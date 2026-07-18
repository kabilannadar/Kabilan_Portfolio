# 📂 Personal Portfolio | Kabilan Rethinaswamy

<p align="center">
  <img src="https://ik.imagekit.io/kabi10/favicon_portfolio.png" alt="Logo" width="80" height="80" />
</p>

<h3 align="center">Kabilan Rethinaswamy</h3>
<p align="center">
  <strong>Python & Backend Cloud Developer</strong>
</p>

<p align="center">
  <a href="https://github.com/kabilannadar">
    <img src="https://img.shields.io/github/followers/kabilannadar?style=flat-square&logo=github&color=b05f30" alt="GitHub Followers" />
  </a>
  <img src="https://img.shields.io/badge/React-19.0-61dafb?style=flat-square&logo=react" alt="React 19" />
  <img src="https://img.shields.io/badge/Vite-8.0-646CFF?style=flat-square&logo=vite" alt="Vite 8" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License MIT" />
</p>

<p align="center">
  <a href="https://portfolio.r-r-kabilan0435.workers.dev" target="_blank">
    <img src="https://img.shields.io/badge/Live_Website-Visit_Portfolio-b05f30?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Live Website" />
  </a>
</p>

---

## 📖 Overview

A premium, highly interactive personal portfolio showcasing developer experience, projects, and backend competencies. The design features a unique **notebook rule-lined paper layout** with elegant draw-on margins, smooth page-reloading animations, custom cursor mechanics, and responsive CSS styling.

## 🚀 Key Features

- **Notebook Margin Design:** Custom SVG rules simulating classic binder notebook paper.
- **Animated Page Transitions:** Re-mounting pages on route transitions for crisp CSS entry/exit animations.
- **Interactive Projects Grid:** Showcases projects like _ExpenseTracker_ with direct source (GitHub) and live demo (Vercel) links.
- **Custom Interactive Cursor:** Premium trailing cursor implementation with dynamic hover states.
- **Tailwind & CSS Integration:** Engineered using custom CSS design systems paired with Tailwind utility classes.
- **Fully Responsive:** Mobile-optimized layout eliminating tap-highlight overlay boxes and securing smooth touch response.

---

## 🛠️ Tech Stack

- **Core Framework:** React 19, React Router DOM v7
- **Styling System:** Vanilla CSS, Tailwind CSS
- **Build System:** Vite
- **Hosting:** Vercel / CDN-hosted assets (ImageKit.io)

---

## 📂 Project Structure

```text
├── public/                     # Public static assets (PDF, SVGs, favicon)
├── src/
│   ├── assets/                 # Local image & icon SVGs
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── components/             # Reusable UI parts & alternative layouts
│   │   │                       # [Active layout components]:
│   │   ├── Icons.jsx           # SVG icon components (GitHub, LinkedIn, LinkIcon, etc.)
│   │   ├── LeftPanel.jsx       # Fixed profile sidebar navigation used in pages
│   │   ├── PageShell.jsx       # Route transition & layout wrapper
│   │   ├── CustomCursor.jsx    # Interactive trailing mouse cursor logic
│   │   │                       # [Alternative/Landing page components]:
│   │   ├── Navbar.jsx          # Mobile & desktop top navigation bar
│   │   ├── Hero.jsx            # Interactive intro banner section with avatar
│   │   ├── About.jsx           # Section layout for biography details
│   │   ├── Experience.jsx      # Work timeline presentation
│   │   ├── Projects.jsx        # Alternative Tailwind-based projects grid
│   │   ├── Skills.jsx          # Categorized skills grid
│   │   ├── Contact.jsx         # Contact form / connection section
│   │   ├── Footer.jsx          # Copyright and branding footer
│   │   └── ParticlesBackground.jsx # Canvas particles background layout
│   ├── hooks/                  # Custom React hooks
│   │   └── useAnimations.js    # Scroll reveal (AOS) helper for animations
│   ├── pages/                  # Active notebook-style page routes
│   │   ├── Home.jsx            # Main bio and landing hub
│   │   ├── About.jsx           # Detail of technical skills & competencies
│   │   ├── Projects.jsx        # Projects card layout with Live Link integration
│   │   └── Experience.jsx      # Notebook sheet timeline of work history
│   ├── App.jsx                 # React Router routing setup & main frame lines
│   ├── App.css                 # Custom page animations and notebook layouts CSS
│   ├── index.css               # Global typography, color tokens, and scrollbar CSS
│   └── main.jsx                # React DOM render entrypoint
├── eslint.config.js            # Linter rules configuration
├── index.html                  # Core HTML skeleton
├── package.json                # Project dependencies and scripting rules
└── vite.config.js              # Vite compiler & local bundler settings
```

---

## 💻 Getting Started

Follow these steps to set up and run the portfolio locally:

### 1. Clone the Repository

```bash
git clone https://github.com/kabilannadar/Kabilan_Portfolio.git
cd Kabilan_Portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

### 4. Build for Production

```bash
npm run build
```

---

## 📬 Contact & Connect

- **Email:** [r.r.kabilan0435@gmail.com](mailto:r.r.kabilan0435@gmail.com)
- **Phone:** [+91-9022879379](tel:+919022879379)
- **LinkedIn:** [Kabilan Nadar](https://linkedin.com/in/kabilan-nadar-9738a823a)
- **GitHub:** [@kabilannadar](https://github.com/kabilannadar)

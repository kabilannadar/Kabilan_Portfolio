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

I am a **Backend & Cloud Developer** based in Chennai, India, specializing in building resilient backend architectures, automation integrations, and AI-powered systems. My development focuses on API reliability, serverless patterns, and cloud workflows on AWS.

This repository hosts my **Personal Portfolio Website**—a premium, interactive web experience showcasing my developer background, competencies, and engineering projects.

---

## 🛠️ Tech Stack & Skills

### 💻 Core Programming & Web
- **Languages:** Python, JavaScript, SQL, Bash
- **Web Frameworks:** FastAPI, Flask, Django, React.js, Node.js, Next.js
- **APIs & Real-Time:** REST APIs, Socket.io / WebSockets, Event Streaming (SSE), GitHub Webhooks

### ☁️ Cloud & Systems
- **AWS Infrastructure:** EC2, S3, VPC, IAM, CloudWatch
- **DevOps & Containers:** Docker, Docker Compose, Git & GitHub
- **Deployment & Tooling:** Railway, Render, Vercel, Alembic
- **Systems:** Linux, Cron Jobs

### 🧠 Database & AI
- **Databases:** PostgreSQL, Neon DB, SQLite, MongoDB, MySQL, SQLAlchemy
- **AI & RAG:** Retrieval-Augmented Generation (RAG), ChromaDB, Hugging Face, Sentence Transformers, LLMs (Groq), Prompt Engineering

---

## 🚀 Featured Projects

### 🤖 [MoneyCommandAI Assistant](https://github.com/kabilannadar/MoneyCommandAI-Assistant)
*Conversational finance support assistant integrated as the AI support layer.*
- Built an intent-driven finance helper using FastAPI, Groq LLM, and prompt engineering.
- Created a **RAG pipeline** using ChromaDB vector database and Hugging Face sentence embeddings.
- Developed a **Socket.IO** real-time support queue allowing users to escalate to live human support agents.

### 💳 [ExpenseTracker – Personal Finance Platform](https://github.com/kabilannadar/ExpenseTracker)
*Full-stack web application tracking personal cash flows, budgets, and automation alerts.*
- Managed backend routing on React + FastAPI using Neon DB for multi-tenant budgeting.
- Built a **Telegram bot** that allows logging transactions via natural language messages (e.g. `Coffee 80 upi`) synced live.
- Enabled automatic notification reminders via Telegram/email for EMIs, goals, and budgets.
- Engineered a **Progressive Web App (PWA)** with offline service workers for mobile installation.

### 🔗 [GitHub → JIRA Auto-Ticketing System](https://github.com/kabilannadar/flask_jira)
*Automated DevOps ticketing connector between VCS and agile workspaces.*
- Deployed a Flask REST API on **AWS EC2** with role-based IAM configurations.
- Integrated GitHub Webhook events with the JIRA API to synchronize tickets in real-time.
- Automated system auditing using **AWS CloudWatch** logs and dashboard metrics.

### 🎮 [EnGame – Full Stack Gaming Platform](https://github.com/kabilannadar)
- Co-developed a multi-member game library portal using React.js, Next.js, and Node.js.
- Implemented user registration and authorization schemes using **OAuth** and MongoDB.

---

## 🎨 Portfolio Website Features

The portfolio website itself is built using a custom **notebook rule-lined paper layout** with a premium hand-drawn feel.
- **Notebook Paper Grid:** Custom CSS rule-lined sheets simulating classic notebook paper.
- **Animated Route Re-mounts:** Clean CSS entry/exit animations on page transitions.
- **Trailing Cursor:** Dynamic hover trailing custom cursor.
- **Responsive Layout:** Mobile-friendly grid avoiding touch highlighting overlays.

---

## 📂 Project Structure

```text
├── public/                     # Public static assets (PDF, SVGs, favicon)
├── src/
│   ├── assets/                 # Local image & icon SVGs
│   ├── components/             # Reusable UI parts & alternative layouts
│   │   ├── Icons.jsx           # SVG icon components (GitHub, LinkedIn, LinkIcon, etc.)
│   │   ├── LeftPanel.jsx       # Fixed profile sidebar navigation used in pages
│   │   ├── PageShell.jsx       # Route transition & layout wrapper
│   │   ├── CustomCursor.jsx    # Interactive trailing mouse cursor logic
│   │   ├── Navbar.jsx          # Mobile & desktop top navigation bar
│   │   ├── Hero.jsx            # Interactive intro banner section with avatar
│   │   ├── About.jsx           # Section layout for biography details
│   │   ├── Experience.jsx      # Work timeline presentation
│   │   ├── Projects.jsx        # Alternative Tailwind-based projects grid
│   │   ├── Skills.jsx          # Categorized skills grid
│   │   ├── Contact.jsx         # Contact form / connection section
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

# Jay Lee - Software Engineering Portfolio

A modern, responsive portfolio website built with **React 19**, **TypeScript**, and the **Cloudscape Design System**.

## 🚀 Tech Stack

- **Framework**: [React 19](https://react.dev/) (Native SEO support)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Design System**: [Cloudscape](https://cloudscape.design/) (AWS UI)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Routing**: [React Router v7](https://reactrouter.com/)

## ✨ Features

- **Interactive Dashboard**: Real-time style system metrics, event logs, and resource utilization widgets.
- **Projects Showcase**: Filterable and searchable project list with detailed views.
- **Experience Timeline**: Detailed changelog of professional history (AWS, Amazon Prime Air, etc.).
- **SEO Optimized**: Uses React 19 native `<title>` and `<meta>` tag hoisting for zero-overhead SEO.
- **Responsive Layout**: Hybrid navigation (Top & Side) that adapts to all screen sizes.

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/jaylee1021/jaylee-portfolio.git
   cd jaylee-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📂 Project Structure

```
src/
├── components/       # Reusable UI components (SEO, EventLog, Layout, etc.)
├── data/            # Static data files (projects.ts)
├── pages/           # Route components (Home, Projects, Experience, etc.)
├── assets/          # Images and static assets
├── App.tsx          # Main application router and layout wrapper
└── main.tsx         # Entry point
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

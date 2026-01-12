# Streaming Markdown Parser

This project implements a **streaming markdown parser** that processes markdown input **token by token** and renders the output incrementally in the browser.

The parser supports:
- Inline code using single backticks (`inline code`)
- Code blocks using triple backticks (```)

The goal of this assignment is to demonstrate **state-based parsing** while handling **streamed input**, similar to how tools like ChatGPT render content progressively.

---

## 📁 Project Structure
    Assignment/
    ├── index.html
    ├── src/
    │ └── MarkdownParser.ts
    ├── package.json
    ├── package-lock.json
    ├── tsconfig.json
    └── README.md


---

## 🧠 Key Idea

Markdown tokens arrive **incrementally**, not as a complete string.  
The parser maintains internal state to correctly detect and render markdown syntax even when tokens are split across multiple inputs.

The implementation uses a **state-machine approach** to track:
- Inline code state
- Code block state
- Backtick buffering across tokens

---

## ✨ Features Implemented

- Streaming / incremental rendering
- Inline code parsing using single backticks
- Code block parsing using triple backticks
- Safe handling of split tokens
- UI trigger using a **Stream** button

---

## 🚀 How to Run the Project

### 1️⃣ Prerequisites

Ensure the following are installed:
- Node.js (v18 or higher recommended)
- npm

Check versions using:
```bash
node -v
npm -v

2️⃣ Install Dependencies

From the project root directory, run:

npm install


This installs:

TypeScript

Vite (development server)

3️⃣ Start the Development Server

Run:

npm run dev


You should see output similar to:

VITE v6.x ready
Local: http://localhost:5173/

4️⃣ Open in Browser

Open your browser and navigate to:

http://localhost:5173


Click the Stream button to begin streaming markdown tokens.
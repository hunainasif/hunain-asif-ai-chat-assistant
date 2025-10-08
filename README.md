# 🤖 AI Assistant

An advanced **AI-powered assistant** built with **Next.js**, **LangChain**, **OpenAI**, and **Pinecone**, capable of understanding queries, analyzing uploaded documents, and providing intelligent, context-aware responses in real time.

---

## 🧠 Tech Stack

| Category             | Technology / Library                        | Version / Notes      |
| -------------------- | ------------------------------------------- | -------------------- |
| **Framework**        | Next.js                                     | 15.5.2               |
| **Language**         | TypeScript                                  | ^5                   |
| **State Management** | Zustand                                     | ^5.0.8               |
| **Database**         | MongoDB                                     | Cloud-hosted / Local |
| **ODM**              | Mongoose                                    | ^8.19.1              |
| **LLM Provider**     | OpenAI                                      | ^5.21.0              |
| **LLM Toolkit**      | LangChain                                   | ^0.3.77 (core)       |
| **Vector Database**  | Pinecone                                    | ^6.1.2               |
| **UI Components**    | TailwindCSS, Radix UI, Lucide React, Sonner | Latest               |
| **Form Handling**    | React Hook Form + Zod                       | ^7.64.0 / ^4.1.11    |
| **Data Fetching**    | React Query                                 | ^5.90.2              |
| **Authentication**   | NextAuth.js                                 | 5.0.0-beta.29        |
| **File Handling**    | pdf-parse, react-dropzone                   | ^1.1.1 / ^14.3.8     |
| **Animations**       | Motion (Framer Motion compatible)           | ^12.23.22            |

---

## ⚙️ Features

- 📁 Upload and process PDF documents with automatic text extraction
- 🧩 Chunk text and embed vectors using **OpenAI embeddings**
- 🧠 Store and retrieve vectors from **Pinecone** for semantic search
- 💬 Chat interface built with **Next.js App Router** and **LangChain**
- 🔐 Authentication with **NextAuth.js**
- 🎨 Fully responsive UI using **TailwindCSS** and **Radix UI**
- 🌗 Dark/light mode with **next-themes**
- ⚡ Optimized with **React Query** and **Zustand** for state and caching

---

## 🛠️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/hunainasif/hunain-asif-ai-chat-assistant.git
cd hunain-asif-ai-chat-assistant
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Configure environment variables

```bash
OPENAI_API_KEY=
PINECONE_API_KEY=
PINECONE_INDEX=
ADMIN_EMAIL=
ADMIN_PASSWORD=
DATABASE_URL=
AUTH_SECRET=
```

### 4. Run the development server

```bash
pnpm dev

```

### 4.🌐 Live Demo & Repository

🔗 Live App: https://hunain-asif-ai-chat-assistant.vercel.app/

💻 GitHub Repo: https://github.com/hunainasif/hunain-asif-ai-chat-assistant

### 5. 👨‍💻 Author

Hunain Asif
Full Stack Developer | Software Engineer | MERN Stack Developer

📧 Email: hunainasif960@gmail.com

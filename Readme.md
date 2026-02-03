# Next.js Basics

## What is Next.js?

**Next.js** is a **React framework** for building **full-stack, production-ready web applications**.

While **React** is mainly used for building user interfaces (the view layer), it is not fully feasible on its own to create a complete production-ready application. As a developer, you need to make decisions about features like routing, data fetching, and rendering.

Next.js uses React for building user interfaces and provides additional features that help you build scalable and optimized applications.

---

## Why Not Just React?

React is great for building UI components, but:

- It focuses only on the **view layer**
- Additional packages are required for routing and data fetching
- Configuration can become complex for production-ready apps

Next.js solves these problems by providing everything out of the box with clear conventions.

---

## Why is Next.js Worth Learning?

Next.js simplifies the process of building **production-ready web applications**.

### Key Features of Next.js

### 1. Routing

- Uses **file-based routing**
- No need to install extra routing libraries
- Routes are automatically created based on file structure

### 2. API Routes

- Build **frontend and backend** in the same application
- Backend logic can be written using API routes
- Seamless integration between frontend and backend code

### 3. Rendering

- Supports **Client-Side Rendering (CSR)** and **Server-Side Rendering (SSR)**
- Improves performance and **Search Engine Optimization (SEO)**

### 4. Data Fetching

- Built-in support for **async / await**
- Makes data fetching efficient and straightforward

### 5. Styling

- Supports **Tailwind CSS**
- Also supports CSS Modules and other styling options

### 6. Optimization

- Automatic optimization for:
  - Images
  - Fonts
  - Scripts
- Improves **Core Web Vitals**
- Enhances overall user experience

### 7. Development & Production Build System

- Minimal configuration required
- Focus on writing code instead of managing complex setups
- Optimized builds for production

---

## Prerequisites

Before learning Next.js, you should have basic knowledge of:

- HTML
- CSS
- JavaScript
- React fundamentals

---

## Conclusion

Next.js is a powerful React framework that helps developers build **fast, scalable, and production-ready applications**. It reduces complexity by handling routing, data fetching, and optimization automatically.

---

## Setting Up the Development Environment ⚙️

### Requirements

Before setting up a Next.js project, make sure you have the following installed:

- **Node.js** (LTS version recommended)
- A **text editor** (VS Code is recommended)

---

### Creating a New Next.js App

1. Open **VS Code**
2. Open the **terminal** (`Ctrl + `` or Terminal → New Terminal)
3. Run the following command:

```bash
npx create-next-app@latest
```

### Project Setup Options

After running the command, you will be asked several questions. Below is an example setup:

What is your project named?
→ my-first-app

Would you like to use the recommended Next.js defaults?
→ No, customize settings

Would you like to use TypeScript?
→ Yes / No

Which linter would you like to use?
→ ESLint

Would you like to use React Compiler?
→ Yes / No

Would you like to use Tailwind CSS?
→ Yes / No

Would you like your code inside a `src/` directory?
→ Yes / No

Would you like to use App Router? (recommended)
→ Yes / No

Would you like to customize the import alias (`@/*` by default)?
→ Yes / No

### Project Creation

Once all options are selected, Next.js will create your project:

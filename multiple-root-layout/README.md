# Layouts, Route Groups, and Metadata in Next.js

Next.js provides a **flexible layout system** and powerful metadata APIs to organize your pages and control how your content is displayed and indexed.

---

# Different Layouts for Different Routes

Sometimes you **don’t want the same header and footer** on all pages.
Example: `login`, `register`, `forgot-password` pages.

Solution:

- Create a **marketing layout** for public pages (with header/footer)
- Create an **auth layout** for authentication routes (without header/footer)

---

## Marketing Layout Example

```tsx id="e0y9ex"
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header style={{ backgroundColor: "lightblue", padding: "1rem" }}>
          Header of Marketing
        </header>
        {children}
        <footer style={{ backgroundColor: "ghostwhite", padding: "1rem" }}>
          Footer Marketing
        </footer>
      </body>
    </html>
  );
}
```

---

## Auth Layout Example

```tsx id="7jtp2x"
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            backgroundColor: "greenyellow",
            padding: "1rem",
            color: "black",
          }}
        >
          Header for Auth Directory
        </header>
        {children}
        <footer
          style={{
            backgroundColor: "greenyellow",
            padding: "1rem",
            color: "black",
          }}
        >
          Footer for Auth Pages
        </footer>
      </body>
    </html>
  );
}
```

---

## Minimal Layout (No Header/Footer)

```tsx id="2gx5k8"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Layout without Header/Footer",
  description: "Example of layout without header and footer",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
```

---

# Route Groups

Route groups allow you to **organize routes logically** without changing the URL.

Example: Authentication pages

```
app/(auth)/login
app/(auth)/register
app/(auth)/forgot-password
```

URL structure remains:

```
/login
/register
/forgot-password
```

---

# Metadata in Next.js

Metadata defines **how your pages appear in search engines and social sharing**.

- Can be exported from **layout.tsx** or **page.tsx**
- Layout metadata applies to **all pages within that layout**
- Page metadata overrides layout metadata for that page
- Metadata is merged **top-down** from root to specific page

---

## Static Metadata Example

**Layout.tsx Metadata**

```tsx id="xk1b6r"
export const metadata: Metadata = {
  title: "Root Layout Title",
  description: "Description for all pages in this layout",
};
```

**Page.tsx Metadata**

```tsx id="v7h2fr"
export const metadata = {
  title: "Page Specific Title",
  description: "Page-specific description",
};

export default function Page() {
  return <div>This page demonstrates page-based metadata</div>;
}
```

---

## Dynamic Metadata Example

Dynamic metadata is useful when **metadata depends on route parameters or external data**, e.g., a product page.

```tsx id="qj9n2c"
import { Metadata } from "next";

type Props = { params: Promise<{ id: string }> };

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).id;
  return {
    title: `Product ${id} | Next.js Demo`,
    description: `Description for product ${id}`,
  };
};

export default async function ProductDetails({ params }: Props) {
  const id = (await params).id;
  return (
    <div>
      <h1>Product Details: {id}</h1>
    </div>
  );
}
```

> ⚠️ Metadata **does not work in client components**, so use a **server component** to generate dynamic metadata and call client components inside it if needed.

---

# Title Metadata

The primary purpose of **title metadata** is to define the **document title**.

- Can be a string or object
- Helps with **SEO** and **social sharing**

---

This approach allows:

- Different layouts for marketing pages vs auth pages
- Page-specific metadata for SEO
- Dynamic metadata for personalized or route-dependent content

---

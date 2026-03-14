import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
          this is header for auth directory
        </header>
        {children}

        <footer
          style={{
            backgroundColor: "greenyellow",
            padding: "1rem",
            color: "black",
          }}
        >
          this is my footer for login
        </footer>
      </body>
    </html>
  );
}

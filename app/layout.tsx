import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from 'next-themes';
import Header from './components/Header';

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen bg-white dark:bg-slate-800 text-slate-800 dark:text-white	`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

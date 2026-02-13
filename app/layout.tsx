import type { Metadata } from "next";
import { Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { ClientLayout } from "./ClientLayout";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GLBoard",
  description: "Plataforma de gerenciamento de jogos",
};

interface AppLayoutProps {
  children: ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
  onLogout: () => void;
  isLoggedIn: boolean;
  onLogin?: () => void;
  onSignup?: () => void;
  user?: { name: string; email: string };
}

export default function AppLayout({ 
  children, 
  currentPage, 
  onNavigate, 
  onLogout, 
  isLoggedIn, 
  onLogin, 
  onSignup, 
  user 
}: AppLayoutProps) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable} ${geistMono.variable}`}>
        <ClientLayout
          currentPage={currentPage}
          onNavigate={onNavigate}
          onLogout={onLogout}
          isLoggedIn={isLoggedIn}
          onLogin={onLogin}
          onSignup={onSignup}
          user={user}
        >
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}


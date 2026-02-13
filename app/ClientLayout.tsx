"use client";

import { ReactNode, useState } from "react";
import { AlertDialog, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogCancel, AlertDialogAction } from "@radix-ui/react-alert-dialog";
import { AlertDialogHeader, AlertDialogFooter } from "@/ui/alert-dialog";
import { SharedHeader } from "@/components/SharedHeader";
import { AppFooter } from "@/components/AppFooter";
import { ToastContainer } from "react-toastify";

interface ClientLayoutProps {
  children: ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
  onLogout: () => void;
  isLoggedIn: boolean;
  onLogin?: () => void;
  onSignup?: () => void;
  user?: { name: string; email: string };
}

export function ClientLayout({ 
  children, 
  currentPage, 
  onNavigate, 
  onLogout, 
  isLoggedIn, 
  onLogin, 
  onSignup, 
  user 
}: ClientLayoutProps) {
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const handleLogoutClick = () => {
    setLogoutDialogOpen(true);
  };

  const confirmLogout = () => {
    setLogoutDialogOpen(false);
    onLogout();
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Public Pages Navbar (SharedHeader) */}
      {!isLoggedIn && (
        <SharedHeader 
          onLogin={onLogin || (() => {})} 
          onNavigate={onNavigate}
          isLoggedIn={isLoggedIn}
          currentPage={currentPage}
        />
      )}

      {/* Logged-in Pages Navbar */}
      {isLoggedIn && (
        <SharedHeader 
          onLogin={() => {}} 
          onNavigate={onNavigate}
          isLoggedIn={isLoggedIn}
          userName={user?.name.split(' ')[0] || 'Usuário'}
          currentPage={currentPage}
        />
      )}

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <AppFooter />

      {/* Logout Confirmation Dialog */}
      <AlertDialog open={logoutDialogOpen} onOpenChange={setLogoutDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Deseja realmente sair do GLBoard?</AlertDialogTitle>
            <AlertDialogDescription>
              Você será redirecionado para a página inicial e precisará fazer login novamente para acessar seus jogos.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={confirmLogout} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Sim, sair
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      
      {/* Toast Container */}
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

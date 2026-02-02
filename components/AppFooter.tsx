import {
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";
// @ts-ignore
import Image from "next/image";

export function AppFooter() {
  return (
    <footer className="bg-[#166095] text-white py-12 px-6 sm:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-8">
          {/* Left Column: Location & Social */}
          <div className="flex-1 space-y-8 w-full lg:w-auto">
            <div className="space-y-4">
              <h3
                className="font-bold text-2xl"
                style={{
                  fontFamily:
                    "Arial Rounded MT Bold, sans-serif",
                }}
              >
                Localização
              </h3>
              <div className="space-y-1 text-sm sm:text-base text-gray-100 font-medium font-['Poppins',sans-serif]">
                <p>Escola Superior De Tecnologia - EST/UEA</p>
                <p>
                  Av. Darcy Vargas, 1.200, Parque Dez de
                  Novembro,
                </p>
                <p>Manaus - AM, 69050-020</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Youtube className="w-6 h-6" />
                </a>
              </div>

              <button className="px-6 py-2 border border-white rounded-full text-sm font-medium hover:bg-white/10 transition-colors">
                Saiba mais
              </button>
            </div>
          </div>

          {/* Divider (Desktop) */}
          <div className="hidden lg:block w-px h-64 bg-white/20 self-center" />

          {/* Right Column: Logos Grid */}
          <div className="flex-1 w-full lg:w-auto flex items-center justify-center">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-16 items-center justify-items-center">
              {/* FAPEAM */}
              <div className="w-[180px]">
             
              </div>

              {/* PROPESP */}
             

              {/* ThinkTEd */}
              <div className="w-[140px]">
              
              </div>

              {/* Nexus */}
             
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 text-center text-sm font-medium text-white/80 font-['Poppins',sans-serif]">
          <p>
            © 2024 GAMETED. Site desenvolvido pela equipe
            ThinkTEd
          </p>
        </div>
      </div>
    </footer>
  );
}

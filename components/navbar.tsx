"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold text-white">
            Casetomonial
          </Link>
          <div className="flex items-center gap-4">
            <Link 
              href="/generate" 
              className={`text-gray-300 hover:text-white transition-colors ${
                pathname === '/generate' ? 'text-white' : ''
              }`}
            >
              <Button variant="ghost">
                Create Presentation
              </Button>
            </Link>
            <Button variant="ghost" className="text-gray-300 hover:text-white">
              Sign In
            </Button>
            <Button className="bg-white text-black hover:bg-white/90">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
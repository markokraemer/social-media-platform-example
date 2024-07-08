import { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Search, Menu, Home, User, Users } from 'lucide-react';

export const Layout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link href="/">
                <h1 className="text-3xl font-bold text-blue-600 mr-8">SocialConnect</h1>
              </Link>
              <div className="hidden md:flex items-center">
                <Search className="w-5 h-5 text-gray-400 absolute ml-3" />
                <Input 
                  type="text" 
                  placeholder="Search..." 
                  className="pl-10 w-64"
                />
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost">
                  <Home className="w-5 h-5 mr-2" />
                  Home
                </Button>
              </Link>
              <Link href="/profile/1">
                <Button variant="ghost">
                  <User className="w-5 h-5 mr-2" />
                  Profile
                </Button>
              </Link>
              <Button variant="ghost">
                <Users className="w-5 h-5 mr-2" />
                Friends
              </Button>
              <Button variant="ghost">
                <Bell className="w-5 h-5" />
              </Button>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </nav>
            <Button variant="ghost" className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <Menu className="w-6 h-6" />
            </Button>
          </div>
          {isMobileMenuOpen && (
            <nav className="mt-4 md:hidden">
              <Link href="/">
                <Button variant="ghost" className="w-full text-left mb-2">
                  <Home className="w-5 h-5 mr-2" />
                  Home
                </Button>
              </Link>
              <Link href="/profile/1">
                <Button variant="ghost" className="w-full text-left mb-2">
                  <User className="w-5 h-5 mr-2" />
                  Profile
                </Button>
              </Link>
              <Button variant="ghost" className="w-full text-left mb-2">
                <Users className="w-5 h-5 mr-2" />
                Friends
              </Button>
              <Button variant="ghost" className="w-full text-left mb-2">
                <Bell className="w-5 h-5 mr-2" />
                Notifications
              </Button>
              <div className="flex items-center mt-2">
                <Search className="w-5 h-5 text-gray-400 absolute ml-3" />
                <Input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-full pl-10"
                />
              </div>
            </nav>
          )}
        </div>
      </header>

      <main className="max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
        {children}
      </main>

      <footer className="bg-white mt-12 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
          <p>&copy; 2024 SocialConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
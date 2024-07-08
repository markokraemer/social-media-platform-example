import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Search, Menu } from 'lucide-react';

export const Layout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold text-blue-600 mr-8">SocialConnect</h1>
              <div className="hidden md:block">
                <Input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-64"
                  startAdornment={<Search className="w-4 h-4 text-gray-400" />}
                />
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-4">
              <Button variant="ghost">Home</Button>
              <Button variant="ghost">Profile</Button>
              <Button variant="ghost">Friends</Button>
              <Button variant="ghost"><Bell className="w-5 h-5" /></Button>
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
              <Button variant="ghost" className="w-full text-left mb-2">Home</Button>
              <Button variant="ghost" className="w-full text-left mb-2">Profile</Button>
              <Button variant="ghost" className="w-full text-left mb-2">Friends</Button>
              <Button variant="ghost" className="w-full text-left mb-2">Notifications</Button>
              <Input 
                type="text" 
                placeholder="Search..." 
                className="w-full mt-2"
                startAdornment={<Search className="w-4 h-4 text-gray-400" />}
              />
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
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Search, Menu, Home, User, Users } from 'lucide-react';
import { Notifications } from "@/components/Notifications";

export const Layout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  // Mock notifications data
  const mockNotifications = [
    { id: 1, content: "John Doe liked your post", read: false },
    { id: 2, content: "You have a new friend request", read: false },
    { id: 3, content: "Your friend Jane shared a new post", read: true },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link href="/">
                <h1 className="text-3xl font-bold text-blue-600 mr-8">SocialConnect</h1>
              </Link>
              <form onSubmit={handleSearch} className="hidden md:flex items-center">
                <div className="relative">
                  <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <Input 
                    type="text" 
                    placeholder="Search..." 
                    className="pl-10 w-64"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button type="submit" className="ml-2">Search</Button>
              </form>
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
              <Link href="/friends">
                <Button variant="ghost">
                  <Users className="w-5 h-5 mr-2" />
                  Friends
                </Button>
              </Link>
              <Notifications initialNotifications={mockNotifications} />
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
              <Link href="/friends">
                <Button variant="ghost" className="w-full text-left mb-2">
                  <Users className="w-5 h-5 mr-2" />
                  Friends
                </Button>
              </Link>
              <form onSubmit={handleSearch} className="flex items-center mt-2">
                <div className="relative flex-grow">
                  <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <Input 
                    type="text" 
                    placeholder="Search..." 
                    className="w-full pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button type="submit" className="ml-2">Search</Button>
              </form>
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
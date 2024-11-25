import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, LogOut } from 'lucide-react';
import ThemeToggle from './global/ThemeToggle';
import { toast } from 'react-hot-toast';

enum UserRole {
  USER = 'USER',
  ORGANIZER = 'ORGANIZER',
  ADMIN = 'ADMIN',
}

const userUrls = {
  [UserRole.USER]: [
    { label: 'My Bookings', href: '/bookings' },
    { label: 'My Profile', href: '/profile' },
  ],
  [UserRole.ORGANIZER]: [
    { label: 'Events Management', href: '/org/events' },
    { label: 'Venue Management', href: '/org/venues' },
    { label: 'Analytics', href: '/org/analytics' },
    { label: 'Reviews', href: '/org/reviews' },
    { label: 'Organization', href: '/org/organization' },
    { label: 'My Profile', href: '/profile' },
  ],
  [UserRole.ADMIN]: [
    { label: 'Admin Dashboard', href: '/admin' },
    { label: 'Manage Events', href: '/admin/events' },
    { label: 'Manage Users', href: '/admin/users' },
    { label: 'Manage Bookings', href: '/admin/bookings' },
  ],
};

export default function Header() {
  const navigate = useNavigate();
  const isLoggedIn = () => true;
  const user = { name: 'John Doe', role: 'USER' };
  const logout = () => {
    console.log('logout');

  };

  const handleSignOut = async () => {
    try {
      await logout();
      toast.success("Signed out successfully");
      navigate('/');
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Failed to sign out. Please try again.");
    }
  };

  const renderUserMenu = () => {
    if (!isLoggedIn() || !user) return null;

    const userLinks = userUrls[user.role as UserRole] || [];

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span className="hidden md:inline">{user.name}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {userLinks.map((link, index) => (
            <DropdownMenuItem key={index} asChild>
              <Link to={link.href}>{link.label}</Link>
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuItem onSelect={handleSignOut}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };

  return (
    <header className="bg-background border-b md:px-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">
            EventHQ
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="text-foreground hover:text-primary">
              Home
            </Link>
            <Link to="/events" className="text-foreground hover:text-primary">
              Events
            </Link>
            <Link to="/venues" className="text-foreground hover:text-primary">
              Venues
            </Link>
          </nav>
          <form className="hidden md:flex">
            <Input
              type="search"
              placeholder="Search events..."
              className="w-[200px] lg:w-[300px]"
            />
          </form>
          <div className="flex items-center space-x-4">
            {!isLoggedIn() ? (
              <div className="space-x-2">
                <Link to="/login">
                  <Button variant="outline">Login</Button>
                </Link>
                <Link to="/register">
                  <Button>Register</Button>
                </Link>
              </div>
            ) : (
              renderUserMenu()
            )}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}


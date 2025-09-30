import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import {
  Menu,
  Home,
  Wrench,
  DollarSign,
  FileText,
  Info,
  Phone,
  User,
  LogOut,
  Sparkles,
  X,
} from "lucide-react";
import { useLocation, Link } from "react-router-dom";

export default function Navbar() {
  const { user, isAuthenticated, isLoading, logout } = useAuth();
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Tools", href: "/tools", icon: Wrench },
    { name: "Pricing", href: "/pricing", icon: DollarSign },
    { name: "Blog", href: "/blog", icon: FileText },
    { name: "About", href: "/about", icon: Info },
    { name: "Contact", href: "/contact", icon: Phone },
  ];

  // Get active link based on current route
  const getActiveLink = () => {
    const currentPath = location.pathname;
    const activeLink = navLinks.find((link) => {
      if (link.href === "/") {
        return currentPath === "/";
      }
      return currentPath.startsWith(link.href);
    });
    return activeLink?.name || "Home";
  };

  const activeLink = getActiveLink();

  // ✅ SIMPLIFIED conditional rendering - Fix the issue
  const renderAuthSection = () => {
    // Show loading spinner while checking auth status
    if (isLoading) {
      return (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 border-2 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
          <span className="text-sm text-gray-500">Loading...</span>
        </div>
      );
    }

    // Show user profile if authenticated
    if (isAuthenticated && user) {
      return (
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 bg-gradient-to-r from-gray-100 to-gray-50 rounded-2xl px-4 py-2 border border-gray-200/50 shadow-sm hover:shadow-md transition-shadow duration-300">
            <Avatar className="h-9 w-9 border-2 border-white shadow-md">
              <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white text-sm font-bold">
                {user.name ? user.name[0].toUpperCase() : "U"}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-gray-800">
                {user.name}
              </span>
              <span className="text-xs text-gray-500 capitalize">
                {user.role}
              </span>
            </div>
          </div>
          <Button
            variant="outline"
            onClick={logout}
            className="border-gray-300 cursor-pointer hover:border-red-300 hover:bg-red-50 hover:text-red-600 flex items-center gap-2"
          >
            <LogOut className="h-4 w-4" />
            <span>Logout</span>
          </Button>
        </div>
      );
    }

    // Show login/register buttons if not authenticated
    return (
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          asChild
          className="text-gray-600 hover:text-purple-600 font-medium group relative overflow-hidden"
        >
          <Link to="/login" className="flex items-center gap-2 px-4 py-2">
            <User className="h-4 w-4 transition-transform group-hover:scale-110" />
            <span>Login</span>
          </Link>
        </Button>
        <Button
          asChild
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-600 hover:to-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden text-white"
        >
          <Link to="/register" className="flex items-center gap-2 px-6 py-2">
            <Sparkles className="h-4 w-4 transition-transform group-hover:scale-110" />
            <span>Get Started</span>
          </Link>
        </Button>
      </div>
    );
  };

  // ✅ SIMPLIFIED mobile auth section
  const renderMobileAuthSection = () => {
    if (isLoading) {
      return (
        <div className="flex justify-center py-4">
          <div className="w-6 h-6 border-2 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
        </div>
      );
    }

    if (isAuthenticated && user) {
      return (
        <div className="space-y-4">
          <div className="flex items-center gap-4 px-4 py-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200/50">
            <Avatar className="h-12 w-12 border-2 border-white shadow-md">
              <AvatarFallback className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-lg">
                {user.name ? user.name[0].toUpperCase() : "U"}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col flex-1">
              <span className="text-base font-semibold text-gray-800">
                {user.name}
              </span>
              <span className="text-sm text-gray-500 capitalize">
                {user.role}
              </span>
            </div>
          </div>
          <SheetClose asChild>
            <Button
              variant="destructive"
              onClick={logout}
              className="w-full justify-center gap-3 py-3 text-base font-semibold"
            >
              <LogOut className="h-5 w-5" />
              Logout
            </Button>
          </SheetClose>
        </div>
      );
    }

    return (
      <div className="flex flex-col gap-3">
        <SheetClose asChild>
          <Button
            variant="outline"
            asChild
            className="justify-center gap-3 py-3 text-base font-semibold border-gray-300 hover:border-purple-300 hover:text-purple-600"
          >
            <Link to="/login" className="flex items-center gap-3">
              <User className="h-5 w-5" />
              Login
            </Link>
          </Button>
        </SheetClose>
        <SheetClose asChild>
          <Button
            asChild
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:to-blue-600 justify-center gap-3 py-3 text-base font-semibold shadow-lg text-white"
          >
            <Link to="/register" className="flex items-center gap-3">
              <Sparkles className="h-5 w-5" />
              Get Started
            </Link>
          </Button>
        </SheetClose>
      </div>
    );
  };

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-200/75 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent">
              ConvertCraft
            </span>
            <span className="text-xs text-gray-500 font-medium">
              Professional Tools
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-1 bg-gray-100/80 rounded-2xl p-1.5 backdrop-blur-sm border border-white/50">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                const isActive = activeLink === link.name;

                return (
                  <NavigationMenuItem key={link.name}>
                    <Button
                      variant={isActive ? "default" : "ghost"}
                      asChild
                      className={`flex items-center gap-2 px-7 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 group relative h-auto
                ${
                  isActive
                    ? "text-white bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg shadow-purple-500/25 "
                    : "text-gray-600 hover:text-purple-600 hover:bg-white/80 hover:shadow-md"
                }`}
                    >
                      <Link to={link.href}>
                        <IconComponent
                          className={`h-4 w-4 transition-transform duration-300 ${
                            isActive
                              ? "text-white scale-110"
                              : "group-hover:scale-110"
                          }`}
                        />
                        <span className="relative z-10 whitespace-nowrap">
                          {link.name}
                        </span>

                        {/* Active indicator */}
                        {isActive && (
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 -z-10"></div>
                        )}
                      </Link>
                    </Button>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Desktop Auth Section - SIMPLIFIED */}
        <div className="hidden lg:flex items-center gap-4">
          {renderAuthSection()}
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden flex items-center justify-center w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl hover:from-gray-200 hover:to-gray-100 transition-all duration-300 shadow-sm hover:shadow-md border border-gray-200/50"
            >
              <Menu className="h-5 w-5 text-gray-700" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-[320px] sm:w-[380px] p-0 bg-white/95 backdrop-blur-md border-r border-gray-200/75"
          >
            {/* Hidden accessibility titles */}
            <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
            <SheetDescription className="sr-only">
              Navigation menu for ConvertCraft website
            </SheetDescription>

            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200/50">
                <Link to="/" className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      ConvertCraft
                    </span>
                    <span className="text-xs text-gray-500 font-medium">
                      Professional Tools
                    </span>
                  </div>
                </Link>
                <SheetClose asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-10 h-10 bg-gray-100 rounded-xl hover:bg-gray-200"
                  >
                    <X className="h-5 w-5 text-gray-700" />
                  </Button>
                </SheetClose>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 p-6 space-y-2">
                {navLinks.map((link) => {
                  const IconComponent = link.icon;
                  const isActive = activeLink === link.name;

                  return (
                    <SheetClose asChild key={link.name}>
                      <Link
                        to={link.href}
                        className={`flex items-center gap-4 px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 group relative
                          ${
                            isActive
                              ? "text-white bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg"
                              : "text-gray-700 hover:text-purple-600 hover:bg-gray-50/80"
                          }`}
                      >
                        <IconComponent
                          className={`h-5 w-5 transition-transform duration-300 ${
                            isActive
                              ? "text-white scale-110"
                              : "group-hover:scale-110"
                          }`}
                        />
                        <span className="relative z-10">{link.name}</span>

                        {isActive && (
                          <div className="absolute right-4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        )}
                      </Link>
                    </SheetClose>
                  );
                })}
              </nav>

              {/* Auth Section - SIMPLIFIED */}
              <div className="p-6 border-t border-gray-200/50">
                {renderMobileAuthSection()}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

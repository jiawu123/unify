import { Home, Search, BookOpen, Users, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BottomNav = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        <Link
          to="/"
          className={`flex flex-col items-center ${
            isActive("/") ? "text-primary" : "text-gray-600"
          }`}
        >
          <Home className="w-6 h-6" />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link
          to="/search"
          className={`flex flex-col items-center ${
            isActive("/search") ? "text-primary" : "text-gray-600"
          }`}
        >
          <Search className="w-6 h-6" />
          <span className="text-xs mt-1">Search</span>
        </Link>
        <Link
          to="/courses"
          className={`flex flex-col items-center ${
            isActive("/courses") ? "text-primary" : "text-gray-600"
          }`}
        >
          <BookOpen className="w-6 h-6" />
          <span className="text-xs mt-1">Courses</span>
        </Link>
        <Link
          to="/groups"
          className={`flex flex-col items-center ${
            isActive("/groups") ? "text-primary" : "text-gray-600"
          }`}
        >
          <Users className="w-6 h-6" />
          <span className="text-xs mt-1">Groups</span>
        </Link>
        <Link
          to="/menu"
          className={`flex flex-col items-center ${
            isActive("/menu") ? "text-primary" : "text-gray-600"
          }`}
        >
          <Menu className="w-6 h-6" />
          <span className="text-xs mt-1">Menu</span>
        </Link>
      </div>
    </nav>
  );
};

export default BottomNav;
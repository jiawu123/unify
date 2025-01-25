import { Home, Plus, Users, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BottomNav = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4 shadow-lg">
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
          to="/groups"
          className={`flex flex-col items-center ${
            isActive("/groups") ? "text-primary" : "text-gray-600"
          }`}
        >
          <Users className="w-6 h-6" />
          <span className="text-xs mt-1">Groups</span>
        </Link>
        <Link
          to="/new-post"
          className="flex flex-col items-center -mt-8 relative"
        >
          <div className="bg-primary rounded-full p-4 shadow-lg">
            <Plus className="w-6 h-6 text-white" />
          </div>
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
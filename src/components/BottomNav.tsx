import { Home, MessageCircle, Plus, Bookmark, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BottomNav = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4 shadow-lg">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        <Link
          to="/"
          className={`flex flex-col items-center transition-transform hover:scale-110 ${
            isActive("/") ? "text-primary" : "text-gray-600"
          }`}
        >
          <Home className="w-6 h-6" />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link
          to="/messages"
          className={`flex flex-col items-center transition-transform hover:scale-110 ${
            isActive("/messages") ? "text-primary" : "text-gray-600"
          }`}
        >
          <MessageCircle className="w-6 h-6" />
          <span className="text-xs mt-1">Messages</span>
        </Link>
        <Link
          to="/new-post"
          className="flex flex-col items-center -mt-8 relative transition-transform hover:scale-110"
        >
          <div className="bg-primary rounded-full p-4 shadow-lg hover:bg-primary/90">
            <Plus className="w-6 h-6 text-white" />
          </div>
        </Link>
        <Link
          to="/saved"
          className={`flex flex-col items-center transition-transform hover:scale-110 ${
            isActive("/saved") ? "text-primary" : "text-gray-600"
          }`}
        >
          <Bookmark className="w-6 h-6" />
          <span className="text-xs mt-1">Saved</span>
        </Link>
        <Link
          to="/profile"
          className={`flex flex-col items-center transition-transform hover:scale-110 ${
            isActive("/profile") ? "text-primary" : "text-gray-600"
          }`}
        >
          <User className="w-6 h-6" />
          <span className="text-xs mt-1">Profile</span>
        </Link>
      </div>
    </nav>
  );
};

export default BottomNav;
import { ArrowLeft, Search, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Notifications = () => {
  const navigate = useNavigate();

  const notifications = [
    {
      id: 1,
      type: "reply",
      user: "Alex Chen",
      avatar: "/placeholder.svg",
      content: "replied to your post about CSE 142",
      timestamp: "2h ago",
      read: false,
      link: "/post/1",
    },
    {
      id: 2,
      type: "question",
      user: "Sarah Johnson",
      avatar: "/placeholder.svg",
      content: "asked about your experience in ENGL 131",
      timestamp: "5h ago",
      read: false,
      link: "/course/2",
    },
    {
      id: 3,
      type: "mention",
      user: "Mike Wilson",
      avatar: "/placeholder.svg",
      content: "mentioned you in a discussion about Programming Fundamentals",
      timestamp: "1d ago",
      read: true,
      link: "/post/3",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-primary text-white py-4 px-4">
        <div className="flex items-center gap-4 mb-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="text-white hover:bg-primary/90"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search notifications..."
                className="w-full py-2 px-4 pr-10 rounded-full text-sm text-gray-900 focus:outline-none"
              />
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-primary/90"
          >
            <Bell className="h-6 w-6" />
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 rounded-lg bg-white shadow-sm border-l-4 ${
                notification.read ? "border-gray-200" : "border-primary"
              }`}
              onClick={() => navigate(notification.link)}
            >
              <div className="flex items-start gap-3">
                <Avatar>
                  <AvatarImage src={notification.avatar} alt={notification.user} />
                  <AvatarFallback>{notification.user[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="text-sm">
                    <span className="font-semibold">{notification.user}</span>{" "}
                    {notification.content}
                  </p>
                  <span className="text-xs text-gray-500">
                    {notification.timestamp}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Notifications;
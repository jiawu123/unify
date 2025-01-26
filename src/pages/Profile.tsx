import { ArrowLeft, Bell, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import BottomNav from "@/components/BottomNav";

const Profile = () => {
  const navigate = useNavigate();

  const coursesTaken = [
    { code: "INFO 200", id: 1 },
    { code: "CSE 142", id: 2 },
  ];

  const postHistory = [
    {
      id: 1,
      course: "INFO 200",
      date: "1/25/2025",
      content: "I thought this class was well organized and it was easy to receive help from TAs through the class Discord.",
      likes: 4,
    },
    {
      id: 2,
      course: "CSE 142",
      date: "9/30/2024",
      content: "This class was challenging and fun at the same time. Learned a lot of programming skills through group projects and assignments.",
      likes: 4,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-primary text-white py-6 px-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate(-1)}
              className="text-white hover:bg-primary/90"
            >
              <ArrowLeft className="h-6 w-6" />
            </Button>
            <h1 className="text-2xl font-bold">Unify</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/notifications")}
              className="text-white hover:bg-primary/90"
            >
              <Bell className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/settings")}
              className="text-white hover:bg-primary/90"
            >
              <Settings className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Profile Section */}
      <div className="container mx-auto px-4 py-6">
        <div className="relative mb-8">
          <div className="flex flex-col items-center pt-8">
            <Avatar className="h-24 w-24 mb-4">
              <AvatarFallback className="text-2xl">JY</AvatarFallback>
            </Avatar>
            <h2 className="text-2xl font-bold mb-1">Jingyi</h2>
            <p className="text-gray-600">Sophomore · Computer Science</p>
          </div>
        </div>

        {/* Courses Taken */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">Courses Taken</h3>
          <div className="flex flex-wrap gap-3">
            {coursesTaken.map((course) => (
              <div
                key={course.id}
                className="bg-gray-100 px-6 py-3 rounded-full text-gray-800 font-medium shadow-sm"
              >
                {course.code}
              </div>
            ))}
            <Button
              variant="outline"
              className="rounded-full px-6"
              onClick={() => {}}
            >
              View more
            </Button>
          </div>
        </div>

        {/* Post History */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">Post History</h3>
            <Button variant="ghost" className="text-gray-600">
              list by time
            </Button>
          </div>
          <div className="space-y-4">
            {postHistory.map((post) => (
              <div
                key={post.id}
                className="bg-white p-4 rounded-lg shadow-sm border"
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="font-medium text-primary">{post.course}</span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <p className="text-gray-800 mb-2">{post.content}</p>
                <div className="flex justify-end">
                  <span className="text-gray-600">+{post.likes}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Profile;
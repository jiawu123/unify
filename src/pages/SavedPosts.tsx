import { useState } from "react";
import { Bell, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import PostCard from "@/components/PostCard";
import { useNavigate } from "react-router-dom";
import BottomNav from "@/components/BottomNav";

const SavedPosts = () => {
  const navigate = useNavigate();
  const [savedPosts] = useState([
    {
      title: "Introduction to Computer Science",
      content: "A comprehensive overview of CS fundamentals and programming concepts...",
      author: "Prof. Smith",
      authorCredibility: 95,
      likes: 234,
      comments: 45,
      tags: ["Computer Science", "Programming", "Beginner"],
      timestamp: "2 days ago",
      type: "course" as const,
    },
    {
      title: "Best Study Methods for STEM Subjects",
      content: "Effective study techniques specifically tailored for STEM subjects...",
      author: "LearningExpert",
      authorCredibility: 88,
      likes: 156,
      comments: 32,
      tags: ["Study Tips", "STEM", "Academic Success"],
      timestamp: "1 week ago",
      type: "general" as const,
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-primary text-white py-6 px-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate(-1)}
              className="text-white"
            >
              <ArrowLeft className="h-6 w-6" />
            </Button>
            <h1 className="text-2xl font-bold">Unify</h1>
          </div>
          <Button variant="ghost" size="icon" className="text-white">
            <Bell className="h-6 w-6" />
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold">Saved Posts</h2>
          <p className="text-gray-600">Your collection of saved posts and resources</p>
        </div>

        <div className="space-y-4">
          {savedPosts.length > 0 ? (
            savedPosts.map((post, index) => (
              <PostCard key={index} {...post} />
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">No saved posts yet</p>
            </div>
          )}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default SavedPosts;
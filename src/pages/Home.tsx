import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import BottomNav from "@/components/BottomNav";
import PostCard from "@/components/PostCard";

const Home = () => {
  const dummyPosts = [
    {
      id: 1,
      title: "CS 142 Review - Great Intro to Programming",
      content: "Just finished this course and wanted to share my experience...",
      author: "TechStudent2024",
      credibilityScore: 95,
      upvotes: 42,
      category: "Course Review",
      timestamp: "2h ago",
    },
    {
      id: 2,
      title: "Professor Smith's Teaching Style",
      content: "If you're taking MATH 301 next quarter...",
      author: "MathWhiz",
      credibilityScore: 88,
      upvotes: 31,
      category: "Professor Review",
      timestamp: "4h ago",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto p-4 pb-20">
        <div className="flex items-center gap-2 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search courses, professors..."
              className="pl-10"
            />
          </div>
          <Link to="/create">
            <Button size="icon">
              <Plus className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="space-y-4">
          {dummyPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Home;
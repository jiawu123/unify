import { useState } from "react";
import { Search, TrendingUp, Sparkles } from "lucide-react";
import CourseCard from "../components/CourseCard";
import PostCard from "../components/PostCard";
import BottomNav from "../components/BottomNav";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const featuredCourses = [
    {
      code: "CSE 142",
      title: "Computer Programming I",
      professor: "Kevin Lin",
      rating: 4.5,
      students: 324,
      likes: 89,
      tags: ["Programming", "Beginner Friendly"],
    },
    {
      code: "ENGL 131",
      title: "Composition: Exposition",
      professor: "Sarah Johnson",
      rating: 4.2,
      students: 156,
      likes: 45,
      tags: ["Writing", "Required"],
    },
  ];

  const trendingPosts = [
    {
      title: "CSE 142 Study Group Formation",
      content: "Looking for students interested in forming a study group for CSE 142. We'll meet twice a week to work on programming assignments and prepare for exams.",
      author: "TechStudent",
      authorCredibility: 85,
      likes: 45,
      comments: 23,
      tags: ["Study Group", "CSE 142", "Programming"],
      timestamp: "2h ago",
      type: "course" as const,
    },
    {
      title: "Professor Johnson's Teaching Style",
      content: "Just finished ENGL 131 with Prof. Johnson. Her teaching style is very engaging and she provides detailed feedback on essays. Highly recommend!",
      author: "WritingPro",
      authorCredibility: 92,
      likes: 67,
      comments: 15,
      tags: ["Professor Review", "ENGL 131"],
      timestamp: "5h ago",
      type: "professor" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-primary text-white py-6 px-4">
        <h1 className="text-2xl font-bold mb-4">CourseCompass</h1>
        <div className="relative flex gap-2">
          <Input
            type="text"
            placeholder="Search courses, professors, or topics..."
            className="w-full bg-white text-gray-900 placeholder-gray-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button variant="secondary" size="icon">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="text-primary h-5 w-5" />
            <h2 className="text-xl font-semibold">Recommended Courses</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featuredCourses.map((course) => (
              <CourseCard key={course.code} {...course} />
            ))}
          </div>
        </section>

        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="text-primary h-5 w-5" />
            <h2 className="text-xl font-semibold">Trending Posts</h2>
          </div>
          <div className="space-y-4">
            {trendingPosts.map((post, index) => (
              <PostCard key={index} {...post} />
            ))}
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
};

export default Index;
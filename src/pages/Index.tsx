import { useState } from "react";
import { Search, TrendingUp, ThumbsUp, MessageSquare } from "lucide-react";
import CourseCard from "../components/CourseCard";
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
    {
      code: "MATH 124",
      title: "Calculus with Analytic Geometry I",
      professor: "Michael Chen",
      rating: 4.0,
      students: 245,
      likes: 67,
      tags: ["Math", "STEM"],
    },
  ];

  const trendingPosts = [
    {
      title: "Best CS courses for beginners?",
      author: "TechStudent",
      likes: 45,
      comments: 23,
      tags: ["Computer Science", "Advice"],
    },
    {
      title: "Study group for MATH 124",
      author: "MathWhiz",
      likes: 32,
      comments: 15,
      tags: ["Math", "Study Group"],
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
            <TrendingUp className="text-primary h-5 w-5" />
            <h2 className="text-xl font-semibold">Trending Posts</h2>
          </div>
          <div className="space-y-4">
            {trendingPosts.map((post, index) => (
              <Card key={index} className="p-4">
                <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <span>Posted by {post.author}</span>
                </div>
                <div className="flex gap-2 mb-3">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 text-gray-600 text-sm">
                  <div className="flex items-center gap-1">
                    <ThumbsUp className="h-4 w-4" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageSquare className="h-4 w-4" />
                    <span>{post.comments}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Recommended Courses</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featuredCourses.map((course) => (
              <CourseCard key={course.code} {...course} />
            ))}
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
};

export default Index;
import { useState } from "react";
import CourseCard from "../components/CourseCard";
import BottomNav from "../components/BottomNav";
import { Search } from "lucide-react";

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

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-primary text-white py-6 px-4">
        <h1 className="text-2xl font-bold mb-4">CourseCompass</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search courses, professors, or topics..."
            className="w-full px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500 bg-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Recommended for You</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featuredCourses.map((course) => (
              <CourseCard key={course.code} {...course} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Popular Study Groups</h2>
          <div className="bg-white rounded-lg shadow-md p-4">
            <p className="text-gray-600">Coming soon...</p>
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
};

export default Index;
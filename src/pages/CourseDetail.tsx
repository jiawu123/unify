import { ArrowLeft, Bell, Link2, ThumbsUp, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import BottomNav from "@/components/BottomNav";

const CourseDetail = () => {
  const navigate = useNavigate();

  const suggestedCourses = [
    {
      code: "INFO 200",
      credits: "(5)",
      school: "School of Informatics",
      description: "Introduces the intellectual foundations of information, including what it is; how people create, categorize..."
    },
    {
      code: "INFO 310",
      credits: "(5)",
      school: "School of Informatics",
      description: "Provides a theoretical and practical introduction to information assurance and cyber-security..."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header with Search */}
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
                placeholder="info 201 class"
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

      <div className="container mx-auto px-4 py-6">
        {/* Course Title Section */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">INFO 201 (5)</h1>
          <p className="text-gray-600 text-lg">School of Informatics</p>
        </div>

        {/* About the Course Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">About the Course</h2>
          <Card className="p-6 bg-blue-100/50 relative mb-4">
            <p className="text-gray-700 leading-relaxed">
              Introduces fundamental tools, technologies, and skills necessary to transform data into knowledge, 
              including data manipulation, analysis, and visualization, as well as version control and programming 
              languages used in data programming. Students learn to work with real data, and reflect on the power 
              and perils of using data to inform.
            </p>
            <Button 
              variant="ghost" 
              size="icon"
              className="absolute bottom-2 right-2 hover:bg-blue-200/50"
            >
              <Link2 className="h-5 w-5 text-gray-600" />
            </Button>
          </Card>
          <div className="flex gap-3">
            <span className="px-4 py-2 bg-white rounded-full text-sm text-gray-700 shadow-sm">
              Technical
            </span>
            <span className="px-4 py-2 bg-white rounded-full text-sm text-gray-700 shadow-sm">
              Project-Based
            </span>
          </div>
        </div>

        {/* Suggested Courses Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Suggested Courses</h2>
          <div className="grid gap-4">
            {suggestedCourses.map((course) => (
              <Card key={course.code} className="p-4">
                <h3 className="text-lg font-bold">
                  {course.code} {course.credits}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{course.school}</p>
                <p className="text-gray-700 text-sm">{course.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Reviews Section */}
        <div>
          <div className="flex gap-4 mb-4 overflow-x-auto">
            <Button variant="secondary" className="rounded-full whitespace-nowrap">
              Newest
            </Button>
            <Button variant="outline" className="rounded-full whitespace-nowrap">
              Relevant
            </Button>
            <Button variant="outline" className="rounded-full whitespace-nowrap">
              Most Helpful
            </Button>
          </div>

          <Card className="p-4">
            <div className="flex gap-3 mb-3">
              <Avatar className="h-10 w-10" />
              <div>
                <p className="font-semibold">Eden McPeek</p>
                <p className="text-sm text-gray-600">
                  SOPHOMORE · PSYCHOLOGY AND PHILOSOPHY
                </p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              I thought this class was well organized and it was easy to receive help from TAs through the class Discord.
            </p>
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>1/23/2025</span>
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" className="gap-1">
                  <ThumbsUp className="h-4 w-4" />
                  +4
                </Button>
                <Button variant="ghost" size="sm">
                  <MessageSquare className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default CourseDetail;
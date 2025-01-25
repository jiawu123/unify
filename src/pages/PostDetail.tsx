import { ArrowLeft, ThumbsUp, MessageSquare, Share2, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate, useParams } from "react-router-dom";
import ShareDialog from "@/components/ShareDialog";
import BottomNav from "@/components/BottomNav";

const PostDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // In a real app, this would be fetched from an API
  const post = {
    title: "CSE 142 Study Group Formation",
    content: "Looking for students interested in forming a study group for CSE 142. We'll meet twice a week to work on programming assignments and prepare for exams. The goal is to create a collaborative learning environment where we can help each other understand complex programming concepts and improve our coding skills. We'll focus on the course material, practice problems, and exam preparation. All skill levels are welcome!",
    author: "TechStudent",
    authorCredibility: 85,
    likes: 45,
    comments: 23,
    tags: ["Study Group", "CSE 142", "Programming"],
    timestamp: "2h ago",
    type: "course" as const,
    responses: [
      {
        author: "CodeMaster",
        content: "I'm interested! What days are you thinking of meeting?",
        timestamp: "1h ago",
        likes: 5,
      },
      {
        author: "JavaPro",
        content: "Count me in! I've been looking for a study group.",
        timestamp: "30m ago",
        likes: 3,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header with consistent styling */}
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
                placeholder="Search posts..."
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
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 rounded-full p-3">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span className="text-primary">
                    {post.authorCredibility} credibility
                  </span>
                </div>
              </div>
            </div>
            <span className="text-sm text-gray-500">{post.timestamp}</span>
          </div>

          <p className="text-gray-700 mb-4 leading-relaxed">{post.content}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4 border-t pt-4">
            <Button variant="ghost" size="sm" className="text-gray-600">
              <ThumbsUp className="w-4 h-4 mr-1" />
              {post.likes}
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-600">
              <MessageSquare className="w-4 h-4 mr-1" />
              {post.comments}
            </Button>
            <ShareDialog courseCode={post.title} courseTitle={post.title} />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Responses</h3>
          <div className="space-y-4">
            {post.responses.map((response, index) => (
              <div
                key={index}
                className="border-b last:border-b-0 pb-4 last:pb-0"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="font-medium">{response.author}</span>
                    <span className="text-sm text-gray-500 ml-2">
                      {response.timestamp}
                    </span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-gray-600">
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    {response.likes}
                  </Button>
                </div>
                <p className="text-gray-700">{response.content}</p>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Input
              type="text"
              placeholder="Write a response..."
              className="w-full"
            />
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default PostDetail;
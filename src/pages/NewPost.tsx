import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, BookOpen, User } from "lucide-react";

const NewPost = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [type, setType] = useState<"course" | "professor" | "general">("general");
  const [tags, setTags] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!title.trim() || !content.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the data to your backend
    console.log({
      title,
      content,
      type,
      tags: tags.split(",").map(tag => tag.trim()).filter(Boolean),
    });

    toast({
      title: "Success",
      description: "Post created successfully!",
    });

    navigate("/");
  };

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      <div className="flex items-center mb-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate(-1)}
          className="mr-4"
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-2xl font-bold">Create New Post</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="type">Post Type</Label>
          <div className="flex gap-4">
            <Button
              type="button"
              variant={type === "general" ? "default" : "outline"}
              onClick={() => setType("general")}
              className="flex-1"
            >
              <User className="w-4 h-4 mr-2" />
              General
            </Button>
            <Button
              type="button"
              variant={type === "course" ? "default" : "outline"}
              onClick={() => setType("course")}
              className="flex-1"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Course
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your post title"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="content">Content</Label>
          <Textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your post content here..."
            className="min-h-[200px]"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="tags">Tags (comma-separated)</Label>
          <Input
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="e.g., CS101, Programming, Software Engineer"
          />
        </div>

        <div className="flex gap-4">
          <Button
            type="button"
            variant="outline"
            className="flex-1"
            onClick={() => navigate("/")}
          >
            Cancel
          </Button>
          <Button type="submit" className="flex-1">
            Post
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewPost;
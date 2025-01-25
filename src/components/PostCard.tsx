import { ThumbsUp, MessageSquare, Share2, BookOpen, User } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PostCardProps {
  title: string;
  content: string;
  author: string;
  authorCredibility: number;
  likes: number;
  comments: number;
  tags: string[];
  timestamp: string;
  type: "course" | "professor" | "general";
}

const PostCard = ({
  title,
  content,
  author,
  authorCredibility,
  likes,
  comments,
  tags,
  timestamp,
  type,
}: PostCardProps) => {
  return (
    <Card className="mb-4 hover:shadow-lg transition-shadow">
      <div className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="bg-primary/10 rounded-full p-2">
              {type === "course" ? (
                <BookOpen className="w-4 h-4 text-primary" />
              ) : (
                <User className="w-4 h-4 text-primary" />
              )}
            </div>
            <div>
              <h3 className="font-semibold text-lg">{title}</h3>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>{author}</span>
                <span>•</span>
                <span className="text-primary">
                  {authorCredibility} credibility
                </span>
              </div>
            </div>
          </div>
          <span className="text-sm text-gray-500">{timestamp}</span>
        </div>
        
        <p className="text-gray-700 mb-3">{content}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <Button variant="ghost" size="sm" className="text-gray-600">
            <ThumbsUp className="w-4 h-4 mr-1" />
            {likes}
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-600">
            <MessageSquare className="w-4 h-4 mr-1" />
            {comments}
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-600">
            <Share2 className="w-4 h-4 mr-1" />
            Share
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default PostCard;
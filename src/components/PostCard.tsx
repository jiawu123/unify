import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThumbsUp, MessageSquare, Share2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  credibilityScore: number;
  upvotes: number;
  category: string;
  timestamp: string;
}

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <Card className="p-4">
      <div className="flex items-start justify-between mb-2">
        <div>
          <h3 className="font-semibold text-lg">{post.title}</h3>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>{post.author}</span>
            <span>•</span>
            <span>{post.timestamp}</span>
          </div>
        </div>
        <Badge variant="secondary">{post.category}</Badge>
      </div>
      
      <p className="text-gray-600 mt-2 mb-4">{post.content}</p>
      
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" className="gap-1">
          <ThumbsUp className="h-4 w-4" />
          {post.upvotes}
        </Button>
        <Button variant="ghost" size="sm" className="gap-1">
          <MessageSquare className="h-4 w-4" />
          Comment
        </Button>
        <Button variant="ghost" size="sm" className="gap-1">
          <Share2 className="h-4 w-4" />
          Share
        </Button>
      </div>
    </Card>
  );
};

export default PostCard;
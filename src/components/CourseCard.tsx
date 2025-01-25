import { Star, Users, ThumbsUp, MessageSquare, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface CourseCardProps {
  code: string;
  title: string;
  professor: string;
  rating: number;
  students: number;
  likes: number;
  tags: string[];
}

const CourseCard = ({
  code,
  title,
  professor,
  rating,
  students,
  likes,
  tags,
}: CourseCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div className="flex gap-3">
            <div className="bg-primary/10 rounded-full p-2 h-fit">
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary">{code}</h3>
              <h4 className="text-xl font-bold">{title}</h4>
            </div>
          </div>
          <div className="flex items-center bg-yellow-50 px-2 py-1 rounded">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 font-semibold">{rating}</span>
          </div>
        </div>
        <p className="text-gray-600 mb-3">Prof. {professor}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-4 text-gray-500 text-sm">
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{students}</span>
            </div>
            <div className="flex items-center gap-1">
              <ThumbsUp className="w-4 h-4" />
              <span>{likes}</span>
            </div>
          </div>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => navigate(`/course/${code.toLowerCase().replace(' ', '-')}`)}
          >
            View Details
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CourseCard;
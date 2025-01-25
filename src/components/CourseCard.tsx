import { Star, Users, ThumbsUp, MessageSquare } from "lucide-react";
import { Card } from "@/components/ui/card";

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
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-semibold text-primary">{code}</h3>
            <h4 className="text-xl font-bold">{title}</h4>
          </div>
          <div className="flex items-center">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
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
        <div className="flex justify-between text-gray-500 text-sm">
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{students} students</span>
          </div>
          <div className="flex items-center gap-1">
            <ThumbsUp className="w-4 h-4" />
            <span>{likes} likes</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CourseCard;
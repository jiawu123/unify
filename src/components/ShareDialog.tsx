import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Share2, Instagram, Facebook, Link, MessageSquare } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

interface ShareDialogProps {
  courseCode: string;
  courseTitle: string;
}

const ShareDialog = ({ courseCode, courseTitle }: ShareDialogProps) => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const shareUrl = `${window.location.origin}/course/${courseCode.toLowerCase().replace(' ', '-')}`;

  const handleShare = async (platform: string) => {
    switch (platform) {
      case 'copy':
        await navigator.clipboard.writeText(shareUrl);
        toast({
          title: "Link copied!",
          description: "The course link has been copied to your clipboard.",
        });
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
        break;
      case 'instagram':
        // Instagram doesn't have a direct share URL, so we'll copy the link
        await navigator.clipboard.writeText(shareUrl);
        toast({
          title: "Link copied!",
          description: "Share this link on Instagram.",
        });
        break;
      case 'discord':
        window.open(`https://discord.com/channels/@me?content=${encodeURIComponent(shareUrl)}`, '_blank');
        break;
      case 'telegram':
        window.open(`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(`Check out ${courseTitle} on Unify!`)}`, '_blank');
        break;
    }
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="text-gray-600">
          <Share2 className="w-4 h-4 mr-1" />
          Share
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share Course</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-3 py-4">
          <Button
            variant="outline"
            className="justify-start"
            onClick={() => handleShare('facebook')}
          >
            <Facebook className="mr-2 h-4 w-4 text-blue-600" />
            Share on Facebook
          </Button>
          <Button
            variant="outline"
            className="justify-start"
            onClick={() => handleShare('instagram')}
          >
            <Instagram className="mr-2 h-4 w-4 text-pink-600" />
            Share on Instagram
          </Button>
          <Button
            variant="outline"
            className="justify-start"
            onClick={() => handleShare('discord')}
          >
            <MessageSquare className="mr-2 h-4 w-4 text-indigo-600" />
            Share on Discord
          </Button>
          <Button
            variant="outline"
            className="justify-start"
            onClick={() => handleShare('telegram')}
          >
            <MessageSquare className="mr-2 h-4 w-4 text-blue-500" />
            Share on Telegram
          </Button>
          <Button
            variant="outline"
            className="justify-start"
            onClick={() => handleShare('copy')}
          >
            <Link className="mr-2 h-4 w-4" />
            Copy Link
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareDialog;
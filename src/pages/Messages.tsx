import { ArrowLeft, Plus, Search, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BottomNav from "@/components/BottomNav";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Messages = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [messageType, setMessageType] = useState<"individual" | "group">("individual");
  const [recipientName, setRecipientName] = useState("");
  const [groupName, setGroupName] = useState("");

  const messages = [
    {
      id: 1,
      type: "individual",
      name: "Alex Chen",
      avatar: "/placeholder.svg",
      lastMessage: "Thanks for the help with the homework!",
      timestamp: "2h ago",
      unread: true,
    },
    {
      id: 2,
      type: "group",
      name: "CSE 142 Study Group",
      avatar: "/placeholder.svg",
      lastMessage: "When are we meeting next?",
      timestamp: "5h ago",
      unread: false,
      participants: 5,
    },
  ];

  const handleCreateMessage = () => {
    if (messageType === "individual" && recipientName.trim()) {
      // In a real app, you would validate the recipient exists
      toast({
        title: "New message created",
        description: `Started conversation with ${recipientName}`,
      });
      setRecipientName("");
      // Navigate to the new message thread
      navigate(`/message/new-${Date.now()}`);
    } else if (messageType === "group" && groupName.trim()) {
      toast({
        title: "New group created",
        description: `Created group "${groupName}"`,
      });
      setGroupName("");
      // Navigate to the new group chat
      navigate(`/message/group-${Date.now()}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
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
                placeholder="Search messages..."
                className="w-full py-2 px-4 pr-10 rounded-full text-sm text-gray-900 focus:outline-none"
              />
            </div>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-primary/90"
              >
                <Plus className="h-6 w-6" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>New Message</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                <Select
                  value={messageType}
                  onValueChange={(value: "individual" | "group") => setMessageType(value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select message type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="individual">Individual Message</SelectItem>
                    <SelectItem value="group">Group Chat</SelectItem>
                  </SelectContent>
                </Select>

                {messageType === "individual" ? (
                  <Input
                    placeholder="Enter recipient's name"
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                  />
                ) : (
                  <Input
                    placeholder="Enter group name"
                    value={groupName}
                    onChange={(e) => setGroupName(e.target.value)}
                  />
                )}

                <Button
                  onClick={handleCreateMessage}
                  disabled={
                    (messageType === "individual" && !recipientName.trim()) ||
                    (messageType === "group" && !groupName.trim())
                  }
                  className="w-full"
                >
                  Create {messageType === "individual" ? "Message" : "Group"}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className="bg-white p-4 rounded-lg shadow-sm border cursor-pointer hover:bg-gray-50"
              onClick={() => navigate(`/message/${message.id}`)}
            >
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={message.avatar} alt={message.name} />
                  <AvatarFallback>{message.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{message.name}</h3>
                      {message.type === "group" && (
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {message.participants} participants
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-gray-500">{message.timestamp}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{message.lastMessage}</p>
                </div>
                {message.unread && (
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Messages;
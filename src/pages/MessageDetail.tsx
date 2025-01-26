import { ArrowLeft, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";

const MessageDetail = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const messages = [
    {
      id: 1,
      sender: "Alex Chen",
      avatar: "/placeholder.svg",
      content: "Hey, do you want to study together for the upcoming exam?",
      timestamp: "2:30 PM",
      isSelf: false,
    },
    {
      id: 2,
      sender: "You",
      content: "Sure! When were you thinking?",
      timestamp: "2:35 PM",
      isSelf: true,
    },
  ];

  const handleSend = () => {
    if (message.trim()) {
      // Handle sending message
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-primary text-white py-4 px-4">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="text-white hover:bg-primary/90"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="/placeholder.svg" alt="Alex Chen" />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="font-semibold">Alex Chen</h2>
              <span className="text-xs opacity-80">Online</span>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-6 overflow-y-auto">
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.isSelf ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] ${
                  msg.isSelf
                    ? "bg-primary text-white rounded-l-lg rounded-tr-lg"
                    : "bg-white text-gray-900 rounded-r-lg rounded-tl-lg"
                } p-3 shadow-sm`}
              >
                {!msg.isSelf && (
                  <span className="text-xs font-semibold block mb-1">
                    {msg.sender}
                  </span>
                )}
                <p className="text-sm">{msg.content}</p>
                <span className="text-xs opacity-70 block text-right mt-1">
                  {msg.timestamp}
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>

      <div className="bg-white border-t p-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 py-2 px-4 rounded-full border focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <Button
            onClick={handleSend}
            className="rounded-full"
            disabled={!message.trim()}
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MessageDetail;
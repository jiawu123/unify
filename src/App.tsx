import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NewPost from "./pages/NewPost";
import SavedPosts from "./pages/SavedPosts";
import Profile from "./pages/Profile";
import CourseDetail from "./pages/CourseDetail";
import PostDetail from "./pages/PostDetail";
import Notifications from "./pages/Notifications";
import Messages from "./pages/Messages";
import MessageDetail from "./pages/MessageDetail";
import Settings from "./pages/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/message/:id" element={<MessageDetail />} />
          <Route path="/new-post" element={<NewPost />} />
          <Route path="/saved" element={<SavedPosts />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
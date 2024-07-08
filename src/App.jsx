import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, Upload, Image, Compass } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar"; // Use the sidebar layout
import Index from "./pages/Index.jsx";
import UploadPhoto from "./pages/UploadPhoto.jsx";
import MyPhotos from "./pages/MyPhotos.jsx";
import Explore from "./pages/Explore.jsx";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Upload Photo",
    to: "/upload",
    icon: <Upload className="h-4 w-4" />,
  },
  {
    title: "My Photos",
    to: "/my-photos",
    icon: <Image className="h-4 w-4" />,
  },
  {
    title: "Explore",
    to: "/explore",
    icon: <Compass className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="upload" element={<UploadPhoto />} />
              <Route path="my-photos" element={<MyPhotos />} />
              <Route path="explore" element={<Explore />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
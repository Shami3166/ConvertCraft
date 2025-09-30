import { Routes, Route } from "react-router-dom";

// Pages
import Home from "@/pages/Home";
import Tools from "@/pages/Tools";
import Converter from "@/pages/Converter";
import Pricing from "@/pages/Pricing";
import Blog from "@/pages/Blog";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import Terms from "@/pages/Terms";
import Disclaimer from "@/pages/Disclaimer";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import NotFound from "@/pages/NotFound";

// Layout
import MainLayout from "@/layouts/MainLayout";
import History from "@/pages/History";
import BlogDetail from "@/components/BlogDetail";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Routes wrapped by MainLayout */}
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="tools" element={<Tools />} />
        <Route path="converter/:id" element={<Converter />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="blog" element={<Blog />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="history" element={<History />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="disclaimer" element={<Disclaimer />} />

        <Route path="*" element={<NotFound />} />
      </Route>

      {/* Auth Pages (no layout) */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  Twitter,
  Linkedin,
  Github,
  Mail,
  ArrowRight,
  Shield,
  FileText,
  Users,
  Home,
  Wrench,
  DollarSign,
  BookOpen,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/ehtesham-munawar-5b9562382/",
      label: "LinkedIn",
      color: "hover:bg-blue-600 hover:text-white",
    },
    {
      icon: Twitter,
      href: "https://x.com/EhteshamMunawar",
      label: "Twitter",
      color: "hover:bg-black hover:text-white",
    },
    {
      icon: Github,
      href: "https://github.com/Shami3166",
      label: "GitHub",
      color: "hover:bg-gray-900 hover:text-white",
    },
  ];

  const pages = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Wrench, label: "Tools", href: "/tools" },
    { icon: DollarSign, label: "Pricing", href: "/pricing" },
    { icon: BookOpen, label: "Blog", href: "/blog" },
  ];

  const company = [
    { icon: Users, label: "About", href: "/about" },
    { icon: Phone, label: "Contact", href: "/contact" },
    { icon: Shield, label: "Privacy Policy", href: "/privacy-policy" },
    { icon: FileText, label: "Terms", href: "/terms" },
    { icon: Shield, label: "Disclaimer", href: "/disclaimer" },
  ];

  return (
    <footer className="bg-gradient-to-br from-purple-900  via-blue-900 to-purple-900  text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent">
                  ConvertCraft
                </span>
                <span className="text-xs text-blue-300 font-medium">
                  Professional Tools
                </span>
              </div>
            </Link>

            <p className="text-blue-200 text-sm leading-relaxed max-w-xs">
              Convert images, videos, and documents online with our fast,
              secure, and easy-to-use tools. Professional quality conversions at
              your fingertips.
            </p>

            <Badge
              variant="secondary"
              className="bg-white/10 text-blue-200 border-white/20 backdrop-blur-sm"
            >
              Trusted by Thousands
            </Badge>
          </div>

          {/* Pages Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <Wrench className="h-5 w-5 text-purple-400" />
              Navigation
            </h3>
            <ul className="space-y-3">
              {pages.map((page) => (
                <li key={page.label}>
                  <Link
                    to={page.href}
                    className="flex items-center gap-5 text-blue-200 hover:text-white transition-colors duration-200 group text-sm"
                  >
                    <page.icon className="h-4 w-4 text-purple-400 group-hover:text-purple-300 transition-colors" />
                    <span>{page.label}</span>
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-200 " />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <Shield className="h-5 w-5 text-blue-400" />
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="flex items-center gap-5 text-blue-200 hover:text-white transition-colors duration-200 group text-sm"
                  >
                    <item.icon className="h-4 w-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
                    <span>{item.label}</span>
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact Column */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg flex items-center gap-2 mb-4">
                <Users className="h-5 w-5 text-purple-400" />
                Connect With Us
              </h3>

              {/* Social Links */}
              <div className="flex gap-3 mb-4">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="outline"
                    size="icon"
                    className={`w-10 h-10 bg-white/10 border-white/20 text-white ${social.color} transition-all duration-300 rounded-lg`}
                    asChild
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="h-4 w-4" />
                    </a>
                  </Button>
                ))}
              </div>

              {/* Email Contact */}
              <div className="flex items-center gap-2 text-blue-200 text-sm">
                <Mail className="h-4 w-4" />
                <span>sahtisham928@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-blue-300 text-sm text-center md:text-left">
            © {currentYear} ConvertCraft. All rights reserved. Made with ❤️ for
            the community.
          </div>

          <div className="flex items-center gap-4 text-sm text-blue-300">
            <span>Follow us:</span>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/20 to-blue-500/20 rounded-full blur-2xl"></div>
      <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"></div>
    </footer>
  );
}

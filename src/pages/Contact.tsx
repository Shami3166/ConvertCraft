/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import {
  Sparkles,
  Loader2,
  Send,
  MessageSquare,
  Phone,
  MapPin,
  Clock,
  Github,
  Twitter,
  Linkedin,
  MailIcon,
  Globe,
  Zap,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactPage() {
  const { user } = useAuth();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        message: "",
      });
    }
  }, [user]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Show loading toast
    const toastId = toast.loading("Sending your message...");

    try {
      // Show success toast
      toast.success("Message sent successfully! We'll get back to you soon.", {
        id: toastId,
        duration: 4000,
      });

      setFormData({
        ...formData,
        message: "",
      });
    } catch (err: any) {
      // Show error toast
      toast.error(
        err.response?.data?.message ||
          "Failed to send message. Please try again.",
        {
          id: toastId,
          duration: 4000,
        }
      );
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+92 3374686321",
      description: "Available 8am to 8pm",
    },
    {
      icon: MailIcon,
      title: "Email",
      content: "sahtisham928@gmail.com",
      description: "Fast response guaranteed",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Pakistan, Punjab, Toba Tek Singh",
      description: "Remote support worldwide",
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Monday - Sunday",
      description: "8:00 AM - 8:00 PM PKT",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Shami3166",
      label: "GitHub",
      color: "hover:bg-gray-900 hover:text-white",
    },
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
  ];

  const features = [
    {
      icon: Zap,
      title: "Fast Conversion",
      description: "Convert PNG files in seconds with our optimized technology",
    },
    {
      icon: Globe,
      title: "Multiple Formats",
      description: "Support for JPG, WebP, SVG, PDF and many more formats",
    },
    {
      icon: Sparkles,
      title: "High Quality",
      description:
        "Maintain original quality with smart compression algorithms",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white py-16 lg:py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Sparkles className="h-16 w-16 mx-auto mb-6 text-white drop-shadow-lg animate-pulse" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">
              Need Help With File Conversions?
            </h1>
            <p className="text-lg lg:text-xl font-light opacity-90 mb-6">
              If you have any technical inquiries, feature requests, or
              conversion problems, our support staff is available to assist you.
            </p>
            <div className="flex justify-center gap-3">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="outline"
                  size="icon"
                  className={`bg-white/10 border-white/20 text-white ${social.color} transition-all duration-300 rounded-full`}
                  asChild
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-gray-50 h-full">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="flex items-center justify-center gap-2 text-xl text-gray-900">
                    <MessageSquare className="h-5 w-5 text-purple-600" />
                    Contact Information
                  </CardTitle>
                  <p className="text-gray-600 text-sm">
                    Get in touch with our support team
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="p-2 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg">
                        <item.icon className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-sm">
                          {item.title}
                        </h3>
                        <p className="text-gray-700 text-sm">{item.content}</p>
                        <p className="text-xs text-gray-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}

                  {/* Social Links */}
                  <div className="pt-4 border-t border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-3 text-sm">
                      Follow Us
                    </h3>
                    <div className="flex gap-2">
                      {socialLinks.map((social) => (
                        <Button
                          key={social.label}
                          variant="outline"
                          size="sm"
                          className={`rounded-full ${social.color} transition-all duration-300 text-xs`}
                          asChild
                        >
                          <a
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1"
                          >
                            <social.icon className="h-3 w-3" />
                            {social.label}
                          </a>
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="space-y-6">
              <Card className="border-0 shadow-xl h-full">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Send Us a Message
                  </CardTitle>
                  <p className="text-gray-600 text-sm">
                    Have questions about file conversions? We're here to help!
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor="name"
                          className="text-gray-700 text-sm font-medium"
                        >
                          Full Name
                        </Label>
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          disabled={!!user}
                          required
                          className="rounded-lg border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="text-gray-700 text-sm font-medium"
                        >
                          Email Address
                        </Label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          disabled={!!user}
                          required
                          className="rounded-lg border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="message"
                          className="text-gray-700 text-sm font-medium"
                        >
                          Your Message
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="rounded-lg border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors min-h-[120px]"
                          placeholder="Tell us about your conversion needs or any issues you're facing..."
                        />
                      </div>
                    </div>
                    <Button
                      type="submit"
                      className="w-full cursor-pointer bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 py-3 rounded-lg flex items-center justify-center gap-2 font-semibold text-white h-11"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

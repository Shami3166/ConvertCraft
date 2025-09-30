import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Zap,
  Lock,
  RefreshCcw,
  ArrowRight,
  Image,
  FileImage,
  Smartphone,
  Palette,
  Sparkles,
  Shield,
  Download,
  Users,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// ✅ FIXED: Import images directly
import faceSwapImage from "@/assets/images/face-swap.png";
import adventureImage from "@/assets/images/adventure.jpg";
import officeImage from "@/assets/images/office.jpg";

const Home = () => {
  const [activeTab, setActiveTab] = useState("png-jpg");

  // ✅ FIXED: Use imported images
  const images = [faceSwapImage, adventureImage, officeImage];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const conversionTypes = [
    {
      id: "png-jpg",
      title: "PNG ↔ JPG",
      description:
        "Convert most popular image files between any combinaiton of formats with one click.",
      icon: Image,
      features: ["Lossless conversion", "Batch processing", "Quality control"],
      color: "from-blue-500 to-purple-500",
      gradient: "bg-gradient-to-r from-blue-500 to-purple-500",
    },
    {
      id: "webp",
      title: "WebP Converter",
      description: "Optimize with WebP format images for faster load times",
      icon: Zap,
      features: ["Smaller file sizes", "Better compression", "Web optimized"],
      color: "from-green-500 to-teal-500",
      gradient: "bg-gradient-to-r from-green-500 to-teal-500",
    },
    {
      id: "svg",
      title: "SVG Converter",
      description: "Accurately convert vector SVG files to raster formats",
      icon: Palette,
      features: ["Vector to raster", "High resolution export", "Scale control"],
      color: "from-orange-500 to-red-500",
      gradient: "bg-gradient-to-r from-orange-500 to-red-500",
    },
    {
      id: "heic",
      title: "HEIC Converter",
      description: "Transform iOS devices' HEIC photos into common formats.",
      icon: Smartphone,
      features: ["iOS compatibility", "Metadata preservation", "Batch convert"],
      color: "from-indigo-500 to-blue-500",
      gradient: "bg-gradient-to-r from-indigo-500 to-blue-500",
    },
  ];

  const stats = [
    { number: "1000+", label: "Daily Conversions", icon: RefreshCcw },
    { number: "10+", label: "Converter Formats", icon: FileImage },
    { number: "99.9%", label: "Dependability of Uptime", icon: Shield },
    { number: "24/7", label: "Available Support", icon: Users },
  ];

  return (
    <>
      <Helmet>
        <title>
          Free Image Converter Online - 100% Free, PNG, JPG, WebP, HEIC, SVG
          Converter | ConvertCraft
        </title>
        <meta
          name="description"
          content="Convert images instantly for free! PNG to JPG, HEIC to JPG, WebP to PNG, SVG to JPG converter. No registration required. Preserve quality with batch conversion support."
        />
        <meta
          name="keywords"
          content="image converter,100 percent free,png to jpg converter,webp to jpg converter,online image converter,convert image formats,free image converter,svg to png converter,jpg to png converter,convert heic to jpg online,webp to png converter free,svg to jpg converter online,image format converter online,free photo converter no signup,convert multiple images online,batch image converter free,online image format changer free converter,fast conversions,png to webp,jpg to webp,heic to jpg,svg to png,heic to png,webp to png,svg to jpg,photo converter"
        />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Free Image Converter Online - Convert PNG, JPG, WebP, HEIC, SVG"
        />
        <meta
          property="og:description"
          content="Convert images instantly between all popular formats. Free, fast, and no signup required."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ConvertCraft.vercel.app" />
        <meta
          property="og:image"
          content="https://ConvertCraft.vercel.app/og-image.jpg"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        <meta name="language" content="en" />
        <link rel="canonical" href="https://ConvertCraft.vercel.app" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Free Image Converter Online | ConvertCraft"
        />
        <meta
          name="twitter:description"
          content="Convert images instantly between PNG, JPG, WebP, HEIC, SVG formats. Free and no registration required."
        />
      </Helmet>

      <main className="min-h-screen font-sans antialiased text-gray-900 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        {/* ===== Hero Section ===== */}
        <section className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 text-white overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

          <div className="container max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Hero Text */}
            <motion.div
              className="text-center lg:text-left space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge
                variant="secondary"
                className="bg-white/20 text-white border-white/30 backdrop-blur-sm mb-4"
              >
                🚀 Professional Image Converter
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Convert Pictures
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
                  Similar to magic
                </span>
              </h1>

              <p className="text-xl text-blue-100 leading-relaxed max-w-lg">
                Convert your images quickly and flawlessly between more than 10
                image formats. Get the expert results without any restrictions
                or watermarks.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white shadow-2xl hover:shadow-3xl px-8 py-3 text-lg font-semibold rounded-xl"
                  asChild
                >
                  <Link to="/tools" className="flex items-center gap-2">
                    Start Converting <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className=" text-purple-500 hover:text-purple-600 px-8 py-3 text-lg font-semibold rounded-xl"
                  asChild
                >
                  <Link to="/tools" className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5" />
                    See All Tools
                  </Link>
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8 max-w-md">
                {stats.slice(0, 3).map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl font-bold text-white">
                      {stat.number}
                    </div>
                    <div className="text-blue-200 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Hero Image Carousel */}
            <motion.div
              className="relative w-full h-[400px] lg:h-[520px]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {images.map((img, i) => {
                const isActive = i === currentImageIndex;
                const leftIndex =
                  (currentImageIndex + images.length - 1) % images.length;
                const rightIndex = (currentImageIndex + 1) % images.length;

                let style = {};
                if (i === leftIndex) {
                  style = {
                    x: -100,
                    rotate: -5,
                    scale: 0.9,
                    zIndex: 5,
                    opacity: 0.7,
                  };
                } else if (i === rightIndex) {
                  style = {
                    x: 100,
                    rotate: 5,
                    scale: 0.9,
                    zIndex: 5,
                    opacity: 0.7,
                  };
                } else if (isActive) {
                  style = { x: 0, rotate: 0, scale: 1, zIndex: 10, opacity: 1 };
                } else {
                  style = { opacity: 0, scale: 0.8 };
                }

                return (
                  <motion.div
                    key={i}
                    className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl"
                    animate={style}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <img
                      src={img}
                      alt={`Preview ${i}`}
                      className="w-full h-full object-cover"
                    />
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    )}
                  </motion.div>
                );
              })}

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-yellow-400" />
                  <div>
                    <div className="text-white font-semibold">5-Star Rated</div>
                    <div className="text-blue-200 text-sm">By 1K+ Users</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ===== Features Section ===== */}
        <section className="py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge
                variant="outline"
                className="bg-blue-50 text-blue-600 border-blue-200 mb-4"
              >
                Why Choose Us
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Designed to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  Perform
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                With our unique Professional Edition conversion platform,
                experience the difference.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Zap,
                  title: "Lightning Quick",
                  description:
                    " Processing engine optimization for instant photo conversion",
                  color: "from-blue-500 to-purple-500",
                },
                {
                  icon: Lock,
                  title: " Private & Safe",
                  description:
                    " We safely process your files, and after three hours, they are automatically deleted.",
                  color: "from-green-500 to-teal-500",
                },
                {
                  icon: Download,
                  title: "No Installed",
                  description:
                    " No downloads are required—everything is in your web browser!",
                  color: "from-purple-500 to-pink-500",
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 h-full">
                    <CardContent className="p-6 text-center">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                      >
                        <feature.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Supported Conversions Section ===== */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge
                variant="outline"
                className="bg-white/50 backdrop-blur-sm border-purple-200 text-purple-600 mb-4"
              >
                Supported Formats
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Convert More{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Than 10 Formats
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Professional-grade conversions for all of your media and picture
                needs
              </p>
            </motion.div>

            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="max-w-5xl mx-auto"
            >
              {/* Updated TabsList with horizontal scrolling */}
              <div className="relative mb-12">
                <TabsList className="flex overflow-x-auto scrollbar-hide gap-2 bg-white/80 backdrop-blur-sm rounded-2xl p-2 border border-gray-200 w-full">
                  {conversionTypes.map((type) => (
                    <TabsTrigger
                      key={type.id}
                      value={type.id}
                      className={`flex items-center gap-2 px-6 py-3 rounded-xl data-[state=active]:shadow-lg transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                        activeTab === type.id
                          ? "text-white " + type.gradient
                          : "text-gray-600 hover:text-gray-900 bg-transparent"
                      }`}
                    >
                      <type.icon className="h-4 w-4 flex-shrink-0" />
                      {type.title}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {/* Gradient fade effect for mobile scrolling indication */}
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-blue-50 to-transparent pointer-events-none lg:hidden"></div>
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-blue-50 to-transparent pointer-events-none lg:hidden"></div>
              </div>

              {conversionTypes.map((type) => (
                <TabsContent key={type.id} value={type.id} className="m-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-6 md:p-12 border border-gray-200"
                  >
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      <div className="space-y-6">
                        <div
                          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${type.gradient} text-white text-sm font-semibold`}
                        >
                          <type.icon className="h-4 w-4" />
                          {type.title}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                          {type.description}
                        </h3>
                        <ul className="space-y-3">
                          {type.features.map((feature, index) => (
                            <li
                              key={index}
                              className="flex items-center gap-3 text-gray-700"
                            >
                              <CheckCircle className="h-5 w-5 text-green-500" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Button
                          className={`${type.gradient} hover:shadow-xl transition-all duration-300`}
                          asChild
                        >
                          <Link to="/tools" className="flex items-center gap-2">
                            Try {type.title} <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>

                      <div className="relative">
                        <div
                          className={`w-full h-48 md:h-64 rounded-2xl ${type.gradient} flex items-center justify-center relative overflow-hidden`}
                        >
                          <FileImage className="w-12 h-12 md:w-16 md:h-16 text-white opacity-90" />
                          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/10"></div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* ===== Final CTA Section ===== */}
        <section className="py-8 bg-gradient-to-r mb-6 from-purple-600 to-blue-600 text-white">
          <div className="container max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Sparkles className="h-16 w-16 mx-auto text-white/80" />
              <h2 className="text-3xl lg:text-4xl font-bold">
                Ready to Transform Your Workflow?
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Become one of the thousands of professionals who rely on
                ConvertCraft for their conversion requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-xl shadow-2xl"
                  asChild
                >
                  <Link to="/tools">
                    Start Converting Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-purple-500 hover:text-purple-600 px-8 py-3 text-lg font-semibold rounded-xl"
                  asChild
                >
                  <Link to="/pricing">View Pricing</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;

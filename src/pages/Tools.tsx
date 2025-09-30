import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Search, Shield } from "lucide-react";
import { getAllConverters } from "../api/conversionApi";
import { useNavigate } from "react-router-dom";
import ConverterCard from "../components/ConverterCard";
import { Helmet } from "react-helmet";

interface Converter {
  title: string;
  description: string;
  url: string;
  sourceFormat?: string;
  targetFormat?: string;
  sourceMimeType?: string;
  targetMimeType?: string;
  category?: string;
  popularity?: number;
}

const Tools = () => {
  const [converters, setConverters] = useState<Converter[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchConverters = async () => {
      try {
        const fetchedConverters = await getAllConverters();
        setConverters(fetchedConverters);
      } catch {
        setError("Failed to load converters. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchConverters();
  }, []);

  // Fixed Animation variants with proper TypeScript types
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const categories = [
    { id: "all", label: "All Tools", count: 12 },
    { id: "image", label: "Images", count: 8 },
    { id: "video", label: "Videos", count: 2 },
    { id: "document", label: "Documents", count: 0 },
  ];

  const dummyConverters: Converter[] = [
    {
      title: "PNG to JPG",
      description: "Convert PNG images to high-quality JPG format",
      url: "png-to-jpg",
      sourceFormat: "png",
      targetFormat: "jpg",
      sourceMimeType: "image/png",
      targetMimeType: "image/jpeg",
      category: "image",
      popularity: 95,
    },
    {
      title: "JPG to PNG",
      description: "Convert JPG images to lossless PNG format",
      url: "jpg-to-png",
      sourceFormat: "jpg",
      targetFormat: "png",
      sourceMimeType: "image/jpeg",
      targetMimeType: "image/png",
      category: "image",
      popularity: 88,
    },
    {
      title: "PNG to WebP",
      description: "Convert PNG to modern WebP format for web",
      url: "png-to-webp",
      sourceFormat: "png",
      targetFormat: "webp",
      sourceMimeType: "image/png",
      targetMimeType: "image/webp",
      category: "image",
      popularity: 76,
    },
    {
      title: "WebP to PNG",
      description: "Convert WebP images back to PNG format",
      url: "webp-to-png",
      sourceFormat: "webp",
      targetFormat: "png",
      sourceMimeType: "image/webp",
      targetMimeType: "image/png",
      category: "image",
      popularity: 72,
    },
    {
      title: "JPG to WebP",
      description: "Optimize JPG images with WebP compression",
      url: "jpg-to-webp",
      sourceFormat: "jpg",
      targetFormat: "webp",
      sourceMimeType: "image/jpeg",
      targetMimeType: "image/webp",
      category: "image",
      popularity: 68,
    },
    {
      title: "WebP to JPG",
      description: "Convert WebP to universal JPG format",
      url: "webp-to-jpg",
      sourceFormat: "webp",
      targetFormat: "jpg",
      sourceMimeType: "image/webp",
      targetMimeType: "image/jpeg",
      category: "image",
      popularity: 65,
    },
    {
      title: "SVG to PNG",
      description: "Convert vector SVG to raster PNG images",
      url: "svg-to-png",
      sourceFormat: "svg",
      targetFormat: "png",
      sourceMimeType: "image/svg+xml",
      targetMimeType: "image/png",
      category: "image",
      popularity: 82,
    },
    {
      title: "SVG to JPG",
      description: "Convert scalable SVG to JPG format",
      url: "svg-to-jpg",
      sourceFormat: "svg",
      targetFormat: "jpg",
      sourceMimeType: "image/svg+xml",
      targetMimeType: "image/jpeg",
      category: "image",
      popularity: 78,
    },
    {
      title: "HEIC to JPG",
      description: "Convert iPhone HEIC photos to JPG",
      url: "heic-to-jpg",
      sourceFormat: "heic",
      targetFormat: "jpg",
      sourceMimeType: "image/heic",
      targetMimeType: "image/jpeg",
      category: "image",
      popularity: 85,
    },
    {
      title: "HEIC to PNG",
      description: "Convert HEIC images to PNG format",
      url: "heic-to-png",
      sourceFormat: "heic",
      targetFormat: "png",
      sourceMimeType: "image/heic",
      targetMimeType: "image/png",
      category: "image",
      popularity: 79,
    },
  ];

  const convertersToDisplay =
    converters.length > 0 ? converters : dummyConverters;

  // Filter converters based on search and category
  const filteredConverters = convertersToDisplay.filter((converter) => {
    const matchesSearch =
      converter.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      converter.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || converter.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleConverterClick = (converter: Converter) => {
    const converterId = converter.url.replace("/", "");
    navigate(`/converter/${converterId}`);
  };

  return (
    <>
      <Helmet>
        <title>
          Free Image Conversion Tools - PNG, JPG, WebP, HEIC, SVG Converters
          Online | ConvertCraft
        </title>
        <meta
          name="description"
          content="Access 10+ free image conversion tools online. Convert PNG to JPG, HEIC to JPG, WebP to PNG, SVG to JPG and more. No registration, instant results, batch processing available."
        />
        <meta
          name="keywords"
          content="image conversion tools, free online converters, png to jpg converter, heic to jpg converter, webp to png converter, svg to jpg converter, jpg to png converter, png to webp converter, webp to jpg converter, heic to png converter, svg to png converter, batch image converter, online file converter, free conversion tools, image format converter, photo conversion tools,
    how to convert png to jpg online free, best free heic to jpg converter online, convert webp to png without losing quality, svg to jpg converter for logos, batch convert multiple images online, free image converter no watermark, online tool to convert heic photos, png to webp converter for website, jpg to png converter transparent background, svg to png converter high resolution,
    free png to jpg converter no sign up, heic to jpg converter for windows online, webp to jpg converter free download alternative, svg to png converter online tool, batch png to jpg converter free, convert multiple heic files to jpg online, webp to png converter without software, svg to jpg converter for social media,
    image converter for website optimization, photo converter for social media posts, file converter for email attachments, image format converter for printing, photo converter for documents, image converter for mobile devices,
    convert heic from iphone to jpg online, png to jpg for smaller file size, webp to jpg for compatibility, svg to png for web use, heic to png for transparency, batch image converter for multiple files, free online converter no registration, instant image conversion tool, preserve quality when converting images, best image format converter online"
        />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Free Image Conversion Tools - All Format Converters Online | ConvertCraft"
        />
        <meta
          property="og:description"
          content="Access all free image conversion tools: PNG to JPG, HEIC to JPG, WebP to PNG, SVG to JPG converters and more. No registration required."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://ConvertCraft.vercel.app/tools"
        />
        <meta
          property="og:image"
          content="https://ConvertCraft.vercel.app/tools-og-image.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Free Image Conversion Tools | ConvertCraft"
        />
        <meta
          name="twitter:description"
          content="Convert between all image formats instantly. PNG, JPG, WebP, HEIC, SVG converters available. Free and no registration."
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://ConvertCraft.vercel.app/tools" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white py-20 md:py-28">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge
                variant="secondary"
                className="mb-4 bg-white/20 text-white border-none px-4 py-1"
              >
                🚀 10+ Conversion Tools
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Easy and Powerful
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  File Conversion
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
                Convert any file format with flawless quality and lightning
                speed. Conversion is simple with our AI-powered tools.
              </p>
            </motion.div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl mx-auto"
            ></motion.div>
          </div>

          {/* Background Animation */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          </div>
        </section>

        {/* Category Filters */}
        <section className="py-8 bg-white/80 backdrop-blur-sm border-b">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap gap-3 justify-center"
            >
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={
                    selectedCategory === category.id ? "default" : "outline"
                  }
                  onClick={() => setSelectedCategory(category.id)}
                  className={`rounded-full px-6 cursor-pointer py-2 transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "bg-white/60 backdrop-blur-sm border-gray-200 hover:border-blue-300"
                  }`}
                >
                  {category.label}
                  <Badge
                    variant="secondary"
                    className="ml-2 bg-white/20 text-xs"
                  >
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Tools Grid Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            {isLoading ? (
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="show"
              >
                {[...Array(8)].map((_, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg rounded-2xl overflow-hidden">
                      <CardContent className="p-6">
                        <Skeleton className="h-6 w-3/4 mb-4 bg-gray-200 rounded-full" />
                        <Skeleton className="h-4 w-full mb-2 bg-gray-200 rounded" />
                        <Skeleton className="h-4 w-5/6 mb-6 bg-gray-200 rounded" />
                        <Skeleton className="h-10 w-full bg-gray-200 rounded-xl" />
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center justify-between mb-8"
                >
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                      Conversion Tools
                    </h2>
                    <p className="text-gray-600 mt-2">
                      {filteredConverters.length} tools found
                      {searchTerm && ` for "${searchTerm}"`}
                      {selectedCategory !== "all" &&
                        ` in ${
                          categories.find((c) => c.id === selectedCategory)
                            ?.label
                        }`}
                    </p>
                  </div>
                </motion.div>

                <AnimatePresence mode="wait">
                  {filteredConverters.length > 0 ? (
                    <motion.div
                      key="tools-grid"
                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                      variants={containerVariants}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                    >
                      {filteredConverters.map((converter, index) => (
                        <motion.div
                          key={converter.url}
                          variants={itemVariants}
                          custom={index}
                        >
                          <ConverterCard
                            converter={converter}
                            onClick={() => handleConverterClick(converter)}
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="no-results"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="text-center py-16"
                    >
                      <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
                        <Search className="w-10 h-10 text-gray-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        No tools found
                      </h3>
                      <p className="text-gray-600">
                        Try adjusting your search or filter criteria
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => {
                          setSearchTerm("");
                          setSelectedCategory("all");
                        }}
                        className="mt-4 cursor-pointer bg-gradient-to-r text-white from-purple-600 to-blue-600"
                      >
                        Clear filters
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            )}

            {error && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 text-center"
              >
                <Card className="bg-red-50 border-red-200 max-w-md mx-auto">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="font-semibold text-red-800 mb-2">
                      Error Loading Tools
                    </h3>
                    <p className="text-red-600 text-sm">{error}</p>
                    <Button
                      variant="outline"
                      onClick={() => window.location.reload()}
                      className="mt-4 border-red-300 text-red-700 hover:bg-red-100"
                    >
                      Try Again
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Tools;

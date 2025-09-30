import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Existing images
import pngVsJpg from "../assets/images/adventure.jpg";
import pngToJpgQuality from "../assets/images/beach.webp";
import webpExplained from "../assets/images/face-swap.png";
import jpgToWebp from "../assets/images/media.webp";
import svgComparison from "../assets/images/media2.webp";
import heicConversion from "../assets/images/media3.webp";
import imageCompression from "../assets/images/park.webp";
import freeTools from "../assets/images/office.jpg";

// New images for additional articles
import heicVsJpg from "../assets/images/aritcle1.webp";
import svgToPngGuide from "../assets/images/article2.webp";
import pngTransparency from "../assets/images/market2.webp";
import imageOptimization from "../assets/images/paints.webp";
import formatHistory from "../assets/images/open.webp";
import commonMistakes from "../assets/images/writing.webp";
import socialMediaFormats from "../assets/images/market.webp";
import { Helmet } from "react-helmet";

const blogPosts = [
  {
    id: 1,
    title: "PNG vs JPG: Which Format Should You Use and Why?",
    description:
      "Understanding the fundamental differences between PNG and JPG formats is crucial for optimal image usage. PNG offers lossless compression with transparency support, while JPG provides smaller file sizes with lossy compression.",
    image: pngVsJpg,
    slug: "png-vs-jpg-which-format-should-you-use",
    readTime: "8 min read",
    category: "Image Formats",
    date: "2025-01-10",
  },
  {
    id: 2,
    title: "How to Convert PNG to JPG Without Losing Image Quality",
    description:
      "Converting PNG to JPG while maintaining image quality requires careful attention to compression settings. This guide covers best practices for conversion and tools that preserve image integrity.",
    image: pngToJpgQuality,
    slug: "convert-png-to-jpg-without-losing-quality",
    readTime: "6 min read",
    category: "Conversion Tips",
    date: "2025-01-10",
  },
  {
    id: 3,
    title: "WebP Format Explained: Why It's Better for Websites and SEO",
    description:
      "WebP represents the next generation of image formats, offering superior compression and quality compared to traditional formats. Learn how WebP improves website loading speeds and boosts SEO.",
    image: webpExplained,
    slug: "webp-format-explained-seo-benefits",
    readTime: "10 min read",
    category: "Modern Formats",
    date: "2025-01-10",
  },
  {
    id: 4,
    title: "How to Convert JPG to WebP Easily for Faster Website Loading",
    description:
      "Speed up your website by converting JPG images to WebP format. This comprehensive tutorial covers conversion tools, quality optimization, and implementation methods.",
    image: jpgToWebp,
    slug: "convert-jpg-to-webp-faster-websites",
    readTime: "7 min read",
    category: "Performance",
    date: "2025-01-10",
  },
  {
    id: 5,
    title: "SVG vs PNG vs JPG: Best Image Format for Design and Web Use",
    description:
      "Choosing between SVG, PNG, and JPG depends on your specific use case. SVG excels for logos and icons, PNG for transparency needs, and JPG for photographs.",
    image: svgComparison,
    slug: "svg-vs-png-vs-jpg-comparison",
    readTime: "9 min read",
    category: "Format Comparison",
    date: "2025-01-10",
  },
  {
    id: 6,
    title: "How to Convert HEIC Photos from iPhone to JPG or PNG",
    description:
      "HEIC format used by iPhones offers efficient storage but limited compatibility. Learn multiple methods to convert HEIC images to universally supported formats.",
    image: heicConversion,
    slug: "convert-heic-iphone-photos-to-jpg-png",
    readTime: "5 min read",
    category: "Mobile Photography",
    date: "2025-01-10",
  },
  {
    id: 7,
    title: "Best Practices for Compressing Images Without Losing Quality",
    description:
      "Effective image compression balances file size reduction with visual quality preservation. Discover professional techniques for compressing different image types.",
    image: imageCompression,
    slug: "image-compression-best-practices",
    readTime: "11 min read",
    category: "Optimization",
    date: "2025-01-10",
  },
  {
    id: 8,
    title: "Top Free Tools for Image Conversion (Online and Offline)",
    description:
      "Explore the best free tools available for image format conversion. This review covers online converters, desktop applications, and browser extensions.",
    image: freeTools,
    slug: "top-free-image-conversion-tools",
    readTime: "8 min read",
    category: "Tools Review",
    date: "2025-01-10",
  },
  {
    id: 9,
    title: "HEIC vs JPG: What's the Difference and Which Should You Use?",
    description:
      "HEIC offers superior compression for iPhone users, but JPG remains the universal standard. Learn when to use each format and how to convert between them effectively.",
    image: heicVsJpg,
    slug: "heic-vs-jpg-difference-which-to-use",
    readTime: "7 min read",
    category: "Mobile Photography",
    date: "2025-01-10",
  },
  {
    id: 10,
    title: "Step-by-Step Guide to Converting SVG Files into PNG or JPG",
    description:
      "SVG files are perfect for scalable graphics but often need conversion for broader compatibility. Learn the best methods to convert SVG to raster formats.",
    image: svgToPngGuide,
    slug: "svg-to-png-jpg-conversion-guide",
    readTime: "6 min read",
    category: "Conversion Tips",
    date: "2025-01-10",
  },
  {
    id: 11,
    title: "Why PNG Is Better for Transparent Images (and When Not to Use It)",
    description:
      "PNG's transparency support makes it ideal for logos and graphics, but it's not always the best choice. Learn when PNG excels and when to avoid it.",
    image: pngTransparency,
    slug: "png-transparent-images-when-to-use",
    readTime: "8 min read",
    category: "Image Formats",
    date: "2025-01-10",
  },
  {
    id: 12,
    title: "How to Optimize Images for Faster Website Loading",
    description:
      "Image optimization is crucial for website performance. Discover techniques to reduce file sizes while maintaining quality for better user experience.",
    image: imageOptimization,
    slug: "optimize-images-faster-website-loading",
    readTime: "9 min read",
    category: "Performance",
    date: "2025-01-10",
  },
  {
    id: 13,
    title: "The History of Image Formats: From JPG to WebP",
    description:
      "Explore the evolution of image formats from early bitmap images to modern formats like WebP and AVIF. Understand how technology has shaped digital imagery.",
    image: formatHistory,
    slug: "history-image-formats-jpg-to-webp",
    readTime: "10 min read",
    category: "Modern Formats",
    date: "2025-01-10",
  },
  {
    id: 14,
    title: "5 Common Mistakes People Make When Saving Images",
    description:
      "Avoid these common image-saving mistakes that can degrade quality, increase file sizes, or cause compatibility issues across different platforms.",
    image: commonMistakes,
    slug: "common-mistakes-saving-images",
    readTime: "5 min read",
    category: "Best Practices",
    date: "2025-01-10",
  },
  {
    id: 15,
    title: "Best Image Formats for Social Media: PNG, JPG, or WebP?",
    description:
      "Different social media platforms have different requirements. Learn which image formats work best for Facebook, Instagram, Twitter, and other platforms.",
    image: socialMediaFormats,
    slug: "best-image-formats-social-media",
    readTime: "7 min read",
    category: "Social Media",
    date: "2025-01-10",
  },
];

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>
          Image Conversion Blog - Guides, Tutorials & Format Tips | ConvertCraft
        </title>
        <meta
          name="description"
          content="Expert image conversion guides and tutorials. Learn about PNG vs JPG, WebP benefits, HEIC conversion, SVG optimization, and best practices for image formats and compression."
        />
        <meta
          name="keywords"
          content="image conversion blog, image format guides, png vs jpg comparison, webp format benefits, heic to jpg tutorial, svg to png guide, image compression tips, photo conversion tutorials, image optimization blog, file format comparison,
    png vs jpg which is better, how to convert png to jpg without losing quality, webp vs jpg for website, heic to jpg conversion methods, svg to png conversion guide, best image format for web, image compression techniques, how to optimize images for web,
    when to use png vs jpg, webp format advantages, convert heic from iphone, svg to jpg for printing, image quality preservation, batch image conversion, free image converter tools, online image optimization, photo format best practices,
    image format comparison guide, png transparency explained, jpg compression settings, webp browser compatibility, heic file conversion, svg vector to raster, image size reduction, website image optimization, social media image formats,
    how to choose image format, png for logos, jpg for photos, webp for seo, heic storage benefits, svg scalability, image compression tools, photo conversion software, online image converters, image format tutorials 2025"
        />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Image Conversion Blog - Expert Guides & Tutorials | ConvertCraft"
        />
        <meta
          property="og:description"
          content="Learn everything about image formats and conversion. PNG vs JPG, WebP benefits, HEIC conversion, SVG optimization, and professional image tips."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://ConvertCraft.vercel.app/blog"
        />
        <meta
          property="og:image"
          content="https://ConvertCraft.vercel.app/blog-og-image.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Image Conversion Blog | ConvertCraft"
        />
        <meta
          name="twitter:description"
          content="Expert guides on image formats, conversion techniques, and optimization strategies for better web performance."
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://ConvertCraft.vercel.app/blog" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-20 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-6 text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              ConvertCraft Blog
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90 mb-6">
              Expert guides, tutorials, and insights on image formats,
              conversion techniques, and optimization strategies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
                Image Formats
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
                Conversion Tips
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
                Web Performance
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
                Tools & Reviews
              </span>
            </div>
          </motion.div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-500 text-sm">{post.date}</span>
                    <span className="text-gray-500 text-sm">
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {post.description}
                  </p>

                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                  >
                    <Link to={`/blog/${post.slug}`}>Read Full Article</Link>
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <section className="bg-gradient-to-r from-purple-600  to-blue-600 py-16 mb-6 text-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Convert Your Images?
            </h2>
            <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
              Access all our conversion tools and start optimizing your images
              today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg"
              >
                <Link to="/tools">Explore All Tools</Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="hover:text-purple-700 text-purple-600 px-8 py-3 text-lg"
              >
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default Blog;

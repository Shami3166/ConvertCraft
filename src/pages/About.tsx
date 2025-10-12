import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Zap,
  Shield,
  Download,
  Users,
  Target,
  Globe,
  FileText,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

import faceSwap from "../assets/images/shami2.png";
import office from "../assets/images/office.jpg";
import media from "../assets/images/adventure.jpg";
import { Helmet } from "react-helmet-async";

export default function AboutPage() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Quick",
      description:
        "Processing engine optimization for instant photo conversion",
      color: "from-purple-500 to-blue-500",
    },
    {
      icon: Shield,
      title: "Secure & Safe",
      description:
        "We safely process your files, and after three hours, they are automatically deleted.",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: Download,
      title: "No Installed",
      description:
        "No downloads are required—everything is in your web browser!",
      color: "from-purple-600 to-blue-600",
    },
  ];

  const stats = [
    { number: "1000+", label: "Conversions Daily" },
    { number: "10+", label: "Supported Formats" },
    { number: "99.9%", label: "Uptime Reliability" },
    { number: "24/7", label: "Available Support" },
  ];

  return (
    <>
      <Helmet>
        <title>
          About ConvertCraft - Free Online Image Converter Tools | Our Mission &
          Values
        </title>
        <meta
          name="description"
          content="Learn about ConvertCraft's mission to provide free, fast, and secure image conversion tools. Discover our story, values, and commitment to making file conversion accessible to everyone."
        />
        <meta
          name="keywords"
          content="about convertcraft, image converter company, free file conversion tools, online converter about us, convertcraft mission, image conversion platform, file converter team, png to jpg converter about, heic converter company, webp conversion tools, secure file conversion, free online tools about us, convertcraft values, image converter mission statement, file conversion company"
        />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="About ConvertCraft - Free Online Image Converter Tools"
        />
        <meta
          property="og:description"
          content="Learn about our mission to provide fast, secure, and free image conversion tools for everyone. No registration required."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://ConvertCraft.vercel.app/about"
        />
        <meta
          property="og:image"
          content="https://ConvertCraft.vercel.app/about-og-image.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About ConvertCraft - Our Mission & Values"
        />
        <meta
          name="twitter:description"
          content="Discover how ConvertCraft provides free, fast, and secure image conversion tools for everyone worldwide."
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://ConvertCraft.vercel.app/about" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 text-white overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <Badge
                  variant="secondary"
                  className="bg-white/20 text-white border-white/30 backdrop-blur-sm"
                >
                  About ConvertCraft
                </Badge>

                <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                  Transforming Files
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
                    Empowering Creativity
                  </span>
                </h1>

                <p className="text-lg text-blue-100 leading-relaxed">
                  We created ConvertCraft to put the power of fast and reliable
                  image & media conversions in hands of everyone. From PNG to
                  JPG, GIF to MP4, we’re here for you and you can rely on us to
                  keep quality results.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-purple-600 to-blue-600  text-white shadow-xl px-8 py-3 text-lg"
                  >
                    <Link to="/tools">Explore Our Tools</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="text-purple-600 hover:text-purple-700 py-3 text-lg"
                  >
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </div>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative rounded-3xl text-center justify-center flex overflow-hidden ">
                  <img
                    src={faceSwap}
                    alt="About our tools"
                    className=" h-96 lg:h-96 object-fit"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20"
                >
                  <Sparkles className="h-8 w-8 text-white mb-2" />
                  <p className="text-white font-semibold">Fast Conversions</p>
                  <p className="text-blue-200 text-sm">Under 10 seconds</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 -mt-10">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white">
                    <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-sm mt-2">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={office}
                    alt="Our Mission"
                    className="w-full h-[520px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white p-6 rounded-2xl shadow-lg">
                  <Target className="h-8 w-8 mb-2" />
                  <p className="font-semibold">Our Vision</p>
                  <p className="text-blue-100 text-sm">
                    Simplify file conversions
                  </p>
                </div>
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <Badge
                  variant="outline"
                  className="bg-blue-50 text-blue-600 border-blue-200"
                >
                  Our Mission
                </Badge>

                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Making File Conversion
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                    Accessible to All
                  </span>
                </h2>

                <p className="text-gray-600 leading-relaxed text-lg">
                  What we do Our goal is to create simple, fast and high quality
                  open sourced conversion tools that runs directly in your
                  browser. With no download, there's nothing to install and you
                  can get started instantly - It is as simple as that! If you
                  are a student, designer, engineer or an artist, we have the
                  tools for you.
                </p>

                <ul className="space-y-3">
                  {[
                    "No registration required",
                    "Free basic conversions",
                    "Secure file handling",
                    "24/7 availability",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <Badge
                variant="outline"
                className="bg-white/50 backdrop-blur-sm border-purple-200 text-purple-600 mb-4"
              >
                Why Choose Us
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Designed to
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  {" "}
                  Perform
                </span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                With our unique Professional Edition conversion platform,
                experience the difference.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm h-full">
                    <CardContent className="p-6 text-center">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                      >
                        <feature.icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl mb-3 text-gray-900">
                        {feature.title}
                      </CardTitle>
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

        {/* Team/Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <Badge
                  variant="outline"
                  className="bg-purple-50 text-purple-600 border-purple-200"
                >
                  Our Values
                </Badge>

                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  A Platform You Can
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    Trust
                  </span>
                </h2>

                <p className="text-gray-600 leading-relaxed text-lg">
                  We love making tools that simply work. The platform is being
                  developed by our team: new formats and features are added
                  regularly, your files are completely secure. With an emphasis
                  on speed, ease of use and a ridiculous number of supported
                  devices/websites, you'll be coming back to us for all your
                  conversion needs.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-blue-500" />
                    <span className="text-gray-700">Global Access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-purple-500" />
                    <span className="text-gray-700">10+ Formats</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-blue-500" />
                    <span className="text-gray-700">User-Focused</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-purple-500" />
                    <span className="text-gray-700">Secure</span>
                  </div>
                </div>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={media}
                    alt="Our Values"
                    className="w-full h-[520px] object-cover"
                  />
                </div>
                <div className="absolute -top-6 -left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border">
                  <Users className="h-8 w-8 text-purple-600 mb-2" />
                  <p className="font-semibold text-gray-900">User First</p>
                  <p className="text-gray-600 text-sm">Always improving</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <Card className="py-12 rounded-none mb-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]"></div>
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <Sparkles className="h-16 w-16 mx-auto mb-6 text-white/80" />
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Transform Your Files?
              </h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                Join thousands of users who trust ConvertCraft for their
                conversion needs. Fast, secure, and incredibly easy to use.
              </p>
              <div className=" justify-center">
                <Button
                  asChild
                  className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold shadow-lg"
                >
                  <Link to="/tools">
                    Start Converting Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </Card>
      </div>
    </>
  );
}

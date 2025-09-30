import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FileText,
  Scale,
  UserCheck,
  Shield,
  AlertTriangle,
  CheckCircle,
  XCircle,
  BookOpen,
  Calendar,
  ArrowRight,
  Sparkles,
  Lock,
  Users,
  Download,
  CreditCard,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const TermsConditions = () => {
  const lastUpdated = "September 26, 2025";
  const effectiveDate = "September 26, 2025";

  const quickFacts = [
    {
      icon: CheckCircle,
      title: "Free to Use",
      description: "Basic conversions are completely free",
      color: "text-green-600",
    },
    {
      icon: CheckCircle,
      title: "No Registration Required",
      description: "Start converting immediately",
      color: "text-blue-600",
    },
    {
      icon: CheckCircle,
      title: "File Privacy",
      description: "Files auto-delete after conversion",
      color: "text-purple-600",
    },
    {
      icon: XCircle,
      title: "No Commercial Use",
      description: "Personal use only without license",
      color: "text-red-600",
    },
  ];

  const termsSections = [
    {
      icon: UserCheck,
      title: "Acceptance of Terms",
      color: "from-blue-500 to-cyan-500",
      content: `Whenever you use this converter tool, you will be deemed to have accepted all of the app's terms and conditions. If you continue to use this tool, you will be deemed to have accepted these terms.`,
    },
    {
      icon: Download,
      title: "Service Usage",
      color: "from-purple-500 to-pink-500",
      content: `ConvertCraft provides image conversion services for personal, non-commercial use. You may convert images for your personal projects but may not use the service for commercial purposes without obtaining a license.`,
    },
    {
      icon: Shield,
      title: "User Responsibilities",
      color: "from-green-500 to-emerald-500",
      content: `You agree not to upload any content that is illegal, harmful, or infringes on intellectual property rights. You are responsible for ensuring you have the right to convert any images you upload.`,
    },
    {
      icon: CreditCard,
      title: "Premium Services",
      color: "from-orange-500 to-red-500",
      content: `Premium features may require payment. All payments are final and non-refundable. We reserve the right to modify pricing with 30 days notice to existing subscribers.`,
    },
    {
      icon: Globe,
      title: "Intellectual Property",
      color: "from-indigo-500 to-purple-500",
      content: `The ConvertCraft platform, including all content and software, is protected by intellectual property laws. You may not reverse engineer, decompile, or disassemble any aspect of the service.`,
    },
    {
      icon: Users,
      title: "Termination",
      color: "from-pink-500 to-rose-500",
      content: `We may terminate or suspend access to our service immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users.`,
    },
  ];

  const prohibitedUses = [
    "Reverse engineering or copying the platform",
    "Commercial use without proper licensing",
    "Uploading malicious or illegal content",
    "Automated scraping or data collection",
    "Spamming or abusive behavior",
    "Copyright infringement",
  ];

  const userRights = [
    "Convert images for personal use",
    "Access basic features without registration",
    "Download converted files immediately",
    "Request account deletion at any time",
    "Access converted files for 24 hours",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-8 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl"
            >
              <Scale className="h-10 w-10 text-white" />
            </motion.div>

            <Badge
              variant="secondary"
              className="mb-4 px-4 py-1 text-sm font-medium bg-white/20 text-white border-white/30 backdrop-blur-sm"
            >
              Terms of Service
            </Badge>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Clear & Fair
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Terms of Service
              </span>
            </h1>

            <p className="text-xl text-blue-200 mb-8 leading-relaxed max-w-3xl mx-auto">
              We believe in transparency and fairness. Our terms are designed to
              protect both you and our platform while ensuring the best possible
              experience.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-2 backdrop-blur-sm">
                <Calendar className="h-5 w-5 text-cyan-400" />
                <span>Last Updated: {lastUpdated}</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-2 backdrop-blur-sm">
                <FileText className="h-5 w-5 text-blue-400" />
                <span>Effective: {effectiveDate}</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 -mt-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {quickFacts.map((fact, index) => (
              <motion.div
                key={fact.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="border-0 shadow-xl text-center bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-6">
                    <fact.icon
                      className={`h-8 w-8 mx-auto mb-3 ${fact.color}`}
                    />
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {fact.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {fact.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="sticky top-6 space-y-6"
              >
                <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-blue-600" />
                      Navigation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-64">
                      <div className="space-y-2">
                        {termsSections.map((section) => (
                          <Button
                            key={section.title}
                            variant="ghost"
                            className="w-full justify-start text-sm font-normal h-auto py-3"
                            onClick={() =>
                              document
                                .getElementById(section.title)
                                ?.scrollIntoView({ behavior: "smooth" })
                            }
                          >
                            <section.icon className="h-4 w-4 mr-3" />
                            <span className="text-left">{section.title}</span>
                          </Button>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                  <CardContent className="p-6 text-center">
                    <Lock className="h-8 w-8 mx-auto mb-3 text-white/90" />
                    <h3 className="font-semibold mb-2">Need Help?</h3>
                    <p className="text-blue-100 text-sm mb-4">
                      Contact our legal team for clarification
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      className="text-purple-600 hover:text-purple-700 w-full"
                    >
                      <Link to="/contact">
                        Contact Support <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Terms Sections */}
              {termsSections.map((section, index) => (
                <motion.div
                  key={section.title}
                  id={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="border-0 shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
                    <div
                      className={`bg-gradient-to-r ${section.color} text-white p-6`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                          <section.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-white text-xl">
                            {section.title}
                          </CardTitle>
                          <p className="text-white/80 text-sm">
                            Section {index + 1} of {termsSections.length}
                          </p>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {section.content}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* Tabs Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Tabs defaultValue="allowed" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 bg-gray-100/50 p-1 rounded-xl">
                    <TabsTrigger
                      value="allowed"
                      className="flex items-center gap-2"
                    >
                      <CheckCircle className="h-4 w-4" />
                      What's Allowed
                    </TabsTrigger>
                    <TabsTrigger
                      value="prohibited"
                      className="flex items-center gap-2"
                    >
                      <XCircle className="h-4 w-4" />
                      What's Not Allowed
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="allowed" className="space-y-4 mt-6">
                    <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50">
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-gray-900 mb-4 text-lg flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          Permitted Uses
                        </h3>
                        <ul className="space-y-3">
                          {userRights.map((right, index) => (
                            <li key={index} className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-gray-700">{right}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="prohibited" className="space-y-4 mt-6">
                    <Card className="border-0 shadow-lg bg-gradient-to-br from-red-50 to-pink-50">
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-gray-900 mb-4 text-lg flex items-center gap-2">
                          <XCircle className="h-5 w-5 text-red-600" />
                          Prohibited Activities
                        </h3>
                        <ul className="space-y-3">
                          {prohibitedUses.map((use, index) => (
                            <li key={index} className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                              <span className="text-gray-700">{use}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </motion.div>

              {/* Important Notice */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="border-0 shadow-xl border-l-4 border-l-amber-500 bg-amber-50/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="h-8 w-8 text-amber-600 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-amber-900 mb-3 text-lg">
                          Important Legal Notice
                        </h4>
                        <p className="text-amber-800 leading-relaxed mb-4">
                          These Terms constitute a legally binding agreement
                          between you and ConvertCraft. By using our services,
                          you acknowledge that you have read, understood, and
                          agree to be bound by these Terms.
                        </p>
                        <div className="bg-white/50 rounded-lg p-4">
                          <p className="text-amber-700 text-sm font-medium">
                            <strong>Changes to Terms:</strong> We may modify
                            these Terms at any time. We will provide notice of
                            material changes 30 days before they take effect.
                            Continued use after changes constitutes acceptance.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Acceptance Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-600 to-blue-700 text-white text-center">
                  <CardContent className="p-8">
                    <Sparkles className="h-12 w-12 mx-auto mb-4 text-cyan-400" />
                    <h3 className="text-2xl font-bold mb-3">
                      Ready to Get Started?
                    </h3>
                    <p className="text-blue-200 mb-6 text-lg">
                      By using ConvertCraft, you agree to our Terms of Service
                      and Privacy Policy
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        asChild
                        variant={"outline"}
                        size="lg"
                        className=" text-purple-600 hover:text-purple-700 px-8"
                      >
                        <Link to="/tools">Accept & Start Converting</Link>
                      </Button>
                      <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className=" bg-gradient-to-br hover:text-white from-blue-600 to-blue-600 px-8"
                      >
                        <Link to="/privacy-policy">View Privacy Policy</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <Card className="py-14 rounded-none mb-6  bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Questions About Our Terms?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Our support team is here to help clarify any aspect of our Terms
              of Service. We believe in making legal documents understandable
              for everyone.
            </p>
            <Button
              asChild
              size="lg"
              variant={"outline"}
              className=" text-purple-600 hover:text-purple-700 px-8 py-3 text-lg font-semibold"
            >
              <Link to="/contact">
                Contact Legal Team <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </Card>
    </div>
  );
};

export default TermsConditions;

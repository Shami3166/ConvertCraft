import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Shield,
  Lock,
  Eye,
  FileText,
  Mail,
  Calendar,
  User,
  Database,
  Cookie,
  ArrowRight,
  Sparkles,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  const lastUpdated = "September 26, 2025";
  const effectiveDate = "September 26, 2025";

  const policySections = [
    {
      icon: User,
      title: "Information We Collect",
      color: "from-blue-500 to-cyan-500",
      items: [
        "Only your name and email are required during registration.",

        "Photos or files you upload are processed for conversion.",

        "We collect your usage data and conversion choices to improve our service.",
        "And some technical information like browser type and IP address is also collected.",
      ],
    },
    {
      icon: Database,
      title: "How We Use Your Information",
      color: "from-purple-500 to-pink-500",
      items: [
        "The conversion of your images takes place in a secure environment.",

        "After updating our services, you can work on this in a more efficient way.",

        "If you need any further information, you can contact us by visiting our contact page.",
        "Your data is protected in this environment; we keep your data absolutely safe.",
      ],
    },
    {
      icon: Shield,
      title: "Data Protection",
      color: "from-green-500 to-emerald-500",
      items: [
        " Your files are always transferred with end-to-end encryption.",
        "Once the conversion is complete, the app deletes the conversion file by selecting a new file or file in the download journey.",
        "The servers remain updated to ensure you can easily access them.",
        "Your files are never shared with anyone and remain completely private.",
      ],
    },
    {
      icon: Cookie,
      title: "Cookies & Tracking",
      color: "from-orange-500 to-red-500",
      items: [
        "Essential cookies that help us manage the converter platform correctly.",
        "Analytics cookies are cookies that help us provide users with quality services.",
        "There is no tracking of any kind for advertising.",
      ],
    },
  ];

  const dataRights = [
    {
      icon: CheckCircle,
      title: "Right to Access",
      description: "Request a copy of your personal data",
    },
    {
      icon: CheckCircle,
      title: "Right to Delete",
      description: "Request deletion of your personal information",
    },
    {
      icon: CheckCircle,
      title: "Right to Correct",
      description: "Update or correct inaccurate data",
    },
    {
      icon: CheckCircle,
      title: "Right to Portability",
      description: "Receive your data in a readable format",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-8 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <Badge
              variant="secondary"
              className="mb-4 px-4 py-1 text-sm font-medium bg-white/20 text-white border-white/30"
            >
              Privacy & Security
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Your Privacy is Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-200">
                Priority
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              In this converter, we keep your data completely secure and you can
              see how safe your data is and how your trust is maintained.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-blue-200">
                <Calendar className="h-5 w-5" />
                <span>Last Updated: {lastUpdated}</span>
              </div>
              <div className="flex items-center gap-2 text-blue-200">
                <FileText className="h-5 w-5" />
                <span>Effective: {effectiveDate}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16 -mt-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            <Card className="border-0 shadow-xl text-center bg-gradient-to-br from-green-50 to-emerald-50">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Lock className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Files Auto-Delete
                </h3>
                <p className="text-gray-600 text-sm">
                  All uploaded files are automatically deleted after conversion
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl text-center bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  No Data Selling
                </h3>
                <p className="text-gray-600 text-sm">
                  We never sell or share your data with third parties
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl text-center bg-gradient-to-br from-purple-50 to-pink-50">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  GDPR Compliant
                </h3>
                <p className="text-gray-600 text-sm">
                  Fully compliant with global privacy regulations
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Main Policy Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="sticky top-6"
              >
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg">Policy Sections</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-64">
                      <div className="space-y-2">
                        {policySections.map((section) => (
                          <Button
                            key={section.title}
                            variant="ghost"
                            className="w-full justify-start text-sm font-normal"
                            onClick={() =>
                              document
                                .getElementById(section.title)
                                ?.scrollIntoView({ behavior: "smooth" })
                            }
                          >
                            <section.icon className="h-4 w-4 mr-2" />
                            {section.title}
                          </Button>
                        ))}
                        <Button
                          variant="ghost"
                          className="w-full justify-start text-sm font-normal"
                          onClick={() =>
                            document
                              .getElementById("rights")
                              ?.scrollIntoView({ behavior: "smooth" })
                          }
                        >
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Your Rights
                        </Button>
                        <Button
                          variant="ghost"
                          className="w-full justify-start text-sm font-normal"
                          onClick={() =>
                            document
                              .getElementById("contact")
                              ?.scrollIntoView({ behavior: "smooth" })
                          }
                        >
                          <Mail className="h-4 w-4 mr-2" />
                          Contact Us
                        </Button>
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>

                {/* Quick Action */}
                <Card className="border-0 shadow-lg mt-6 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold mb-2">Questions?</h3>
                    <p className="text-blue-100 text-sm mb-4">
                      We're here to help with any privacy concerns
                    </p>
                    <Button
                      asChild
                      variant="secondary"
                      className="bg-white text-blue-600 hover:bg-gray-100 w-full"
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
              {/* Policy Sections */}
              {policySections.map((section, index) => (
                <motion.div
                  key={section.title}
                  id={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="border-0 shadow-lg overflow-hidden">
                    <div
                      className={`bg-gradient-to-r ${section.color} text-white p-6`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                          <section.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-white text-xl">
                            {section.title}
                          </CardTitle>
                          <p className="text-white/80 text-sm">
                            How we handle this aspect of your data
                          </p>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <ul className="space-y-3">
                        {section.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-start gap-3"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* Your Rights Section */}
              <motion.div
                id="rights"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50">
                  <CardHeader className="text-center">
                    <CardTitle className="flex items-center justify-center gap-2 text-2xl text-gray-900">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                      Your Data Rights
                    </CardTitle>
                    <p className="text-gray-600">
                      You have full control over your personal information
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      {dataRights.map((right) => (
                        <div
                          key={right.title}
                          className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm"
                        >
                          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <right.icon className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">
                              {right.title}
                            </h4>
                            <p className="text-gray-600 text-sm">
                              {right.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Important Notice */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="border-0 shadow-lg border-l-4 border-l-amber-500 bg-amber-50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-amber-900 mb-2">
                          Important Notice
                        </h4>
                        <p className="text-amber-800 text-sm leading-relaxed">
                          We keep updating our privacy policy from time to time.
                          Whenever we have any new update, we will update it on
                          this page which you can see on this app at any time.
                          Now if you use our converter tool even after the new
                          update, then it means that you agree to our policies.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <Card className="py-14 mb-6 rounded-none bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Trust & Transparency
            </h2>
            <p className="text-blue-200 text-lg mb-8">
              We're committed to protecting your privacy while providing the
              best image conversion experience. Your trust is the foundation of
              our service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant={"outline"}
                className="text-purple-600 hover:text-purple-700 px-8"
              >
                <Link to="/tools">Start Converting Securely</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className=" bg-gradient-to-br hover:text-white from-blue-600 to-blue-600 px-8"
              >
                <Link to="/contact">Ask Privacy Questions</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </Card>
    </div>
  );
};

export default PrivacyPolicy;

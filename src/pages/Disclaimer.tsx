import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  AlertTriangle,
  Shield,
  FileText,
  Zap,
  Download,
  Globe,
  Sparkles,
  CheckCircle,
  BookOpen,
  Calendar,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const DisclaimerPage = () => {
  const lastUpdated = "September 26, 2025";

  const disclaimerPoints = [
    {
      icon: AlertTriangle,
      title: "Service Limitations",
      description:
        "ConvertCraft provides conversion services 'as is' without warranties",
      color: "from-purple-500 to-blue-500",
      type: "warning",
    },
    {
      icon: Shield,
      title: "No Liability",
      description:
        "We are not liable for any damages resulting from service use",
      color: "from-blue-500 to-purple-500",
      type: "important",
    },
    {
      icon: Globe,
      title: "Third-Party Content",
      description: "We are not responsible for content converted by users",
      color: "from-purple-600 to-blue-600",
      type: "info",
    },
    {
      icon: Zap,
      title: "Service Availability",
      description: "We don't guarantee uninterrupted or error-free service",
      color: "from-blue-600 to-purple-600",
      type: "notice",
    },
  ];

  const legalSections = [
    {
      icon: FileText,
      title: "General Disclaimer",
      content: `ConvertCraft provides image conversion services on an "as is" and "as available" basis. We make no representations or warranties of any kind, express or implied, regarding the operation of our services or the information, content, or materials included therein.`,
      emphasis:
        "You expressly agree that your use of this service is at your sole risk.",
    },
    {
      icon: Download,
      title: "Conversion Accuracy",
      content: `While we strive for high-quality conversions, we do not warrant that the results will be accurate, reliable, or error-free. The quality of converted files may vary based on original file quality, format specifications, and other technical factors.`,
      emphasis:
        "Always verify converted files before using them in important projects.",
    },
    {
      icon: Shield,
      title: "Limitation of Liability",
      content: `To the fullest extent permitted by applicable law, ConvertCraft shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.`,
      emphasis:
        "Our maximum liability shall not exceed the amount paid by you to us.",
    },
    {
      icon: Globe,
      title: "Third-Party Responsibility",
      content: `We are not responsible for any content that users convert using our platform. Users are solely responsible for ensuring they have the right to convert and use any files uploaded to our service.`,
      emphasis: "You must have appropriate rights to all content you convert.",
    },
  ];

  const userResponsibilities = [
    "Verify converted file quality before use",
    "Ensure you have rights to convert uploaded files",
    "Backup important files before conversion",
    "Use converted files responsibly and legally",
    "Report any issues immediately",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-7 bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:60px_60px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl"
            >
              <AlertTriangle className="h-10 w-10 text-white" />
            </motion.div>

            <Badge
              variant="secondary"
              className="mb-4 px-4 py-1 text-sm font-medium bg-white/20 text-white border-white/30 backdrop-blur-sm"
            >
              Important Legal Notice
            </Badge>

            <h1 className="text-4xl lg:text-6xl flex text-center justify-center gap-3 font-bold mb-6 leading-tight">
              Legal
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
                Disclaimer
              </span>
            </h1>

            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Please read this disclaimer carefully before using ConvertCraft.
              Your use of our service constitutes acceptance of these terms.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-2 backdrop-blur-sm">
                <Calendar className="h-5 w-5 text-blue-300" />
                <span>Last Updated: {lastUpdated}</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-2 backdrop-blur-sm">
                <BookOpen className="h-5 w-5 text-purple-300" />
                <span>Legal Document</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Disclaimer Points */}
      <section className="py-16 -mt-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {disclaimerPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card
                  className={`border-0 shadow-xl text-center bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 border-l-4 ${
                    point.type === "warning"
                      ? "border-l-purple-500"
                      : point.type === "important"
                      ? "border-l-blue-500"
                      : point.type === "info"
                      ? "border-l-purple-600"
                      : "border-l-blue-600"
                  }`}
                >
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${point.color} rounded-xl flex items-center justify-center mx-auto mb-4`}
                    >
                      <point.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {point.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Legal Sections */}
            {legalSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-xl text-gray-900">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                        <section.icon className="h-5 w-5 text-white" />
                      </div>
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed text-lg mb-4">
                      {section.content}
                    </p>
                    <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 rounded-r">
                      <p className="text-blue-800 font-medium">
                        {section.emphasis}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* User Responsibilities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-purple-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl text-gray-900">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                    Your Responsibilities
                  </CardTitle>
                  <p className="text-gray-600">
                    As a user of ConvertCraft, you agree to:
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {userResponsibilities.map((responsibility, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 p-3 bg-white/50 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            {/* Important Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-0 mb-4 shadow-xl border-l-4 border-l-purple-500 bg-purple-50/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="h-8 w-8 text-purple-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-purple-900 mb-3 text-lg">
                        Critical Legal Notice
                      </h4>
                      <p className="text-purple-800 leading-relaxed mb-4">
                        This disclaimer limits our liability and outlines
                        important legal terms that affect your rights. By using
                        ConvertCraft, you acknowledge that you have read,
                        understood, and agree to be bound by this disclaimer.
                      </p>
                      <div className="bg-white/50 rounded-lg p-4">
                        <p className="text-purple-700 text-sm font-medium">
                          <strong>Legal Advice:</strong> This disclaimer is not
                          legal advice. If you require legal guidance regarding
                          the use of our services, please consult with a
                          qualified legal professional.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Acceptance Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="border-0 rounded-none shadow-xl bg-gradient-to-br from-purple-600 to-blue-600 text-white text-center">
            <CardContent className="p-8">
              <Sparkles className="h-12 w-12 mx-auto mb-4 text-blue-400" />
              <h3 className="text-2xl font-bold mb-3">
                Understanding Your Rights
              </h3>
              <p className="text-blue-200 mb-6 text-lg">
                By proceeding to use ConvertCraft, you confirm that you have
                read and understood this disclaimer
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  variant={"outline"}
                  size="lg"
                  className=" text-purple-600 hover:text-purple-700 px-8"
                >
                  <Link to="/tools">I Understand & Continue</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white bg-gradient-to-r from-purple-500 to-blue-600 hover:bg-white/10 px-8"
                >
                  <Link to="/contact">Ask Questions</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </div>
  );
};

export default DisclaimerPage;

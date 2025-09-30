import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated 404 Number */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative mb-8"
        >
          <div className="text-9xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
            404
          </div>
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <AlertCircle className="w-32 h-32 text-red-400 opacity-20" />
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Oops! Page Not Found
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            The page you're looking for seems to have wandered off into the
            digital void. Don't worry, even the best explorers sometimes take
            wrong turns.
          </p>

          {/* Animated Illustration */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mb-8"
          >
            <svg
              width="200"
              height="200"
              viewBox="0 0 200 200"
              className="mx-auto"
            >
              {/* Background Circle */}
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="#f0f9ff"
                stroke="#e0f2fe"
                strokeWidth="2"
              />

              {/* Magnifying Glass */}
              <circle
                cx="120"
                cy="80"
                r="30"
                fill="none"
                stroke="#60a5fa"
                strokeWidth="3"
              />
              <line
                x1="140"
                y1="100"
                x2="170"
                y2="130"
                stroke="#60a5fa"
                strokeWidth="3"
              />

              {/* Floating Elements */}
              <motion.circle
                animate={{
                  cx: [70, 90, 70],
                  cy: [60, 50, 60],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                cx="80"
                cy="60"
                r="8"
                fill="#8b5cf6"
              />
              <motion.rect
                animate={{
                  x: [60, 80, 60],
                  y: [120, 110, 120],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                x="70"
                y="120"
                width="12"
                height="12"
                fill="#06b6d4"
                rx="2"
              />
              <motion.polygon
                animate={{
                  points: "100,140 110,150 90,150",
                  transform: ["rotate(0)", "rotate(10)", "rotate(0)"],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                points="100,140 110,150 90,150"
                fill="#10b981"
              />
            </svg>
          </motion.div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl shadow-lg transition-all duration-300"
              >
                <Link to="/" className="flex items-center gap-2">
                  <Home className="w-5 h-5" />
                  Back to Home
                </Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-gray-300 hover:border-purple-300 hover:bg-purple-50 text-gray-700 px-8 py-3 rounded-xl transition-all duration-300"
              >
                <Link to="/tools" className="flex items-center gap-2">
                  <ArrowLeft className="w-5 h-5" />
                  Explore Tools
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Search Suggestion */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto border border-gray-200/50 shadow-sm"
          >
            <div className="flex items-center gap-3 text-gray-600">
              <Search className="w-5 h-5 text-purple-500" />
              <div className="text-left">
                <p className="font-semibold">Can't find what you need?</p>
                <p className="text-sm">Try searching or check our sitemap</p>
              </div>
            </div>
          </motion.div>

          {/* Fun Facts */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-8 text-sm text-gray-500"
          >
            <p>
              Fun fact: The 404 error is named after Room 404 at CERN where the
              web was invented
            </p>
          </motion.div>
        </motion.div>

        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-1/4 left-1/4 w-20 h-20 bg-purple-200 rounded-full blur-xl opacity-30"
          />
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-blue-200 rounded-full blur-xl opacity-30"
          />
          <motion.div
            animate={{
              x: [0, 60, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-2/3 right-1/3 w-12 h-12 bg-cyan-200 rounded-full blur-xl opacity-30"
          />
        </div>
      </div>
    </div>
  );
}

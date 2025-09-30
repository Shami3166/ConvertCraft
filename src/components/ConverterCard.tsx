import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Zap, Palette, Video, FileText } from "lucide-react";

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

interface ConverterCardProps {
  converter: Converter;
  onClick: () => void;
}

const hoverVariants: Variants = {
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const ConverterCard = ({ converter, onClick }: ConverterCardProps) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "image":
        return "from-blue-500 to-cyan-500";
      case "video":
        return "from-purple-500 to-pink-500";
      case "document":
        return "from-green-500 to-emerald-500";
      default:
        return "from-gray-500 to-slate-500";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "image":
        return <Palette className="w-4 h-4" />;
      case "video":
        return <Video className="w-4 h-4" />;
      case "document":
        return <FileText className="w-4 h-4" />;
      default:
        return <Zap className="w-4 h-4" />;
    }
  };

  return (
    <motion.div variants={hoverVariants} whileHover="hover">
      <Card
        className="group cursor-pointer bg-white/80 backdrop-blur-sm border-0 shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 h-full"
        onClick={onClick}
      >
        <CardContent className="p-6 relative">
          {/* Category Badge */}
          <div className="flex justify-between items-start mb-4">
            <Badge
              variant="secondary"
              className={`bg-gradient-to-r ${getCategoryColor(
                converter.category || "image"
              )} text-white border-0`}
            >
              {getCategoryIcon(converter.category || "image")}
              {converter.category?.toUpperCase() || "IMAGE"}
            </Badge>
            {converter.popularity && (
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <Zap className="w-3 h-3 text-yellow-500" />
                {converter.popularity}%
              </div>
            )}
          </div>

          {/* Title and Description */}
          <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
            {converter.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {converter.description}
          </p>

          {/* Format Indicator */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono bg-blue-100 text-blue-600 px-2 py-1 rounded">
                {converter.sourceFormat?.toUpperCase()}
              </span>
              <ArrowRight className="w-3 h-3 text-gray-400" />
              <span className="text-xs font-mono bg-green-100 text-green-600 px-2 py-1 rounded">
                {converter.targetFormat?.toUpperCase()}
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            variant="ghost"
            className="w-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white transition-all duration-300"
          >
            Convert Now
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </CardContent>

        {/* Hover Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      </Card>
    </motion.div>
  );
};

export default ConverterCard;

import React from "react";
import { Link } from "react-router-dom";

interface FeatureCardProps {
  planName: string;
  price: string;
  features: string[];
  isHighlighted?: boolean;
}

// Reusable Feature Card
const FeatureCard: React.FC<FeatureCardProps> = ({
  planName,
  price,
  features,
  isHighlighted = false,
}) => {
  return (
    <div
      className={`bg-white rounded-3xl shadow-xl border-2 transition-all duration-300 ${
        isHighlighted
          ? "border-purple-500 transform scale-105"
          : "border-transparent hover:border-gray-200"
      }`}
    >
      <div className="p-8">
        <h2 className="text-xl font-bold text-gray-900">{planName}</h2>
        <p className="mt-4 text-4xl font-bold text-gray-700">{price}</p>
        <p className="mt-2 text-sm text-gray-500">forever free</p>
        <ul className="mt-6 space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg
                className="h-6 w-6 text-green-500 mr-2 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707-9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-8 bg-gray-50 rounded-b-3xl">
        {isHighlighted ? (
          <Link
            to="/login"
            className="w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 cursor-pointer text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 shadow-lg flex items-center justify-center"
          >
            Get Started Free
          </Link>
        ) : (
          <button
            className="w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 bg-gray-200 text-gray-700 cursor-not-allowed"
            disabled
          >
            Current Plan
          </button>
        )}
      </div>
    </div>
  );
};

const Pricing = () => {
  const plans = [
    {
      planName: "Guest User",
      price: "Free",
      features: [
        "100MB daily conversion limit",
        "All file formats supported",
        "Standard conversion quality",
        "Perfect for occasional use",
      ],
      isHighlighted: false,
    },
    {
      planName: "Registered User",
      price: "Free",
      features: [
        "800MB daily conversion limit",
        "All file formats supported",
        "High quality conversions",
        "Unlimited conversions",
        "Conversion history",
        "Priority support",
      ],
      isHighlighted: true,
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 font-sans p-4">
      {/* Hero Section with Gradient */}
      <div className="w-full text-center py-16 md:py-24 bg-gradient-to-r from-blue-600 to-purple-700 rounded-b-3xl text-white shadow-xl">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-lg">
          Completely Free Forever
        </h1>
        <p className="mt-4 text-lg md:text-xl font-light max-w-2xl mx-auto opacity-90">
          No hidden fees, no subscriptions. Enjoy powerful file conversions
          completely free!
        </p>
      </div>

      {/* Feature Cards */}
      <main className="-mt-16 w-full max-w-4xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <FeatureCard key={index} {...plan} />
          ))}
        </div>
      </main>

      {/* Support Section */}
      <div className="w-full max-w-4xl mt-16 text-center text-gray-600">
        <p>
          Want more features?
          <span>
            <Link
              className="text-blue-600 font-semibold cursor-pointer hover:underline"
              to="/contact"
            >
              Contact us
            </Link>{" "}
            with your suggestions!
          </span>
        </p>
      </div>
    </div>
  );
};

export default Pricing;

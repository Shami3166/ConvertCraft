/* eslint-disable @typescript-eslint/no-explicit-any */
import { getConversionHistory, type Conversion } from "@/api/userApi";
import { useAuth } from "@/context/AuthContext";
import { useState, useEffect } from "react";

const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};

const History = () => {
  const [history, setHistory] = useState<Conversion[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { isAuthenticated, userRole } = useAuth(); // ✅ Use isAuthenticated instead of token

  useEffect(() => {
    console.log("🔐 History page - Auth status:", {
      isAuthenticated,
      userRole,
    });

    if (isAuthenticated) {
      const fetchHistory = async () => {
        try {
          console.log("📡 Fetching conversion history...");
          const data = await getConversionHistory();
          console.log("✅ History data received:", data);

          setHistory(data);
          setError(null);
        } catch (e: any) {
          console.error("❌ Error fetching history:", e);
          setError("Failed to fetch conversion history.");
          setHistory([]);
        } finally {
          setIsLoading(false);
        }
      };

      fetchHistory();
    } else {
      setIsLoading(false);
      setError("Please log in to view your conversion history.");
      setHistory([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]); // ✅ Remove token dependency

  const renderContent = () => {
    if (!isAuthenticated) {
      return (
        <div className="text-center text-gray-500 py-16">
          <p className="text-xl font-semibold">You are not logged in.</p>
          <p className="mt-2">
            Please log in to view your past conversions and manage your plan.
          </p>
        </div>
      );
    }

    if (isLoading) {
      return (
        <div className="flex justify-center items-center py-16">
          <svg
            className="animate-spin h-10 w-10 text-pink-500"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.961l1-1.67z"
            ></path>
          </svg>
          <span className="ml-4 text-lg text-gray-600">Loading history...</span>
        </div>
      );
    }

    if (error) {
      return (
        <div className="text-center text-red-500 py-16">
          <p className="text-xl font-semibold">{error}</p>
          <p className="mt-2 text-gray-500">
            Please try again later or contact support.
          </p>
        </div>
      );
    }

    if (history.length === 0) {
      return (
        <div className="text-center text-gray-500 py-16">
          <p className="text-xl font-semibold">No conversion history found.</p>
          <p className="mt-2">
            Start converting files and they will appear here!
          </p>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        {history.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-center justify-between transition-transform transform hover:scale-105 duration-300"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center bg-purple-100 text-purple-600 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7v4a1 1 0 001 1h2a1 1 0 001-1V7m0 0a2 2 0 012-2h2a2 2 0 012 2v2m-6 0h2m-2 0a2 2 0 00-2 2v2a2 2 0 002 2h2m0-6h2m-2 0a2 2 0 01-2-2h-2a2 2 0 01-2 2m6 0h2m-2 0a2 2 0 00-2-2v-2a2 2 0 002-2h2a2 2 0 002-2v-2"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.fileName}
                </h3>
                <p className="text-sm text-gray-500">
                  {item.originalFormat} → {item.convertedFormat}
                </p>
                {/* ✅ FIXED: Safe admin view */}
                {userRole === "admin" && item.user && (
                  <p className="text-xs text-gray-400">
                    By: {item.user.name || "Unknown"}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 mt-4 md:mt-0">
              <div className="text-center">
                <p className="text-sm font-medium text-gray-900">Size</p>
                <p className="text-xs text-gray-500">
                  {formatFileSize(item.size)}
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm font-medium text-gray-900">Date</p>
                <p className="text-xs text-gray-500">
                  {new Date(item.date).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 text-gray-900 font-sans p-4">
      <div className="w-full text-center py-16 md:py-24 bg-gradient-to-r from-pink-500 to-purple-600 rounded-b-3xl text-white shadow-xl">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Your Conversion History
        </h1>
        <p className="mt-4 text-lg md:text-xl font-light max-w-2xl mx-auto">
          A list of all your past file conversions.
        </p>
      </div>
      <main className="-mt-16 w-full max-w-4xl px-4">
        <div className="bg-white shadow-2xl rounded-3xl p-8 md:p-12 border border-gray-200">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default History;

import { Toaster } from "@/components/ui/sonner";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <AppRoutes />

      <Toaster position="top-right" richColors />
    </>
  );
}

export default App;

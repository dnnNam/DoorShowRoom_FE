import AppRoutes from "./Routes/AppRoutes";
import "./App.css";
import { Toaster } from "sonner";
function App() {
  return (
    <>
      <AppRoutes />
      <Toaster position="top-right" richColors />
    </>
  );
}

export default App;

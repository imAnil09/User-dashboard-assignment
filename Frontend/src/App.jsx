import { Toaster } from "react-hot-toast";
import AppRoutes from "@app/routes/AppRoutes";

function App() {
  return (
    <>
      <AppRoutes />
      <Toaster position="bottom-center" />
    </>
  );
}

export default App;

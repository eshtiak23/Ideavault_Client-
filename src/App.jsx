import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">

      <Navbar />

      <main className="min-h-[calc(100vh-160px)]">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
}

export default App;
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <div className="bg-background h-screen relative">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

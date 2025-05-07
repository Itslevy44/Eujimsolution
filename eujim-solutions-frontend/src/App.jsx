import React from "react";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <main style={{ minHeight: "80vh", padding: "2rem", textAlign: "center" }}>
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
};

export default App;
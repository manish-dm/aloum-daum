import React from "react";
import "./App.css";
import Routes from "./routes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/footer/Footer";
import NavMenu from "./components/navmenu/NavMenu";
import Navbar from "./components/navbar/Navbar";

function App() {

  return (
    <div className="App">
      <NavMenu />
      <Navbar />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;

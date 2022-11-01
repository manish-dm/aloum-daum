import React from "react";
import "./App.css";
import Routes from "./routes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/footer/Footer";
import Newsletter from './components/newsletter/Newsletter'

function App() {

  return (
    <div className="App">
      <Routes />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;

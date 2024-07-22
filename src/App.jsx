import { useState, createContext, useContext, useEffect } from "react";
import Home from "./Components/Home.jsx";
import Footer from "./Components/Footer";
import UploadPage from "./Components/UploadPage.jsx";
import ChartPage from "./Components/ChartPage.jsx";
import Header from "./Components/Header.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import FAQ from "./Components/FAQ.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

export const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

const App = () => {
  const [theme, setTheme] = useState("light");
  const [currentPage, setCurrentPage] = useState("home");
  const [fadeIn, setFadeIn] = useState(true);

  const chartNames = ["Bar Chart", "Line Chart"]; //targel bet #1 fake data

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    AOS.init({ duration: 2350 });
  }, []);

  const handlePageChange = (page, options = {}) => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrentPage(page);
      setFadeIn(true);
      if (options.scrollToBottom) {
        //for About Sign up to scroll down
        setTimeout(() => {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        }, 50);
      } else {
        // for other pages to start from the top
        window.scrollTo(0, 0);
      }
    }, 300);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home setCurrentPage={handlePageChange} />;
      case "chartPage":
        return (
          <ChartPage data={chartNames} setCurrentPage={handlePageChange} />
        );
      case "uploadPage":
        return <UploadPage setCurrentPage={handlePageChange} />;
      case "about":
        return <About setCurrentPage={handlePageChange} />;
      case "contact":
        return <Contact setCurrentPage={handlePageChange} />;
      case "faq":
        return <FAQ />;
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        className={`flex flex-col min-h-screen ${
          theme === "light" ? "bg-customBlue " : "bg-customDark"
        }`}
      >
        <Header setCurrentPage={handlePageChange} />
        <div
          className={`flex-grow transition-opacity duration-300 ${
            fadeIn ? "opacity-100" : "opacity-0"
          }`}
        >
          {renderPage()}
        </div>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;

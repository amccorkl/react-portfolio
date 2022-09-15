import React, { useState } from 'react';

import NavBar from "./NavBar";
// import Footer from "./Footer";
import Home from "./pages/Home";
import About from "./pages/About"
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');  
  
  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    return <Resume />;
  };
  
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />

      {renderPage()}
    </div>
  )

}

export default PortfolioContainer;
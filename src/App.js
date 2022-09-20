import React, { useState } from 'react';

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./pages/About"
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import "./App.css";


function App() {
  const [currentPage, setCurrentPage] = useState('About');
  const renderPage = () => {
    if (currentPage === "Contact") {
      return <Contact />;
    }
    else if (currentPage === "Projects") {
      return <Projects />;
    }
    else if (currentPage === "Resume") {
      return <Resume />;
    }
    else if (currentPage === "About") {
      return <About />;
    }
  };
  
  const handlePageChange = (page) => setCurrentPage(page);
  console.log(currentPage);

  return (
    <div className="container">
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );

}

export default App;
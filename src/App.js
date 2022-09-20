import React, { useState } from 'react';

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
// import Home from "./pages/Home";
import About from "./pages/About"
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

function App () {
  const [currentPage, setCurrentPage] = useState('About');  // "About"
  // home is the default page, should I change it to About since its basically the same?
  const renderPage = () => {
    // if (currentPage === "Home") {
    //   return <Home />;
    // }
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
      <main>
        {renderPage()}
      </main>
      <br />
      <Footer />
    </div>
  );

}

export default App;
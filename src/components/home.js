import React, { useState, useEffect } from "react";

const Home = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        // Scrolling up → Show header
        setShowHeader(true);
      } else if (currentScrollY > 300) {
        // Scrolling down → Hide header
        setShowHeader(false);
      }

      // Ensure header reappears when at the very top
      if (currentScrollY === 0) {
        setShowHeader(true);
      }

      // Update lastScrollY
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div>
      {/* Embedded CSS */}
      <style>
        {`
          .app {
            font-family: Arial, sans-serif;
          }

          .header {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #333;
            color: white;
            text-align: center;
            position: sticky;
            top: 0;
            width: 100%;
            height: 300px;
            transition: transform 0.3s ease;
            z-index: 1000;
          }

          .header.hide {
            transform: translateY(-100%); /* Hide header by moving it up */
          }

          main {
            padding-top: 20px; /* Add padding to account for the header height */
          }

          p {
            margin: 100px;
          }
        `}
      </style>

      {/* Component JSX */}
      <div className="app">
        <header className={`header ${!showHeader ? "hide" : ""}`}>
          <h1>Header</h1>
        </header>
        <main>
          {Array.from({ length: 20 }).map((_, index) => (
            <p key={index}>
              {index + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Home;

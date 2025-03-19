const Zoom = () => {
  return (
    <div>
      <p>Zoom</p>
    </div>
  );
};

export default Zoom;

// import React, { useState, useEffect } from "react";

// const Home = () => {
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [showHeader, setShowHeader] = useState(true);

// useEffect(() => {
//   const handleScroll = () => {
//     if (window.scrollY < lastScrollY) {
//       // Scrolling up → Show header
//       setShowHeader(true);
//     } else if (window.scrollY > 320) {
//       // Scrolling down → Hide header
//       setShowHeader(false);
//     }

//     // Ensure header reappears when at the very top
//     if (window.scrollY === 0) {
//       setShowHeader(true);
//     }

//     setLastScrollY(window.scrollY);
//   };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]); // Depend on lastScrollY so it updates properly

//   return (
//     <div style={{ backgroundColor: "wheat", minHeight: "100vh" }}>
//       {/* Fixed Header */}
//       <div
//         style={{
//           position: "relative",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: 300,
//           backgroundColor: "#A4FFEE",
//           fontSize: 40,
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           fontWeight: 700,
//           transition: "transform 0.3s ease-in-out",
//           transform: showHeader ? "translateY(0)" : "translateY(-100%)",
//         }}
//       >
//         Header
//       </div>

//       {/* Content Section - Pushed Down Correctly */}
//       <div
//         className="App-header"
//         style={{ padding: "20px" }} // Ensure content is never hidden under header
//       >
//         {[...Array(50)].map((_, index) => (
//           <p key={index}>
//             {index + 1} Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//           </p>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;

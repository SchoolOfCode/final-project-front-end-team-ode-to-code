
import Navbar from "./Navbar";
import Footer from "./Footer";
import React from "react";

function Layout({children}:{children:React.ReactNode}) {
  return (
    <div>
        <Navbar />
            {children}
        <Footer />
    </div>
  )
}

export default Layout
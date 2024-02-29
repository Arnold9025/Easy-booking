import React, { useEffect } from "react";
import IndexNavbar from "../components/Navbars/IndexNavbar.js";
import IndexHeader from "../components/Headers/IndexHeader.js";
import DarkFooter from "../components/Footers/DarkFooter.js";

function DefaultPage(props) {
  useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;

    // Cleanup effect when the component unmounts
    return () => {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []); // An empty dependency array means this effect runs only once on component mount



  return (
    <>
      <IndexNavbar updateAppStatus={props}/>
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
                </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default DefaultPage;

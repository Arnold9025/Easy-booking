/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.scrollY / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="orange">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("../../assets/img/header.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              width={"300px"}
              src={require("../../assets/img/now-logo.png")}
            ></img>
            <h1 className="h1-seo">Rservez avec nous</h1> 
            <h3>Ici c'est vos reves que nous realisons</h3>
          </div>
          <h6 className="category category-absolute">
           
          </h6>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;

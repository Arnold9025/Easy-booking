/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <nav>
            <ul>
              <li>
                <a
                  href="https://#"
                  target="_blank"
                >
                  Creative Tim
                </a>
              </li>
              <li>
                <a
                  href="https://#"
                  target="_blank"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="https://#"
                  target="_blank"
                >
                  Blog
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed by{" "}
          
          and Coded by{" "}
          <a
            href="https://#"
            target="_blank"
          >
            ISI promotion Summer 2022, groupe B
          </a>
          .
        </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;

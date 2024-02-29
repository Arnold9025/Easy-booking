/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function TransparentFooter() {
  return (
    <footer className="footer">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="https:#"
                target="_blank"
              >
                Creative Tim
              </a>
            </li>
            <li>
              <a
                href="http:#"
                target="_blank"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="http:#"
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
  );
}

export default TransparentFooter;

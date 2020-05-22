
import React, { Component } from "react";
import { Grid } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Grid fluid>
          <nav className="pull-left">
            <ul>
              <li>
                <a href="#pablo">Home</a>
              </li>
              <li>
                <a href="#pablo">FAQ</a>
              </li>
              <li>
                <a href="#pablo">Contact us</a>
              </li>
              <li>
                <a href="#pablo">News & Blog</a>
              </li>
            </ul>
          </nav>
          <p className="copyright pull-right">
            &copy; {new Date().getFullYear()}{" "}
            <a href="http://www.cpeep.com">
              D'VTU Credit Ltd
            </a>
            , made with love for a better web by
            <a href="http://www.olusanya.tech">
              {" "}Olusanya Akinbinu
            </a>
          </p>
        </Grid>
      </footer>
    );
  }
}

export default Footer;

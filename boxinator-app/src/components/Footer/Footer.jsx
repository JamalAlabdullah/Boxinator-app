import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footerStyle">
      <MDBFooter className="text-center text-lg-start text-muted">
        <section className="title">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <MDBIcon icon="gem" className=" me-3" />
                  Boxinator
                </h6>
                <p>
                  <img
                    className="logoImage"
                    src="./images/logo2.png"
                    alt="box_image"
                  />
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <MDBIcon icon="home" className="me-1" />
                  Noroff -Oslo, Norway
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-1" />
                  boxinator.group@gmail.com
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2022 Copyright: <bre/>
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            BoxinatorGroup-Noroff
          </a>
        </div>
      </MDBFooter>
    </div>
  );
};

export default Footer;

import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link } from "react-router-dom";
import logo from '../../Images/logo.png'



const FooterPagePro = () => {
  return (
    <MDBFooter style={{background:"#878a8f"}}   className="font-small lighten-3 pt-4 mt-4">
      <MDBContainer  className="text-center text-md-left">
        <MDBRow className="my-4">
          <MDBCol md="4" lg="4">
            <h5 className="text-uppercase mb-4 font-weight-bold">
            <img src={logo} width="50" height="50" />
            Online Shoes
            </h5>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2" lg="2" className="ml-auto">
            <h5 className="text-uppercase mb-4 font-weight-bold">Pages</h5>
            <ul className="list-unstyled">
              <p>
            <Link to="/"><span>Home</span></Link>
              </p>
              <p>
              <Link to="/shop"><span>Shop</span></Link>
              </p>
              <p>
              <Link to="/services"><span>Services</span></Link>
              </p>
              <p>
              <Link to="/about"><span>About</span></Link>
              </p>
              <p>
              <Link to="/contact"><span>Contact</span></Link>
              </p>
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="5" lg="3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Address</h5>
            <p>
              <i className="fa fa-home mr-3" />Near Char-Minar Chorangi Bahadhurabad (Karachi)
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> onlinestore@gmail.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> + 01 234 567 88
            </p>
            <p>
              <i className="fa fa-print mr-3" /> + 01 234 567 89
            </p>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="12">
            <div className="mb-5 flex-center">
              <a className="fb-ic">
                <i className="fab fa-facebook-f fa-lg white-text mr-md-4"> </i>
              </a>
              <a className="tw-ic">
                <i className="fab fa-twitter fa-lg white-text mr-md-4"> </i>
              </a>
              <a className="gplus-ic">
                <i className="fab fa-google-plus-g fa-lg white-text mr-md-4">

                </i>
              </a>
              <a className="li-ic">
                <i className="fab fa-linkedin-in fa-lg white-text mr-md-4"> </i>
              </a>
              <a className="ins-ic">
                <i className="fab fa-instagram fa-lg white-text mr-md-4"> </i>
              </a>
              <a className="pin-ic">
                <i className="fab fa-pinterest fa-lg white-text"> </i>
              </a>
            </div>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
        </MDBRow>
      </MDBContainer>
      <div style={{color:"#fff"}} className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Design Created by:{" "}
          <span>Darpan 💖 Goswami</span>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPagePro;
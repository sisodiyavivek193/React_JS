import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";

class NewHeader extends Component {
  render() {
    const data = [
      { path: `/`, name: "Home" },
      { path: `/about`, name: "About" },
      { path: `/example`, name: "Example" },
      // { path: `/`, name: "vivek" },
      // { path: `/`, name: "kaushikbhai" },
    ];
    const mapdata = data.map(({ path, name }, index) => {
      return (
        <MDBNavbarItem key={index}>
          <Link className="nav-link" to={path}>
            {name}{" "}
          </Link>
        </MDBNavbarItem>
      );
    });
    return (
      <>
        <MDBNavbar expand="lg" light bgColor="light">
          <MDBContainer fluid>
            <MDBNavbarBrand className="ms-5" href="#">
              Nandan
            </MDBNavbarBrand>
            {/* <MDBNavbarToggler
                            aria-controls='navbarSupportedContent'
                            aria-expanded='false'
                            aria-label='Toggle navigation'
                            onClick={() => setShowBasic(!showBasic)}
                        >
                            <MDBIcon icon='bars' fas />
                        </MDBNavbarToggler> */}

            <MDBCollapse navbar>
              <MDBNavbarNav className="ms-auto w-auto me-5 mb-2 mb-lg-0">
                {mapdata}
              </MDBNavbarNav>
              {/* <form className='d-flex input-group w-auto'>
                                <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
                                <MDBBtn color='primary'>Search</MDBBtn>
                            </form> */}
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </>
    );
  }
}

export default NewHeader;

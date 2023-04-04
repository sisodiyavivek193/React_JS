import React, { Component } from "react";
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
import { Link } from "react-router-dom";

class ListKeysMapExample extends Component {
  render() {
    // const data = ["home", "about", "example", "contact us", "vivek"];
    // const mapdata = data.map((data, index) => { return <MDBNavbarItem key={index}><Link className='nav-link' to="/">{data} </Link></MDBNavbarItem> })
    // const data = [<Link className='nav-link' to="/">home</Link>, <Link className='nav-link' to="/about">about</Link>];
    // const mapdata = data.map((dt, index) => { return <MDBNavbarItem key={index}>{dt}</MDBNavbarItem> })
    const data = [
      { key: `/`, value: "Home" },
      { key: `/about`, value: "About" },
    ];
    const mapdata = data.map(({ key, value }, index) => {
      return (
        <MDBNavbarItem key={index}>
          <Link className="nav-link" to={key}>
            {value}{" "}
          </Link>
        </MDBNavbarItem>
      );
    });
    return (
      <>
        <MDBNavbar expand="lg" light bgColor="light">
          <MDBContainer fluid>
            <MDBNavbarBrand href="#">Brand</MDBNavbarBrand>
            {/*
                        <MDBNavbarToggler
                            aria-controls='navbarSupportedContent'
                            aria-expanded='false'
                            aria-label='Toggle navigation'
                            onClick={() => setShowBasic(!showBasic)}
                        >
                            <MDBIcon icon='bars' fas />
                        </MDBNavbarToggler> */}

            <MDBCollapse navbar>
              <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
                {mapdata}
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </>
    );
  }
}

export default ListKeysMapExample;

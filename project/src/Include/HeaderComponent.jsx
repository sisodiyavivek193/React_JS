import React, { Component, useState } from "react";
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

const HeaderComponent = () => {

    const [showBasic, setShowBasic] = useState(false);
    const data = [
        { path: `/`, name: "Home" },
        { path: `/about`, name: "About" },
        { path: `/contact`, name: "Contact" },
        { path: `/loginpage`, name: "LoginPage" },
        { path: `/apifatch`, name: "ApiFatch" },
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


            <MDBNavbar expand="lg" light bgColor="light" className="sticky-top">
                <MDBContainer fluid>
                    <MDBNavbarBrand className="ms-5" href="#">
                        Logo
                    </MDBNavbarBrand>
                    <MDBNavbarToggler
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowBasic(!showBasic)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>

                    <MDBCollapse navbar show={showBasic}>
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
};

export default HeaderComponent;
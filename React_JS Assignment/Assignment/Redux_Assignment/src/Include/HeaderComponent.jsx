import React, { Component, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import { useCookies } from "react-cookie";
import CustomHook from "../Hooks/customHook";
import axios from "axios";

const HeaderComponent = () => {

    const [showBasic, setShowBasic] = useState(false);

    const [cookies, setCookie, removeCookie] = useCookies([]);
    const { handleChange, inp, errors } = CustomHook({ role: "2" }, {});
    const navigate = useNavigate();
    // const [login, setlogin] = useState(cookies.username !== undefined, cookies.id !== undefined);
    const [login, setlogin] = useState(!!cookies.username, !!cookies.id);


    const data = [
        { path: `/`, name: "Home" },
        { path: `/about`, name: "About" },
        { path: `/contact`, name: "Contact" },
        { path: `/apifatch`, name: "ApiFatch" },
        // { path: `/loginpage`, name: "LoginPage" },
        // { path: `/`, name: "vivek" },
        // { path: `/`, name: "kaushikbhai" },
    ];


    // const handleLogout = () => {
    //     removeCookie("username"); // Remove username cookie
    //     removeCookie("id"); // Remove ID cookie
    //     console.log("seccessfully logged out");
    //     setlogin(false);
    //     navigate("/loginpage"); // Navigate to the home page or the desired page after logout
    // };



    // const handleLogout = () => {

    //     removeCookie('username', { path: '/' });
    //     removeCookie("id"); // Remove id cookie
    //     console.log("seccessfully logged out");
    //     navigate("/loginpage")
    //     // const store = axios.get(`http://localhost:5000/user?name=${inp.name}&id=${inp.id}`)
    //     //     .then((res) => {

    //     //     })
    //     // removeCookie('username', { path: '/' });
    //     // removeCookie("username"); // Remove username cookie
    //     // removeCookie("id"); // Remove id cookie
    // };

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


                            <button className="btn btn-primary">
                                <Link to="/loginpage" className="text-light">Login</Link>
                            </button>

                            {/* <MDBNavbarItem>
                                {login ? (
                                    <button onClick={handleLogout} className="btn btn-primary">
                                        Logout
                                    </button>
                                ) : (
                                    <button className="btn btn-primary">
                                        <Link to="/loginpage" className="text-light">Login</Link>
                                    </button>
                                )}
                            </MDBNavbarItem>
 */}



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
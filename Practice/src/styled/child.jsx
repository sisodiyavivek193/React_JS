import React from 'react';
// import React from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBIcon,
    MDBBtn,
    MDBRipple,
} from "mdb-react-ui-kit";


const child = ({ MDBCardCard, MDBCardRuppe }) => {
    return (
        <>
            <MDBCard style={{ borderRadius: "15px" }}>
                <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image rounded hover-overlay"
                >
                    <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/12.webp"
                        fluid
                        className="w-100"
                        style={{
                            borderTopLeftRadius: "15px",
                            borderTopRightRadius: "15px",
                        }}
                    />
                    <a href="#!">
                        <div className="mask"></div>
                    </a>
                </MDBRipple>
                <MDBCardBody className="pb-0">
                    <div className="d-flex justify-content-between">
                        <div>
                            <p>
                                <a href="#!" className="text-dark">
                                    Dell Xtreme 270
                                </a>
                            </p>
                            <p className="small text-muted">Laptops</p>
                        </div>
                        <div>
                            <div className="d-flex flex-row justify-content-end mt-1 mb-4 text-warning">
                                <MDBIcon fas icon="star" />
                                <MDBIcon fas icon="star" />
                                <MDBIcon fas icon="star" />
                                <MDBIcon fas icon="star" />
                            </div>
                            <p className="small text-muted">Rated 4.0/5</p>
                        </div>
                    </div>
                </MDBCardBody>
                <hr class="my-0" />
                <MDBCardBody className="pb-0">
                    <div className="d-flex justify-content-between">
                        <p>
                            <a href="#!" className="text-dark">
                                {MDBCardRuppe}
                            </a>
                        </p>
                        <p className="text-dark">#### 8787</p>
                    </div>
                    <p className="small text-muted">{MDBCardCard}</p>
                </MDBCardBody>
                <hr class="my-0" />
                <MDBCardBody className="pb-0">
                    <div className="d-flex justify-content-between align-items-center pb-2 mb-4">
                        <a href="#!" className="text-dark fw-bold">
                            Cancel
                        </a>
                        <MDBBtn color="primary">Buy now</MDBBtn>
                    </div>
                </MDBCardBody>
            </MDBCard>

        </>
    );
};

export default child;
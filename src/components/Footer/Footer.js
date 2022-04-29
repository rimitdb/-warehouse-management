import React from 'react';
import { MDBContainer, MDBFooter } from "mdb-react-ui-kit";

const Footer = () => {
    return (
        <div>
            <MDBFooter color="blue" className="font-small pt-4 mt-4">

                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright: RIM COMPUTERS
                    </MDBContainer>
                </div>
            </MDBFooter>
        </div>
    );
};

export default Footer;
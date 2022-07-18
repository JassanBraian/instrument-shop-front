import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/fontawesome-free-solid';

const SideNavbar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="dark" onClick={handleShow} className="mx-2">
                <FontAwesomeIcon icon={faBars} />
            </Button>

            <Offcanvas show={show} onHide={handleClose} className="bg-dark text-light">
                <Offcanvas.Header>
                    <Offcanvas.Title>BJS</Offcanvas.Title>
                    <Button type="button" onClick={handleClose} className="btn-close bg-light" data-bs-dismiss="offcanvas" aria-label="Close"></Button>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/instrument">Instruments</Nav.Link>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default SideNavbar;
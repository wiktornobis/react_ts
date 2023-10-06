import {Button, Container, Nav, Navbar as NavbarBs} from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
            <Container>
                <Nav>
                    <Nav.Link to="/" as={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to="/store" as={NavLink}>
                        Store
                    </Nav.Link>
                    <Nav.Link to="/about" as={NavLink}>
                        About
                    </Nav.Link>
                </Nav>
                <Button
                    style={{ width: "3rem", height: "3rem", position: "relative" }}
                    variant={"outline-primary"}
                    className="rounded-circle"
                >
                    <svg fill="#000000" width="15px" height="37px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31.739 8.875c-0.186-0.264-0.489-0.422-0.812-0.422h-21.223l-1.607-5.54c-0.63-2.182-2.127-2.417-2.741-2.417h-4.284c-0.549 0-0.993 0.445-0.993 0.993s0.445 0.993 0.993 0.993h4.283c0.136 0 0.549 0 0.831 0.974l5.527 20.311c0.12 0.428 0.511 0.724 0.956 0.724h13.499c0.419 0 0.793-0.262 0.934-0.657l4.758-14.053c0.11-0.304 0.064-0.643-0.122-0.907zM25.47 22.506h-12.046l-3.161-12.066h19.253zM23.5 26.504c-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5 2.5-1.119 2.5-2.5c0-1.381-1.119-2.5-2.5-2.5zM14.5 26.504c-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5 2.5-1.119 2.5-2.5c0-1.381-1.119-2.5-2.5-2.5z"></path>
                    </svg>
                    <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                         style={{ color: "white", width: "1.5rem", height: "1.5rem", position: "absolute", bottom: "0", right: "0", transform: "translate(25%, 25%)" }}
                    >
                        3
                    </div>
                </Button>
            </Container>
        </NavbarBs>
    );
}

export default Navbar;

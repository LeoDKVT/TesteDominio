import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../imgs/leo-logo.svg";

export default function MyNavbar() {
  return (
    <Navbar className="py-3" collapseOnSelect expand="sm" bg="escuro" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src={Logo}
            alt="Logo da minha marca"
            style={{ height: "50px", width: "180px" }}
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link eventKey={2} href="/portfolio">
              Portfólio
            </Nav.Link>
            <Nav.Link eventKey={3} href="/blog">
              Blog
            </Nav.Link>
            <Nav.Link eventKey={4} href="/contato">
              Contato
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

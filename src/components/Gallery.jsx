import React from 'react'
import  { Col, Container , Nav, Navbar, Row} from 'react-bootstrap';
import GalleryContent from './GalleryContent';


export default function Gallery() {
  return (
    <>
    <Container>
       <Row>
         <Col>
         <Navbar variant="dark" bg="warning" expand='sm'>
           <Container>
             <Navbar.Brand>
               <img style={{width:'30px', height:'30px'}} src="logo192.png" alt="" />
               Flowers
             </Navbar.Brand>
             <Navbar.Toggle aria-controls="my-nav"/>
             <Navbar.Collapse id="my-nav">
             <Nav className="me-auto fw-bold">
               <Nav.Link href="/Home">  Home</Nav.Link>
               <Nav.Link href="/About">Aboutus</Nav.Link>
               <Nav.Link href="/Contact">Contactus</Nav.Link>
               <Nav.Link href="/Gallery">Gallery</Nav.Link>
               <Nav.Link href="/Services">Service</Nav.Link>
             </Nav>
             <Navbar.Text> <a href="/">Log out</a></Navbar.Text>
             </Navbar.Collapse>
           </Container>
           </Navbar>       
         </Col>
       </Row>
     </Container>
     <GalleryContent/>
   </>
  )
}

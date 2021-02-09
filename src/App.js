import "./App.css";
import { Navbar, Nav, Col, Form, Button, FormControl } from "react-bootstrap";

function App() {
  return (
    <div className="">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">FormPage</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#Form">Form</Nav.Link>
          <Nav.Link href="#Contact">Contact </Nav.Link>
          <Nav.Link href="#About Us">About Us </Nav.Link> 
         
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar> 
     <Form className="form">
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="123 Rue Foulen 2040" />
  </Form.Group>



  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option>state1</option>
        <option>state2</option>
        <option>state3</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
          Submit
  </Button>
</Form>
    </div>
  );
}

export default App;
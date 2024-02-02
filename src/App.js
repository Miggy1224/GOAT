import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function TextLink() {
  return (
    <div>
      <Navbar className="bg-body-tertiary" style={{ borderBottom: '1px solid #000', marginRight: '20px' }}>
  <Container>
    <Navbar.Brand href="#home">Search</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-center">
      <Nav style={{ margin: 'auto' }}>
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#timeline">Shop 371,230 Items</Nav.Link>
        <Nav.Link href="#shop">Shop</Nav.Link>
        <Nav.Link href="#editorial">Editorial</Nav.Link>
        <Nav.Link href="#timeline">Timeline</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        <a href="#login">Account</a>
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>


      <div className="content">
        <div className="sidenav">
          <ul>
            <li>Popular</li>
            <li>Recently Released Sneakers</li>
            <li>New In Apparel</li>
            <li>Price (Low - High)</li>
            <li>Price (High - Low)</li>
            <li>Category</li>
            <li>Gender</li>
            <li>Size</li>
            <li>Condition</li>
            <li>Color</li>
            <li>Price</li>
            <li>Instant</li>
            <li>Under Retail</li>
            <li>Available Now</li>
            <li>Sale</li>
            <li>Year</li>
          </ul>
        </div>

        <div className="table-container">
          <table className="sneaker-table">
            <tbody>
              <tr>
                <td className="sneaker-cell">
                  <div className="text-top-left">2023</div>
                  <div className="text-top-center">Air Jordan 4 SB "Pine Green"</div>
                  <div className="text-top-right">$477</div>
                  <img src="./shoes/pine.png" alt="Sneaker 1" />
                </td>
                <td className="sneaker-cell">
                  <div className="text-top-left">2022</div>
                  <div className="text-top-center">Air Jordan 1 Retro "Lost and Found"</div>
                  <div className="text-top-right">$377</div>
                  <img src="./shoes/lnf.png" alt="Sneaker 2" />
                </td>
                <td className="sneaker-cell">
                  <div className="text-top-left">2023</div>
                  <div className="text-top-center">Nike SB Dunk Low "Yuto Horigome"</div>
                  <div className="text-top-right">$399</div>
                  <img src="./shoes/yuto.png" alt="Sneaker 3" />
                </td>
                <td className="sneaker-cell">
                  <div className="text-top-left">2020</div>
                  <div className="text-top-center">Air Jordan 1 Low "TS Reverse Mocha"</div>
                  <div className="text-top-right">$1702</div>
                  <img src="./shoes/mocha.png" alt="Sneaker 4" />
                </td>
              </tr>
              <tr>
                <td className="sneaker-cell">
                  <img src="./shoes/sean.png" alt="Sneaker 5" />
                  <div className="text-top-left">2018</div>
                  <div className="text-top-center">Nike Air Max 97 "Sean Wotherspoon"</div>
                  <div className="text-top-right">$845</div>
                </td>
                <td className="sneaker-cell">
                  <img src="./shoes/frag.png" alt="Sneaker 6" />
                  <div className="text-top-left">2021</div>
                  <div className="text-top-center">Air Jordan 1 Low Retro "Fragment x TS"</div>
                  <div className="text-top-right">$2040</div>
                </td>
                <td className="sneaker-cell">
                  <img src="./shoes/ow.png" alt="Sneaker 7" />
                  <div className="text-top-left">2019</div>
                  <div className="text-top-center">Nike Dunk Low OW "Pine Green"</div>
                  <div className="text-top-right">$675</div>
                </td>
                <td className="sneaker-cell">
                  <img src="./shoes/moch.png" alt="Sneaker 8" />
                  <div className="text-top-left">2020</div>
                  <div className="text-top-center">Air Jordan 1 Low Retro "Mocha"</div>
                  <div className="text-top-right">$375</div>
                </td>
              </tr>
              <td className="sneaker-cell">
                  <img src="./shoes/bred.png" alt="Sneaker 8" />
                  <div className="text-top-left">2019</div>
                  <div className="text-top-center">Air Jordan 11 Retro "Bred"</div>
                  <div className="text-top-right">$333</div>
                </td>
                <td className="sneaker-cell">
                  <img src="./shoes/dior.png" alt="Sneaker 8" />
                  <div className="text-top-left">2020</div>
                  <div className="text-top-center">Dior x Air Jordan 1 High"</div>
                  <div className="text-top-right">$7375</div>
                </td>
                <td className="sneaker-cell">
                  <img src="./shoes/moch.png" alt="Sneaker 8" />
                  <div className="text-top-left">2020</div>
                  <div className="text-top-center">Off White x Air Jordan 4 "Sail"</div>
                  <div className="text-top-right">$939</div>
                </td>
                <td className="sneaker-cell">
                  <img src="./shoes/yellow.png" alt="Sneaker 8" />
                  <div className="text-top-left">2021</div>
                  <div className="text-top-center">Air Jordan 4 Low Retro "Lightning"</div>
                  <div className="text-top-right">$272</div>
                </td>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TextLink;

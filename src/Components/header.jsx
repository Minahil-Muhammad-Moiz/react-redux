import { Cancel, Delete, Height, ShoppingCart } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
// import MenuItem from "@mui/material/MenuItem";
import { Menu } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";

const Header = () => {
  const cartData = useSelector((state) => state.cartReducer.carts);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink to="/" className="text-decoration-none text-dark m-3 ">
          Shop-Cart
        </NavLink>
        <Nav className="me-auto">
          <NavLink to="/" className="text-decoration-none">
            Home
          </NavLink>
        </Nav>
        <Badge
          badgeContent={cartData.length}
          color="primary"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <ShoppingCart />
        </Badge>
      </Container>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Cancel />
        {cartData.length ? <div className="card_details">
          <Table>
            <thead>
              <tr>
                <th>Items</th>
                <th>Restraunt</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartData.map((item)=>{
                return(
                  <tr>
                    <td>
                      <img src={item.imgdata} style={{width:'5rem',  height:'5rem'}}/>
                    </td>
                    <td>
                      <p>{item.rname}</p>
                      <p>price: ₹ {item.price}</p>
                      <p>Quantity: ₹ {item.qnty}</p>
                    </td>
                    <td><Delete/></td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </div> : "Card Empty"}
      </Menu>
    </Navbar>
  );
};

export default Header;

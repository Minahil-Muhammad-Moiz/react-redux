import { Cancel, ShoppingCart } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
// import MenuItem from "@mui/material/MenuItem";
import { Menu } from "@mui/material";
import { useState } from "react";

const Header = () => {
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
          badgeContent={4}
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
        <div className="card-details">
          <Cancel/>
          <p>Card is Empty</p>
        </div>
      </Menu>
      ;
    </Navbar>
  );
};

export default Header;

import { Cancel, Delete,  ShoppingCart } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
// import MenuItem from "@mui/material/MenuItem";
import { Menu } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { RMV } from "./redux/actions/Action";

const Header = () => {
  const [price, setPrice] = useState(0)
  // console.log(price);
  const cartData = useSelector((state) => state.cartReducer.carts);
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dltItem = (id) => {
    dispatch(RMV(id));
  };

  const total = () => {
    let totalPrice = 0; // Use a different variable name for the accumulator
    cartData.map((item) => {
      totalPrice += item.price; // Accumulate the price of each item
    });
    setPrice(totalPrice); // Update the state with the total price
  };
  useEffect(()=>{
    total()
  },[cartData])

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
        <Cancel onClick={handleClose} />
        {cartData.length ? (
          <div className="card_details">
            <Table>
              <thead>
                <tr>
                  <th>Items</th>
                  <th>Restraunt</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cartData.map((item) => {
                  return (
                    <tr>
                      <NavLink to={`/cart/${item.id}`} onClick={handleClose}>
                        <td>
                          <img
                            src={item.imgdata}
                            style={{ width: "5rem", height: "5rem" }}
                          />
                        </td>
                        <td>
                          <p>{item.rname}</p>
                          <p>price: ₹ {item.price}</p>
                          <p>Quantity: ₹ {item.qnty}</p>
                        </td>
                      </NavLink>
                      <td
                        onClick={() => {
                          dltItem(item.id);
                        }}
                      >
                        <Delete style={{ color: "red", cursor: "pointer" }} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <td>
                    <p>Total: ₹{price}</p>
                  </td>
                </tr>
              </tfoot>
            </Table>
          </div>
        ) : (
          "Card Empty"
        )}
      </Menu>
    </Navbar>
  );
};

export default Header;

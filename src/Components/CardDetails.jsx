import { Delete } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  const [data, setData] = useState([]);

  const cartData = useSelector((state) => state.cartReducer.carts);
  const { id } = useParams();
  // console.log(cartData);

  const compare = () => {
    let filteredData = 
    cartData.filter((e) => {
      return e.id == id}
    );
    setData(filteredData);
  };

  useEffect(() => {
    compare();
  }, [id]);
  // console.log(data);
  return (
    <>
      <div className="container mt-2">
        <h2>Item Details Page</h2>
        <section className="container mt-3">
          <div className="itemsdetails d-flex">
            {data.map((item) => {
              return (
                <>
                  <div className="items_img">
                    <img
                      src={item.imgdata}
                      style={{ width: "20rem", height: "20rem" }}
                    />
                  </div>
                  <div className="details">
                    <Table>
                      <tr>
                        <td>
                          <p>
                            <strong>Restaurant: </strong>
                            {item.rname}
                          </p>
                          <p>
                            <strong>price: ₹ </strong>
                            {item.price}
                          </p>
                          <p>
                            <strong>Dish: </strong>
                            {item.address}
                          </p>
                          <p>
                            <strong>Total: ₹</strong>
                            {item.price}
                          </p>
                        </td>
                        <td>
                          <p>
                            <strong>Rating: </strong> {item.rating}
                          </p>
                          <p>
                            <strong>Order Review: </strong>
                            {item.somedata}
                          </p>
                          <p>
                            <strong>Remove: </strong>
                            <Delete style={{ color: "red" }} />
                          </p>
                        </td>
                      </tr>
                    </Table>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default CardDetails;

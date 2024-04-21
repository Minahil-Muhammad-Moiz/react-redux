import { Delete } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ADD, DEC_QNTY, RMV } from "./redux/actions/Action";

const CardDetails = () => {
  const [data, setData] = useState([]);
  
  const dispatch = useDispatch()

  const cartData = useSelector((state) => state.cartReducer.carts);
  const { id } = useParams();

  const navToHome = useNavigate()

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

  const send= (card)=>{
    dispatch(ADD(card))
  }

  const dltItem = (id)=>{
    dispatch(RMV(id));
    navToHome('/')
  }

  const decree = (card)=>{
    dispatch(DEC_QNTY(card))
  }
  
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
                          <div className="d-flex align-items-baseline">
                            <button onClick={()=>{decree(item)}}>-</button>
                            <p>{item.qnty}</p>
                            <button onClick={()=>send(item)}>+</button>
                          </div>
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
                            <Delete style={{ color: "red", cursor: 'pointer' }} onClick={()=>dltItem(item.id)}/>
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

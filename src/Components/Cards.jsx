import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Cardsdata from "./CardsData";
import { useDispatch } from "react-redux";
import {ADD} from './redux/actions/Action'

const Cards = () => {
  const [data, setData] = useState(Cardsdata);

  const dispatch = useDispatch()
  const send= (card)=>{
    dispatch(ADD(card))
  }

  return (
    <div className="container mt-3 ">
      <h1>Add To Cart</h1>
      <div className="row d-flex justify-center align-items-center  ">
        {data.map((card, id) => (
          <Card
            style={{ width: "18rem", border: "none" }}
            className="m-2 mt-4 card_style"
          >
            <Card.Img
              variant="top"
              src={card.imgdata}
              style={{ height: "16rem" }}
            />
            <Card.Body>
              <Card.Title>{card.rname}</Card.Title>
              <Card.Text>price: {card.price} `₹`</Card.Text>
              <div className="button_div ">
                <Button variant="primary" onClick = {()=>send(card)}>Add To Cart</Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;

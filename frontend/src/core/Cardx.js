import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import ShowImage from "./ShowImage";

const Cardx = ({ e_videogame }) => {
  const [count, setCount] = useState(e_videogame.count);

  return (
    <Card style={{ width: "22rem", margin: "1em" }}>
      <ShowImage item={e_videogame} url="videogame" />
      <Card.Body>
        <Card.Title>{e_videogame.name} </Card.Title>
        <p>{e_videogame.price} </p>
        <Card.Text>{e_videogame.description}</Card.Text>
        <Button variant="success" block >Ver Mas</Button>
      </Card.Body>
    </Card>
  );
};

export default Cardx;

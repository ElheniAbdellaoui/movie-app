import React from "react";
import { Button, Card } from "react-bootstrap";
import Star from "./Star";

const MovieCard = ({ el, del }) => {
  return (
    <div>
      <Card style={{ width: "18rem", margin: "35px" }}>
        <Card.Img variant="top" src={el.imgURL} style={{ height: "350px" }} />
        <Card.Body>
          <Card.Title>{el.title}</Card.Title>

          <Card.Text>description:{el.description} </Card.Text>

          <Card.Text> date:{el.date}</Card.Text>

          <Card.Text>
            {" "}
            <Star rate={el.rate} />
          </Card.Text>

          <Button onClick={() => del(el.id)} variant="primary">
            delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;

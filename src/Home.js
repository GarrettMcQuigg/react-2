import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

function Home({ snacks, drinks }) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>
        </CardBody>
      </Card>
      <section>
        <Card>
          <CardBody>
            <ListGroup>
              {snacks.map((snack) => (
                <Link to={`/snacks/${snack.id}`} key={snack.id}>
                  <ListGroupItem>{snack.name}</ListGroupItem>
                </Link>
              ))}
            </ListGroup>

            <ListGroup>
              {drinks.map((drink) => (
                <Link to={`/drinks/${drink.id}`} key={drink.id}>
                  <ListGroupItem>{drink.name}</ListGroupItem>
                </Link>
              ))}
            </ListGroup>
          </CardBody>
        </Card>
      </section>
    </section>
  );
}

export default Home;

import React from "react";
import { Container, Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Stack } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <div>
      <Container className="mt-4">
        <Card>
          <Card.Header className="bg-dark">
            <h2 style={{color:"white"}}>Redux Counter</h2>
          </Card.Header>
          <Card.Body>{showCounter ? <h1>{counter}</h1> : null}</Card.Body>
          <Card.Footer>
            <div className="d-flex justify-content-center">
              <Stack direction="horizontal" gap="3" className="mb-2">
                <Button onClick={incrementHandler} className="btn btn-dark">Increment</Button>
                <Button onClick={increaseHandler} className="btn btn-dark">Increment By 5</Button>
                <Button onClick={decrementHandler} className="btn btn-dark">Decrement</Button>
              </Stack>
            </div>
            <Button onClick={toggleCounterHandler} className="btn btn-dark">Toggle Counter</Button>
          </Card.Footer>
        </Card>
      </Container>
    </div>
  );
};

export default Counter;

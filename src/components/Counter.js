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
          <Card.Header>
            <h1>Redux Counter</h1>
          </Card.Header>
          <Card.Body>{showCounter ? <h1>{counter}</h1> : null}</Card.Body>
          <Card.Footer>
            <div className="d-flex justify-content-center">
              <Stack direction="horizontal" gap="3" className="mb-2">
                <Button onClick={incrementHandler}>Increment</Button>
                <Button onClick={increaseHandler}>Increment By 5</Button>
                <Button onClick={decrementHandler}>Decrement</Button>
              </Stack>
            </div>
            <Button onClick={toggleCounterHandler}>Toggle Counter</Button>
          </Card.Footer>
        </Card>
      </Container>
    </div>
  );
};

export default Counter;

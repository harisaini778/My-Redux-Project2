import React from "react";
import { Container, Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Stack } from "react-bootstrap";
import { connect } from "react-redux";

const Counter = (props) => {
    const incrementHandler = () => {
        props.increment();
    };

    const decrementHandler = () => {
        props.decrement();
    };

    const increaseHandler = () => {
        props.increase();
    };

    const toggleCounterHandler = () => {
        props.toggle();
    };

    return (
        <div>
            <Container className="mt-4">
                <Card>
                    <Card.Header>
                        <h1>Redux Counter</h1>
                    </Card.Header>
                    <Card.Body>
                        {props.showCounter ? <h1>{props.counter}</h1> : null}
                    </Card.Body>
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

const mapStateToProps = (state) => {
    return {
        counter: state.counter,
        showCounter: state.showCounter,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({ type: "increment" }),
        decrement: () => dispatch({ type: "decrement" }),
        increase: () => dispatch({ type: "increase", amount: 5 }),
        toggle: () => dispatch({ type: "toggle" }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

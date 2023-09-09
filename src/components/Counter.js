
import { Container, Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useSelector,useDispatch } from "react-redux";
import { Stack } from "react-bootstrap";

const Counter = () => {
    const dispatch = useDispatch();

    const incrementHandeler = () => {
        dispatch({ type: "increment" });
    }

    const decrementHandler = () => {
        dispatch({ type: "decrement" });
    }
    const counter = useSelector(state => state.counter);
    const toggleCounterHandeler = () => {
        
    };

    return (
        <div>
            <Container className="mt-4">
                <Card>
                    <Card.Header>
                        <h1>Redux Counter</h1>
                    </Card.Header>
                    <Card.Body>
                        -- <h1>{counter}</h1> --
                    </Card.Body>
                    <Card.Footer>
                        <div className="d-flex justify-content-center">
                          <Stack direction="horizontal" gap="3" className="mb-2">
                            <Button onClick={incrementHandeler}>
                                Increment
                            </Button>
                            <Button onClick={decrementHandler}>
                                Decrement 
                            </Button>
                        </Stack>
                        </div>
                        <Button onClick={toggleCounterHandeler}>
                            Toggle Counter
                        </Button>
                    </Card.Footer>
                </Card>
            </Container>
        </div>
    );
}

export default Counter;
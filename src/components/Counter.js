
import { Container, Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const Counter = () => {
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
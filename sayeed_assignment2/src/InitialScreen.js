import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroupComp from './ListGroupComp';
import TabComp from './TabComp';
import FormComp from './FormComp';
function InitialScreen() {
    return (
        <Container>
            <h1 className="text-center display-4">Assignment 2: Sara's ToDo List</h1>
            <Row>
                <Col sm={4}><FormComp /></Col>
                <Col sm={4}><TabComp /></Col>
                <Col sm={4}><ListGroupComp /></Col>
            </Row>
        </Container>
    );
}


export default InitialScreen;
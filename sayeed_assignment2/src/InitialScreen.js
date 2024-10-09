import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroupComp from './ListGroupComp';
import TabComp from './TabComp';
import FormComp from './FormComp';

function InitialScreen() {
  const [activeKey, setActiveKey] = useState("0"); // UseState to manage active tab

  return (
    <Container>
      <h1 className="text-center">Assignment 2: Sara's ToDo List</h1><br />
      <Row>
        {/* Form for adding new ToDo */}
        <Col sm={3}>
          <FormComp />
        </Col>

        {/* ListGroup component for titles */}
        <Col sm={3}>
          <ListGroupComp setActiveKey={setActiveKey} /> {/* Pass setActiveKey function */}
        </Col>

        {/* Tab component for description and due date */}
        <Col sm={6}>
          <TabComp activeKey={activeKey} /> {/* Pass activeKey as prop */}
        </Col>
      </Row>
    </Container>
  );
}

export default InitialScreen;

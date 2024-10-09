import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { todos } from './todoItems';

function TabComp() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey={todos[0].title}>
      <Row>
        <Col sm={3}>
          {/* Generate Nav.Item and Nav.Link dynamically from todos */}
          <Nav variant="pills" className="flex-column">
            {todos.map((todo, index) => (
              <Nav.Item key={index}>
                <Nav.Link eventKey={todo.title}>{todo.title}</Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Col>
        <Col sm={9}>
          {/* Generate Tab.Pane dynamically from todos */}
          <Tab.Content>
            {todos.map((todo, index) => (
              <Tab.Pane eventKey={todo.title} key={index}>
                <h5>{todo.title}</h5>
                <p>{todo.description}</p>
                <p><strong>Due Date:</strong> {todo.dueDate}</p>
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default TabComp;
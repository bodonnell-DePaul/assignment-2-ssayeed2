import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { todos as initialTodos } from './todoItems'; // Load the initial todo items

function TabComp({ activeKey }) {
  const [todoItems, setTodoItems] = useState(initialTodos); // Create state for todo items

  // Function to handle due date change
  const handleDueDateChange = (e, index) => {
    const updatedTodos = [...todoItems]; // Copy current todo items
    updatedTodos[index].dueDate = e.target.value; // Update the due date for the specific todo
    setTodoItems(updatedTodos); // Update state with the new due date
  };

  return (
    <Tab.Container id="todo-list-tabs" activeKey={activeKey}>
      <Row>
        <Col sm={12}>
          <Tab.Content>
            {todoItems.map((todo, index) => (
              <Tab.Pane eventKey={index.toString()} key={index} role="tabpanel">
                <p>{todo.description}</p>

                {/* Editable Due Date */}
                <label><strong>Due Date: </strong></label>
                <input
                  type="date"
                  value={todo.dueDate}
                  onChange={(e) => handleDueDateChange(e, index)} // Update due date when changed
                />
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default TabComp;

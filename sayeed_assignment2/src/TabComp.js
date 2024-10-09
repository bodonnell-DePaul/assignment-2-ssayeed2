import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { todos as initialTodos } from './todoItems'; // Load the initial todo items

function TabComp({ activeKey }) {
  const [todoItems, setTodoItems] = useState(initialTodos); //todo items

  // Due date changes
  const handleDueDateChange = (e, index) => {
    const updatedTodos = [...todoItems]; 
    updatedTodos[index].dueDate = e.target.value; 
    setTodoItems(updatedTodos); 
  };

  return (
    <Tab.Container id="tabs" activeKey={activeKey}>
      <Row>
        <Col sm={13}>
          <Tab.Content>
            {todoItems.map((todo, index) => (
              <Tab.Pane eventKey={index.toString()} key={index} role="tabpanel">
               
                {/* Editable the Due Date */}
                <p
                  contentEditable="true" // Make description editable
                  suppressContentEditableWarning={true} // Suppresses React warning
                >
                  {todo.description}
                </p>

                {/* Editable Due Date */}
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

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

    // Descripton change
    const handleDescriptionChange = (e, index) => {
        const updatedTodos = [...todoItems]; 
        updatedTodos[index].description = e.target.innerText; 
        setTodoItems(updatedTodos); 
      };

  return (
    <Tab.Container id="todo-list-tabs" activeKey={activeKey}>
      <Row>
        <Col sm={13}>
          <Tab.Content>
            {todoItems.map((todo, index) => (
              <Tab.Pane eventKey={index.toString()} key={index} role="tabpanel">
               
                {/* Editable the Due Date */}
                <p
                  contentEditable="true" // Make description editable
                  suppressContentEditableWarning={true} // Suppresses React warning
                  onBlur={(e) => handleDescriptionChange(e, index)} // Save changes on blur (when the user clicks away)
                  style={{ border: '1px dashed #ccc', padding: '5px' }} // Optional style to indicate editable field
                >
                  {todo.description}
                </p>

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

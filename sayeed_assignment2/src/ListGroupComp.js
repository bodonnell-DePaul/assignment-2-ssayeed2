import ListGroup from 'react-bootstrap/ListGroup';
import { todos } from './todoItems';
import 'bootstrap/dist/css/bootstrap.min.css';


// ListGroupComponent to display ToDo titles
function ListGroupComp({ setActiveKey }) {
  // Function to get color variant based on due date
  const getVariant = (dueDate) => {
    const currentDate = new Date();
    const dueDateObj = new Date(dueDate);
    const diffTime = dueDateObj - currentDate; // Time difference in milliseconds
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convert to days
  
    // Debugging output
    console.log(`Due Date: ${dueDate}, Days difference: ${diffDays}`);
  
    // Assign the correct color variant based on the difference in days
    if (diffDays > 7) return 'primary'; // More than 7 days
    if (diffDays <= 7 && diffDays >= 4) return 'success'; // Between 4 and 7 days
    if (diffDays < 4 && diffDays >= 2) return 'warning'; // Between 2 and 4 days
    if (diffDays < 2) return 'danger'; // Less than 2 days
  };
  

  return (
    <div>
      <ListGroup role="tablist">
        {todos.map((todo, index) => (
          <ListGroup.Item
            key={index}
            eventKey={index.toString()}
            onClick={() => setActiveKey(index.toString())} // Set active key when item is clicked
            variant={getVariant(todo.dueDate)} // Apply color variant based on due date
            role="tab"
          >
            {todo.title}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default ListGroupComp;


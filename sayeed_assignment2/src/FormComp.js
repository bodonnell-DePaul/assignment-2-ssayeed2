import Form from 'react-bootstrap/Form';
import ButtonComp from './ButtonComp';
import Button from 'react-bootstrap/Button';
import './FormComp.css';
function FormComp() {
  return (
    <Form className="FormComp">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>ToDo Item</Form.Label>
        <Form.Control type="text" placeholder="Add todo item" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Due Date</Form.Label>
        <Form.Control type="date" placeholder="mm/dd/yyyy" />
      </Form.Group>
      <Button variant="primary" type="submit" className="SubmitButton">
        Add ToDo
        </Button>
    </Form>
  );
}

export default FormComp;
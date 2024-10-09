import Form from 'react-bootstrap/Form';
import ButtonComp from './ButtonComp';
import 
function FormComp() {
  return (
    <Form className="FormComp">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>ToDo Item</Form.Label>
        <Form.Control type="email" placeholder="Add todo item" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Due Date</Form.Label>
        <Form.Control type="date" placeholder="mm/dd/yyyy" />
      </Form.Group>
      <ButtonComp/>
    </Form>
  );
}

export default FormComp;
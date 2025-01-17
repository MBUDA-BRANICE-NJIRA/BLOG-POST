import { Button, Form } from "react-bootstrap";

const NewBlogs = () => {
  return (
    <div className="blog">
      <h1>Blog</h1>

      <Form class="blogs">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter the Title" />

        <Form.Label>Auther</Form.Label>
        <Form.Control type="text" placeholder="Enter the Authors Name" />

        <Form.Label>Body</Form.Label>
        <Form.Control as="textarea" placeholder="Enter Body" />

        <Button variant="primary" class="button">Blog</Button>
      </Form>
    </div>
  );
};

export default NewBlogs;

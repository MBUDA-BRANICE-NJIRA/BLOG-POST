import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewBlogs = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");

  const getTitle = (e) => {
    setTitle(e.target.value);
  }

  const getAuther = (e) => {
    setAuthor(e.target.value);
  }
  const getBody = (e) => {
    setBody(e.target.value);
  }



  const handleSubmit = (e) => {
    let data = {title,author,body}
    e.preventDefault();
    axios
      .post("http://localhost:4000/blogs", data)
      .then((res) => {
        toast.success("blog added successfully", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      })
      .catch((err) => {
        toast.error("An error Occurred when adding blog", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      });
  };
  return (
    <div className="blog">
      <h1>Blog</h1>

      <Form className="blogs" onSubmit={handleSubmit}>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          onChange={getTitle}
          placeholder="Enter the Title"
          name="title"
        />

        <Form.Label>Auther</Form.Label>
        <Form.Control
          type="text"
          onChange={getAuther}
          placeholder="Enter the Authors Name"
          name="author"
        />

        <Form.Label>Body</Form.Label>
        <Form.Control
          as="textarea"
          onChange={getBody}
          placeholder="Enter Body"
          name="body"
        />

        <Button variant="primary" type="submit" className="button">
          Blog
        </Button>
        <ToastContainer />
      </Form>

      {/* <p>title : {title}</p>
      <p>auther : {auther}</p>
      <p>body : {body}</p> */}
    </div>
  );
};

export default NewBlogs;

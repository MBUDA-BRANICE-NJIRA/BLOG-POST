import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";


const BlogDetails = () => {
    const {id} = useParams()
    const{data:blogs} = useFetch('http://localhost:4000/blogs/' + id);
    const history = useHistory();

    const handleDelete = (e) =>{
        e.preventDefault ()

        axios.delete('http://localhost:4000/blogs/' + id)
        .then(res=>{
            alert('blog deleted');
            history.push('/');
     })
    }

    return (
        <div className="details">
            {blogs && (
                <article>
                    <h3>{blogs.title}</h3>
                    <p>Done by:{blogs.author}</p>
                    <div>{blogs.body}</div>
                    <BUtton onclick={handleDelete}
                    variant="danger" className= "mt-3" type="submit">delete Blog</BUtton>
                </article>
            )}
        </div>
    )
}
export default BlogDetails;
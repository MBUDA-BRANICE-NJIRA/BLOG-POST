import { Link } from "react-router-dom/cjs/react-router-dom.min";
const BlogList = ({blogs,title}) => {
    return ( 
        <div>
            <h2>{title}</h2>
            {blogs.map((blog) =>(
                <div className="preview" key={blog.id}>
                    <Link to ={`Blog-details/${blog.id}`}>
                    <h3>{blog.title}</h3>
                    <p>Done by: {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;
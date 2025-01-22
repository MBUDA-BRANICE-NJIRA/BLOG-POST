import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const {data:blogs}= useFetch('http://localhost:4000/blogs')

    return (
        <div className="home">

            {blogs && <BlogList blogs={blogs} title="All  blogs" />}
        
        </div>
     );
}
 
export default Home;
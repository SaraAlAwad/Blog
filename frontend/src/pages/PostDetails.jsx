/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"


const PostDetails = () => {
  const {id} = useParams()

  const [post, setPost] = useState()
  const [error, setError]= useState("")
   useEffect(()=>{
     fetch("http://localhost:9000/posts/" + id)
     .then(response => response.json())
     .then(post=>{
       console.log(post);
       if (post.error) {
         setError(post.error)
       }else{
         setPost(post)
       }
     })
   }, [id])
  return (
    <div>
      <h1>PostDetails / DetailSeite</h1>
      {
        post
        ? <div>
          <h3>{post.title}</h3>
          <img src={"http://localhost:9000/" + post.postImg} alt="img" /> 
          <p>{post.txt}</p>
        </div>
        : <div className="errorMessage">
            {error ? error : "Please click on a user to reach this page. or just error ?!!"}
        </div>
      }
<Link to="/">⬅️</Link>

    </div>
  )
}
export default PostDetails
// then i have to link this page to posts
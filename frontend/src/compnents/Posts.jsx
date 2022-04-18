/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"


const Posts = (props) => {

    useEffect(()=>{
        fetch("http://localhost:9000/posts")
        .then(response => response.json())
        .then(postsArray => props.setPosts(postsArray))}, [])
 
  return (
    <div>
            <h1>Posts</h1>
            <p>header img and greetings</p>
            {props.posts.map(p => 
            // we need link here
                <div className="container" key={p.id}>
                    <h3>{p.title} {p.txt}</h3>
                    <img src={"http://localhost:9000/" + p.postImg} alt="img" /> 
                </div>
                )}

    
    </div>
  )
}

export default Posts
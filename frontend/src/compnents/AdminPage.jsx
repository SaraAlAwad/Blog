/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"

const AdminPage = (props) => {
const [title, setTitle]= useState("")
const [txt, setTxt]= useState("")
const [postImg, setPostImg]= useState(null)

console.log("rendering list")
const onFileChange = (event) => {
    const postFile = event.target.files[0]
    setPostImg(postFile)
}

const createPost=(event)=>{
    event.preventDefault()

        const formData = new FormData(); 

        formData.append("title", title); 
        formData.append("txt", txt);
        formData.append("postImg", postImg); 
        
        
        fetch("http://localhost:9000/createPost", {
            method: "post",
            body: formData
        }).then((response) => response.json())
        .then((newPostsArray) => {
            props.setPosts(newPostsArray) // to add the new post to the already exist posts which is defind in home

            setTitle("")
            setTxt("")
            setPostImg(null)
            
        })
}
return (
    <>
    <h1>AdminPage</h1>
    <form id="adminForm">
        <h2> Neuer Beitrag </h2>
    <input id="title" type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
    <input id="profileUploadInput" placeholder="Beitragsbild" type="file" onChange={onFileChange} />
    <input id="postText" type="text" placeholder="Beitragstest" value={txt} onChange={(e) => setTxt(e.target.value)} />

    <button onClick={createPost}>Publish</button>


</form>
        
        </>
    
)
}

export default AdminPage
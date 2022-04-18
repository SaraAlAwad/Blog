import { useState } from "react"
import AdminPage from "../compnents/AdminPage"
import Posts from "../compnents/Posts"
import './App.css';


const Home = () => {
    const [posts, setPosts ]= useState([])
  return (
    <div>Home
    <Posts posts={posts} setPosts={setPosts}/>
    <AdminPage setPosts={setPosts}/>
    </div>
)
}

export default Home
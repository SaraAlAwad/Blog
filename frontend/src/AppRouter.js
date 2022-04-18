import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PostDetails from './pages/PostDetails'

const AppRouter = () => {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/posts/:id' element={<PostDetails/>}/>

      </Routes>
      </BrowserRouter>
  )
}

export default AppRouter
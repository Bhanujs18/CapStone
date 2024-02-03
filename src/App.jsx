import { Route, Routes } from 'react-router-dom'
import Register from './Pages/Register/Register'
import Info from './Pages/Info/Info'
import Movies from './Pages/Movies/Movies'
import Showcase from './Pages/Showcase/Showcase'
import "./index.css";
function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Register />} />
      <Route path='/register' element={<Register />} />
      <Route path='/info' element={<Info />} />
      <Route path='/movies' element={<Movies />} />
      <Route path='/showcase' element={<Showcase />} />
      <Route path='*' element={<h1>404 Error</h1>} />
    </Routes>
        </>
  )
}

export default App

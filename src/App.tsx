import 'bootstrap/dist/css/bootstrap.min.css'
import { Navigate, Route, Routes } from 'react-router-dom'

function App() {


  return (
    <Routes>
      <Route path='/' element={<h1>hello</h1>} />
      <Route path='/new' element={<h1>New</h1>} />
      <Route path='*' element={<Navigate to='/'></Navigate>} />
    </Routes>
  )
}

export default App

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import './styles/index.css'


function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App

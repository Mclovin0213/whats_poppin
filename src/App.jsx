import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Box } from "@mui/system"
import Navbar from "./components/Navbar"
import Home from "./components/Home"

function App() {

  return (
    <BrowserRouter>
      <Box>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App

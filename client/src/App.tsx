import { Route, Routes } from "react-router-dom"
import Check from "./components/Check"
import Success from "./components/Success"

function App() {
  return (
    <>
    hi
    <Routes>

 <Route path="/success" element={<Success />} />     
<Route path='/check' element={<Check />} />
<Route path='/failed' element={<>Failed lol</>} />
    </Routes>
    </>
  )
}

export default App

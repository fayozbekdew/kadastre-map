import { Routes,Route } from "react-router-dom"
import AddObject from "./pages/AddObject"
import UserPage from "./pages/UserPage"

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<RootLayout />}> */}
        <Route  path="/"  element={<UserPage/>} />
        <Route path="add" element={<AddObject />} />
      {/* </Route> */}
    </Routes>
  )
}

export default App

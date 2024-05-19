import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home"
import Home1 from "./pages/home1"
import Login from "./pages/login"
function App() {
  return (  
    <BrowserRouter >
   <Routes>
    <Route >
    <Route path="/" element ={<Login />} />
    <Route path="/h1" element={<Home  /> }  />
    <Route path="/h2" element={<Home1  /> }  />
    </Route>
   </Routes>
    </BrowserRouter>
  );
}

export default App;

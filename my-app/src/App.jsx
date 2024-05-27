import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Forget2  from "./Component/Login/forget"
import SignUp from "./Component/Login/SignUp"
import Login from "./Component/Login/login"
import A11 from './Component/Login/updatePassword'
import Home  from "./Component/Home/Home"
function App() {
  return (  
    <div className=" bg-slate-200">
    <BrowserRouter >
   <Routes>
    <Route >
    <Route path="/" element ={<Login  />} />
    <Route path="/Signup" element={<SignUp  /> }  />
    <Route path="/Home" element={<Home   /> }  />
    {/*
    <Route path="/forgetpassword" element={<Forget2  /> }  />
    */}
    <Route path="/UpdatePassword" element= {<A11 />} />
    </Route>
   </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

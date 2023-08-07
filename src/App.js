import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/pages/NavBar";
import Login from "./components/pages/Login";


function App() {
  return (
  <>
  <Router>
    <Navbar />

    <div className="container">
      <Routes>
        <Route path="/login" element={<Login />} />
        
      </Routes>



    </div>




  </Router>
  

  </>  
  
  );
}

export default App;

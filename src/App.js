import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/pages/NavBar";
import Login from "./components/pages/Login";
import Authors from "./components/pages/Authors";
import CreateAuthors from "./components/pages/CreateAuthors";
import BooksPanel from "./components/pages/BooksPanel";
import UploadBooks from "./components/pages/UploadBooks";


function App() {
  return (
  <>
  <Router>
    <Navbar />

    <div className="container">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/create_authors" element={<CreateAuthors />} />
        <Route path="/books_panel" element={<BooksPanel />} />
        <Route path="/upload_books" element={<UploadBooks />} />
        
        
      </Routes>



    </div>




  </Router>
  

  </>  
  
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import NavigationBar from "./components/nav/NavigationBar";
import Login from "./components/auth/Login";
import SuperAdminLogin from "./components/auth/SuperAdminLogin";
import LoginPanel from "./components/auth/LoginPanel";
import LibrarianPanel from "./components/librarian/LibrarianPanel";
import BooksPanel from "./components/librarian/BooksPanel";
import UploadBook from "./components/librarian/UploadBook";
import CreateCategory from "./components/librarian/CreateCategory";


function App() {
  return (
  <>
  <Router>
    <NavigationBar />

    <div className="container">
      <Routes>

      <Route path="/login_panel" element={<LoginPanel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/super_login" element={<SuperAdminLogin />} />
        <Route path="/librarian_panel" element={<LibrarianPanel />} />
        <Route path="/books_panel"  element={<BooksPanel />} />
        <Route path="/upload_book" element={<UploadBook />} />
        <Route path="/create_category" element={<CreateCategory />} />
        

        
        
      </Routes>



    </div>




  </Router>
  

  </>  
  
  );
}

export default App;

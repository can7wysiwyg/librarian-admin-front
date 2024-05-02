import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import NavigationBar from "./components/nav/NavigationBar";
import Login from "./components/auth/Login";
import SuperAdminLogin from "./components/auth/SuperAdminLogin";
import LoginPanel from "./components/auth/LoginPanel";
import LibrarianPanel from "./components/librarian/LibrarianPanel";
import BooksPanel from "./components/librarian/BooksPanel";
import UploadBook from "./components/librarian/UploadBook";
import CreateCategory from "./components/librarian/CreateCategory";
import ShowBooks from "./components/widgets/ShowBooks";
import BookSingle from "./components/widgets/BookSingle";
import UpdateList from "./components/librarian/UpdateList";
import UpdateAuthor from "./components/librarian/UpdateAuthor";
import UpdateTitle from "./components/librarian/UpdateTitle";
import UpdateGenre from "./components/librarian/UpdateGenre";
import UpdateDescription from "./components/librarian/UpdateDescription";


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
        <Route path="/show_books" element={<ShowBooks />} />
        <Route path="/book_single/:id" element={<BookSingle />} />
        <Route path="/update_list/:id" element={<UpdateList />} />
        <Route path="/update_author/:id" element={<UpdateAuthor />} />
        <Route path="/update_title/:id" element={<UpdateTitle />} />
        <Route path="/update_genre/:id" element={<UpdateGenre />} />
        <Route path="/update_description/:id" element={<UpdateDescription />} />
        

        
        
      </Routes>



    </div>




  </Router>
  

  </>  
  
  );
}

export default App;

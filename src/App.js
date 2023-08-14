import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/pages/NavBar";
import Login from "./components/pages/Login";
import Authors from "./components/pages/Authors";
import CreateAuthors from "./components/pages/CreateAuthors";
import BooksPanel from "./components/pages/BooksPanel";
import UploadBooks from "./components/pages/UploadBooks";
import SuperAdminLogin from "./components/pages/SuperAdminLogin";
import ManageBooks from "./components/pages/ManageBooks";
import BookSingle from "./components/pages/BookSingle";
import ShowAuthor from "./components/pages/ShowAuthor";
import AuthorBooks from "./components/pages/AuthorBooks";
import UpdateAuthorPicture from "./components/pages/UpdateAuthorPicture";
import UpdateAuthorBio from "./components/pages/UpdateAuthorBio";
import UpdateAuthorName from "./components/pages/UpdateAuthorName";
import UpdateAuthorCountry from "./components/pages/UpdateAuthorCountry";
import AuthorMore from "./components/pages/AuthorMore";
import SelectAuthor from "./components/pages/SelectAuthor";


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
        <Route path="/upload_books/:id" element={<UploadBooks />} />
        <Route path="/super_login" element={<SuperAdminLogin />} />
        <Route path="/manage_books" element={<ManageBooks />} />
        <Route path="/book_single/:id" element={<BookSingle />} />
        <Route path="/show_author/:id" element={<ShowAuthor />} />
        <Route path="/author_books/:id" element={<AuthorBooks />} />
        <Route path="/author_update_picture/:id" element={<UpdateAuthorPicture />} />
        <Route path="/update_bio/:id" element={<UpdateAuthorBio />} />
        <Route path="/update_name/:id" element={<UpdateAuthorName />} />
        <Route path="/update_country/:id" element={<UpdateAuthorCountry />} />
        <Route path="/author_more/:id" element={<AuthorMore />} />
        <Route path="/select_author" element={<SelectAuthor />} />

        
        
      </Routes>



    </div>




  </Router>
  

  </>  
  
  );
}

export default App;

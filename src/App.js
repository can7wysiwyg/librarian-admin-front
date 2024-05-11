import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import NavigationBar from "./components/nav/NavigationBar";
import Login from "./components/auth/Login";
import SuperAdminLogin from "./components/auth/SuperAdminLogin";
import LoginPanel from "./components/auth/LoginPanel";
import LibrarianPanel from "./components/librarian/LibrarianPanel";
import BooksPanel from "./components/librarian/BooksPanel";
import UploadBook from "./components/librarian/UploadBook";
import ShowBooks from "./components/widgets/ShowBooks";
import BookSingle from "./components/widgets/BookSingle";
import UpdateList from "./components/librarian/UpdateList";
import UpdateAuthor from "./components/librarian/UpdateAuthor";
import UpdateTitle from "./components/librarian/UpdateTitle";
import UpdateGenre from "./components/librarian/UpdateGenre";
import UpdateDescription from "./components/librarian/UpdateDescription";
import BookPhotoUpdate from "./components/librarian/BookPhotoUpdate";
import BookPdfUpdate from "./components/librarian/BookPdfUpdate";
import GenresPanel from "./components/librarian/GenresPanel";
import ShowBookGenres from "./components/widgets/ShowBookGenres";
import CreateGenre from "./components/librarian/CreateGenre";
import GenreSingle from "./components/widgets/GenreSingle";
import BooksInThisGenre from "./components/widgets/BooksInThisGenre";
import EditGenre from "./components/librarian/EditGenre";
import EraseGenre from "./components/librarian/EraseGenre";
import AdminPanel from "./components/superAdmin/AdminPanel";
import CreateLibrarian from "./components/superAdmin/CreateLibrarian";


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
        <Route path="/create_genre" element={<CreateGenre />} />
        <Route path="/show_books" element={<ShowBooks />} />
        <Route path="/book_single/:id" element={<BookSingle />} />
        <Route path="/update_list/:id" element={<UpdateList />} />
        <Route path="/update_author/:id" element={<UpdateAuthor />} />
        <Route path="/update_title/:id" element={<UpdateTitle />} />
        <Route path="/update_genre/:id" element={<UpdateGenre />} />
        <Route path="/update_description/:id" element={<UpdateDescription />} />
        <Route path="/book_update_picture/:id" element={<BookPhotoUpdate />} />
        <Route path="/book_update_pdf/:id" element={<BookPdfUpdate />} />
        <Route path="/genres_panel" element={<GenresPanel />} />
        <Route path="/show_book_genres" element={<ShowBookGenres />} />
        <Route path="/genre_single/:id" element={<GenreSingle />} />
        <Route path="/books_in_this_genre/:id" element={<BooksInThisGenre />} />
        <Route path="/edit_genre/:id" element={<EditGenre />} />
        <Route path="/delete_genre/:id" element={<EraseGenre />} />
        <Route path="/adminpanel" element={<AdminPanel />} />
        <Route path="/create_librarian" element={<CreateLibrarian />} />

        
        
      </Routes>



    </div>




  </Router>
  

  </>  
  
  );
}

export default App;

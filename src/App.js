import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import NavigationBar from "./components/nav/NavigationBar";
import Login from "./components/pages/Login";
// import Authors from "./components/pages/Authors";
// import CreateAuthors from "./components/pages/CreateAuthors";
// import BooksPanel from "./components/pages/BooksPanel";
// import UploadBooks from "./components/pages/UploadBooks";
import SuperAdminLogin from "./components/pages/SuperAdminLogin";
// import ManageBooks from "./components/pages/ManageBooks";
// import BookSingle from "./components/pages/BookSingle";
// import ShowAuthor from "./components/pages/ShowAuthor";
// import AuthorBooks from "./components/pages/AuthorBooks";
// import UpdateAuthorPicture from "./components/pages/UpdateAuthorPicture";
// import UpdateAuthorBio from "./components/pages/UpdateAuthorBio";
// import UpdateAuthorName from "./components/pages/UpdateAuthorName";
// import UpdateAuthorCountry from "./components/pages/UpdateAuthorCountry";
// import AuthorMore from "./components/pages/AuthorMore";
// import SelectAuthor from "./components/pages/SelectAuthor";
// import DeleteAuthorsBooks from "./components/pages/DeleteAuthorsBooks";
// import DeleteBook from "./components/pages/DeleteBook";
// import ManageAuthors from "./components/pages/ManageAuthors";
// import DeleteAuthorProfile from "./components/pages/DeleteAuthorProfile";
// import Categories from "./components/pages/Categories";
// import CreateCategories from "./components/pages/CreateCategories";
// import ManageCategories from "./components/pages/ManageCategories";
import LoginPanel from "./components/pages/LoginPanel";
// import LibrarianPanel from "./components/superAdmin/LibrarianPanel";
// import CreateLibrarian from "./components/superAdmin/CreateLibrarian";
// import ManageLibrarian from "./components/superAdmin/ManageLibrarian";
// import WriteYourInfo from "./components/adminpending/WriteYourInfo";
// import LibrarianInfo from "./components/superAdmin/LibrarianInfo";
// import ChangeAdminStatus from "./components/superAdmin/ChangeAdminStatus";
// import AdminStatus from "./components/superAdmin/AdminStatus";
// import AccountStatus from "./components/superAdmin/AccountStatus";
// import Users from "./components/pages/Users";
// import ShowUser from "./components/pages/ShowUser";
// import SuspendUser from "./components/pages/SuspendUser";
// import UnsuspendUser from "./components/pages/UnsuspendUser";
// import UserBorrowedBooks from "./components/pages/UserBorrowedBooks";
// import DeleteUser from "./components/pages/DeleteUser";
// import Borrowers from "./components/pages/Borrowers";


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
        {/* <Route path="/authors" element={<Authors />} />
        <Route path="/create_authors" element={<CreateAuthors />} />
        <Route path="/books_panel" element={<BooksPanel />} />
        <Route path="/upload_books/:id" element={<UploadBooks />} />
        
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
        <Route path="/delete_author_books/:id" element={<DeleteAuthorsBooks />} />
        <Route path="/delete_book/:id" element={<DeleteBook />} />
        <Route path="/manage_authors" element={<ManageAuthors />} />
        <Route path="/delete_author_profile/:id" element={<DeleteAuthorProfile />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/create_category" element={<CreateCategories />} />
        <Route path="/manage_categories" element={<ManageCategories />} />
        
        <Route path="/make_admin" element={<LibrarianPanel />} />
        <Route path="/make_librarian" element={<CreateLibrarian />} />
        <Route path="/manage_librarian" element={<ManageLibrarian />} />
        <Route path="/write_info" element={<WriteYourInfo />} />
        <Route path="/librarian_info" element={<LibrarianInfo />} />
        <Route path="/change_admin_status" element={<ChangeAdminStatus />} />
        <Route path="/admin_status/:id" element={<AdminStatus />} />
        <Route path="/account_status/:id" element={<AccountStatus />} />
        <Route path="/users" element={<Users />} />
        <Route path="/show_user/:id" element={<ShowUser />} />
        
        <Route path="/suspend_user/:id" element={<SuspendUser />} />
        <Route path="/unsuspend_user/:id" element={<UnsuspendUser />} />
        <Route path="/see_borrowed_books/:id" element={<UserBorrowedBooks />} />
        <Route path="/delete_user/:id" element={<DeleteUser />} />
        <Route path="/borrowers" element={<Borrowers />} /> */}


        
        
      </Routes>



    </div>




  </Router>
  

  </>  
  
  );
}

export default App;

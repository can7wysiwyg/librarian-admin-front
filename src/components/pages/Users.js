import { useContext, useState } from "react"
import { GlobalState } from "../../GlobalState"
import moment from "moment/moment"

function Users() {
   const state = useContext(GlobalState)
   const[users] = state.usersApi.users
   const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = users.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(users.length / itemsPerPage);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };




   if(users.length === 0) {
    return(<>
    
    <p className="text-center">no users at the moment</p>
    </>)
   }
    return(<>
    <div className="row" style={{ marginBottom: "2rem" }}>
        {currentUsers.map((user) => (
          <div className="col-md-4 mb-4 text-center" key={user._id}>
            <div className="card h-50 shadow-sm ">
                <a className="text-center" href={`/show_user/${user._id}`} > {user.fullname} </a>
              <img
                src={user.userImage}
                alt={user.fullname}
                className="card-img-top"
                style={{
                  maxWidth: "70vh",
                  maxHeight: "20vh",
                  objectFit: "contain"
                }}
              />
              <div className="card-body">
                <p
            
                  className="card-title"
            
                >
                  {user.email}
                </p>

                
               
              </div>
              <div className="card-footer">

                <p>joined on {moment(user.createdAt).format("MMM D YYYY")}</p>
                
              </div>
            </div>
          </div>
        ))}
      </div>


      <nav>
        <ul className="pagination">
          {pageNumbers.map((pageNumber) => (
            <li
              key={pageNumber}
              className={`page-item ${
                currentPage === pageNumber ? "active" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => changePage(pageNumber)}
              >
                {pageNumber}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    

    
    
    </>)
}

export default Users
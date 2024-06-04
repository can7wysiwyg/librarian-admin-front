import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from "../../redux/actions/usersAction"
import moment from "moment/moment"

function ShowUsers() {
     const users = useSelector((state) => state.userRdcr.users)
     const dispatch = useDispatch()


     const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = users?.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(users?.length / itemsPerPage);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };





     useEffect(() => {

        const fetchUsers = async() => {

            await dispatch(getUsers())


        }

        fetchUsers()



     }, [dispatch])


     if(!users || users === undefined || users === null) {

        return(<>
        
        <h6 className="text-center" style={{marginTop: "3rem"}}>users are loading</h6>
        
        
        </>)
        
     }


     if( users.length === 0) {

        return(<>
        
        <h6 className="text-center" style={{marginTop: "3rem"}}>no users exist in the system ☹️☹️☹️</h6>
        
        
        </>)
        
     }




    return(<>


<div className="row" style={{ marginTop: "3rem", marginBottom: "1rem", fontFamily: "Times New Roman" }}>
        {currentUsers.map((user) => (
          <div className="col-md-4 mb-4 text-center" key={user._id}>
            <div className="card h-50 shadow-sm ">
                <a className="text-center" href={`/show_user/${user._id}`} > {user.fullname} </a>
              
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

export default ShowUsers
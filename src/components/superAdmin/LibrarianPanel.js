import "../styles/authors.css"

function LibrarianPanel() {
    return(<>
    <div className="container-fluid d-flex justify-content-center align-items-center " >
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <a href="/make_librarian" className="card-title">MAKE LIBRARIAN</a>
        
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <a href="/manage_librarian" className="card-title">MANAGE LIBRARIAN</a>
            
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
    
    </>)
}

export default LibrarianPanel
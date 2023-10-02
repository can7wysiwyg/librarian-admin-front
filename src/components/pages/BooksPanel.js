// import "../styles/authors.css"

function BooksPanel() {
    return(<>
    <div className="container-fluid d-flex justify-content-center align-items-center " >
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <a href="/select_author" className="card-title">UPLOAD BOOKS</a>
              <p className="card-text">Upload Books To The Site</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <a href="/manage_books" className="card-title">MANAGE BOOKS</a>
              <p className="card-text">View And Manage Books On The Site</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    

    
    
    </>)
}

export default BooksPanel
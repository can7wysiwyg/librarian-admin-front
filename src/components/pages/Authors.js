import "../styles/authors.css"
function Authors() {
    return(<>

<div className="container-fluid d-flex justify-content-center align-items-center " >
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <a href="/create_authors" className="card-title">CREATE AUTHORS</a>
              <p className="card-text">Add Authors To The Site</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <a href="/manage_authors" className="card-title">MANAGE AUTHORS</a>
              <p className="card-text">View And Manage Authors On The Site</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
    </>)
}

export default Authors
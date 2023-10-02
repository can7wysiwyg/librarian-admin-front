// import "../styles/authors.css"

function Categories() {
    return(<>
    <div className="container-fluid d-flex justify-content-center align-items-center " >
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <a href="/create_category" className="card-title">CREATE CATEGORIES</a>
              
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <a href="/manage_categories" className="card-title">MANAGE CATEGORIES</a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
    
    </>)
}

export default Categories
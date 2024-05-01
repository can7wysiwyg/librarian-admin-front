// import "../styles/authors.css"


function LoginPanel() {
    return(<>
    <div className="container-fluid d-flex justify-content-center align-items-center " >
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <a href="/super_login" className="card-title">MANAGER LOGIN</a>
              
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <a href="/login" className="card-title">LIBRARIAN LOGIN</a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
    
    </>)
}

export default LoginPanel
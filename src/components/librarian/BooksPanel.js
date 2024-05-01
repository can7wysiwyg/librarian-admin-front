function BooksPanel() {
    return (
      <div className=" text-center" style={{ marginTop: "2rem" }}>
        <ol className="list-group list-group-numbered">
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Upload Books</div>
              <p><a href="/upload_book">Upload books</a></p>
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">View Books</div>
              <p><a href="/see_books">View books</a></p>
            </div>
          </li>
        </ol>
      </div>
    );
  }
  
  export default BooksPanel;
  
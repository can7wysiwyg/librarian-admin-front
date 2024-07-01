function GenrePanel() {
    return (
      <div className=" text-center" style={{ marginTop: "2rem" }}>
        <ol className="list-group list-group-numbered">
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Create Genre</div>
              <p><a href="/create_genre">create genre</a></p>
            </div>
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Create Book Sub Genres</div>
              <p><a href="/create_subgenres">create sub genres</a></p>
            </div>
          </li>


          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">View Book Genres</div>
              <p><a href="/show_book_genres">view book genres</a></p>
            </div>
          </li>

          


        </ol>
      </div>
    );
  }
  
  export default GenrePanel;
  
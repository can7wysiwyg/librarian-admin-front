import { useParams } from "react-router-dom"

function UpdateList() {
const{id} = useParams()

    return(<>
    <div className=" text-center" style={{ marginTop: "2rem" }}>
        <ol className="list-group list-group-numbered">
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Update Book Title</div>
              <p><a href={`/update_title/${id}`}>update book title</a></p>
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Update Book Author</div>
              <p><a href={`/update_author/${id}`}>update book author</a></p>
            </div>
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Update Book Description</div>
              <p><a href={`/update_description/${id}`}>update book description</a></p>
            </div>
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Update Book Genre</div>
              <p><a href={`/update_genre/${id}`}>update book genre</a></p>
            </div>
          </li>





        </ol>
      </div>
    
    
    
    </>)
}

export default UpdateList
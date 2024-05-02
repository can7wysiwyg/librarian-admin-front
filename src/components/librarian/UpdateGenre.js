import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { GenreUpdate } from "../../redux/actions/bookAction";
import { getGenres } from "../../redux/actions/genreAction";

function UpdateGenre() {
    const {id} = useParams()
    const[formData, setFormData] = useState({
        bookGenre: ""
    })

    const genres = useSelector((state) => state.genreRdcr.genres)
    const dispatch = useDispatch()


    useEffect(() => {

        const fetchData = async() => {
 try {

    await dispatch(getGenres())
    
 } catch (error) {
    console.error("there was a problem")
 }

        }

        fetchData()


    }, [dispatch])

    const handleInputChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };


      const handleSubmit = async(event) => {
        event.preventDefault()

        await dispatch(GenreUpdate(id, formData))
      }



      if(!genres || genres === undefined || genres === null) {

        return(<>
        <h6 className="text-center" style={{marginTop: "2rem"}}>content is loading</h6>
        
        </>)
      }

    return(<>
     <Container style={{  fontFamily: "sans-serif", marginTop: "2rem" }}>
    <h4 style={{textAlign: "center", marginBottom: "1rem", color: "red", fontStyle: "cursive", fontFamily: "Times New Roman"}}>upload  book genre</h4>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>

            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicBookGenre">
              <Form.Select
                name="bookGenre"
                value={formData.bookGenre}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Book Genre</option>
                {genres?.map((genre) => (
                  <option value={genre._id} key={genre._id}>
                    {genre.genreName}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>



<Button type="submit">update book genre</Button>



                </Form>
                </Col>
                </Row>
                </Container>

    
    
    </>)
}

export default UpdateGenre
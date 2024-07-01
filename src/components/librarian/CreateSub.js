import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { SingleGenre, subGenreCreate } from "../../redux/actions/genreAction"
import { useEffect, useState } from "react"
import { Container, Form, Row, Col, Button } from "react-bootstrap";

function CreateSub() {
const {id} = useParams()
const[formData, setFormData] = useState({
    subgenres: ""
})
const genre = useSelector((state) => state.genreRdcr.genre)
const dispatch = useDispatch()


useEffect(() => {

    const fetchGenre = async() => {

        try {

            await dispatch(SingleGenre(id))
            
        } catch (error) {
            console.error("there was a problem")
        }


    }

    fetchGenre()


}, [dispatch, id])



const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };



const handleSubmit = async(e) => {

    e.preventDefault()

    await dispatch(subGenreCreate(id, formData))


}


if(!genre) {
    return(<>
    
    <h6 className="text-center" style={{marginTop: "3rem"}}>book genre name is loading</h6>
    </>)
}




    return(<>
    <Container style={{marginTop: "4rem", fontFamily: "Times New Roman"}}>
        <h4 className="text-center">Create A Subgenre Of {genre.genreName} </h4>
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
      
            <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="formBasicSubgenre">
              <Form.Control
                type="text"
                name="subgenres"
                value={formData.subgenres}
                onChange={handleInputChange}
                placeholder="write subgenre"
                required
              />
            </Form.Group>

            <Button type="submit">create subgenre</Button>




                </Form>
                </Col>
                </Row>
                </Container>

    
    
    </>)
}

export default CreateSub
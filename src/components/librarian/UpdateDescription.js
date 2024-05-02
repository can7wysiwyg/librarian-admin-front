import { useParams } from "react-router-dom";
import { DescriptionUpdate, SingleBook } from "../../redux/actions/bookAction";
import { useDispatch, useSelector } from "react-redux";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useEffect, useState } from "react";


function UpdateDescription() {
    const {id} = useParams()
    const[formData] = useState({
        bookDescription: ""
    })

    const [checkDesc, setCheckDesc] = useState("");

      
    const book = useSelector((state) => state.bookRdcr.book)
    const dispatch = useDispatch()





    useEffect(() => {

        const fetchData = async() => {

            try {

                await dispatch(SingleBook(id))
                
            } catch (error) {
                console.error("there was a problem")
            }

        }

        fetchData()


    }, [dispatch, id])

    const handleInputChange = (e) => {
        setCheckDesc(e.target.value);
      };
    

      const handleSubmit = async(event) => {
        event.preventDefault()

        formData.bookDescription = checkDesc;


        await dispatch(DescriptionUpdate(id, formData))


      }
    

if(!book) {
    return(<>
    <h6 className="text-center" style={{marginTop: "2rem"}}>content is loading</h6>
    </>)
}


    return(<>
    <Container style={{marginTop: "2rem"}}>
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
            <h6>update review </h6>

            <Form onSubmit={handleSubmit}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <textarea
                  name="bookDescription"
                  defaultValue={book.bookDescription}
                  onChange={handleInputChange}
                  rows="15"
                  cols="90"
                ></textarea>
              </Form.Group>

              <Button type="submit" variant="danger">
                update book description
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    
    
    </>)
}

export default UpdateDescription
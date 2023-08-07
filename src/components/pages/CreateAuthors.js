import axios from "axios";
import { useState, useContext } from "react";
import { GlobalState } from "../../GlobalState";
import { Container, Form, Row, Col, Button } from "react-bootstrap";


function CreateAuthors() {
    const state = useContext(GlobalState);
    const token = state.token;
     
    const[values, setValues] = useState({authorName: "", authorCountry: "", authorShortBio: "" })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    

    }

    const handleSubmit = async(event) => {
        event.preventDefault()

        const res = await axios.post('/author/create_author', {...values}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        console.log(res);

    }




    return(<>
    <Container style={{marginTop: "4rem", fontFamily: "Times New Roman"}}>
        <h4 className="text-center">Create Author</h4>
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
      
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicAuthorName">
                
                <Form.Control
                  type="text"
                  name="authorName"
                  value={ values.authorName }
                  onChange={handleChange}

                  placeholder="Author Name"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicAuthorCountry">
                
                <Form.Control
                  type="text"
                  name="authorCountry"
                  value={ values.authorCountry }
                  onChange={handleChange}

                  placeholder="Author's Country"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicAuthorShortBio">
              <Form.Control
                as="textarea"
                rows="4"
                name="authorShortBio"
                value={values.authorShortBio}
                onChange={handleChange}
                placeholder="A short summary of the author"
              />



              </Form.Group>




              <Button>Create Author</Button>
              </Form>
              </Col>
              </Row>
              </Container>

    
    
    </>)
}

export default CreateAuthors
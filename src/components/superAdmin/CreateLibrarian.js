import { useContext, useState } from "react"
import { GlobalState } from "../../GlobalState"
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import axios from "axios";


function CreateLibrarian() {
   const state = useContext(GlobalState)
   const supertoken = state.supertoken
   const[values, setValues] = useState({uniqueName: "", email: "", password: ""})

   const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });


}

const handleSubmit = async(event) => {
    event.preventDefault()

    const res = await axios.post('/admin/register', {...values}, {
        headers: {
            Authorization: `Bearer ${supertoken}`
        }
    })

    alert(res.data.msg)
    window.location.href = "/manage_librarian"
}



    return(<>
    <Container style={{marginTop: "4rem", fontFamily: "Times New Roman"}}>
        <h4 className="text-center">Create Author</h4>
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
      
            <Form onSubmit={handleSubmit} encType="multipart/form-data">

              <Form.Group className="mb-3" controlId="formBasicUniqueName">
                
                <Form.Control
                  type="text"
                  name="uniqueName"
                  value={ values.uniqueName }
                  onChange={handleChange}

                  placeholder="Unique Name"
                  required
                />
              </Form.Group>

              

              <Form.Group className="mb-3" controlId="formBasicEmail">
                
                <Form.Control
                  type="text"
                  name="email"
                  value={ values.email }
                  onChange={handleChange}

                  placeholder="email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="text"
                name="password"
                value={values.password}
                onChange={handleChange}
                placeholder="password"
                required
              />



              </Form.Group>




              <Button type="submit">Create Librarian</Button>
              </Form>
              </Col>
              </Row>
              </Container>

    
    </>)
}

export default CreateLibrarian
import {  useState } from "react"
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { MakeLibrarian } from "../../redux/actions/mainAdminTasksAction";



function CreateLibrarian() {
   
   const[formData, setFormData] = useState({uniqueName: "", email: "", password: ""})
   const dispatch = useDispatch()



   const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });



   }

   

const handleSubmit = async(event) => {
    event.preventDefault()

    await dispatch(MakeLibrarian(formData))


    
}



    return(<>
    <Container style={{marginTop: "4rem", fontFamily: "Times New Roman"}}>
        <h4 className="text-center">Create Librarian</h4>
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
      
            <Form onSubmit={handleSubmit} encType="multipart/form-data">

              <Form.Group className="mb-3" controlId="formBasicUniqueName">
                
                <Form.Control
                  type="text"
                  name="uniqueName"
                  value={ formData.uniqueName }
                  onChange={handleChange}

                  placeholder="Unique Name"
                  required
                />
              </Form.Group>

              

              <Form.Group className="mb-3" controlId="formBasicEmail">
                
                <Form.Control
                  type="text"
                  name="email"
                  value={ formData.email }
                  onChange={handleChange}

                  placeholder="email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="text"
                name="password"
                value={formData.password}
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
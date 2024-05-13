import {  useState } from "react"
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { MakeLibrarian } from "../../redux/actions/mainAdminTasksAction";



function CreateLibrarian() {
   
   const[formDatta, setFormDatta] = useState({uniqueName: "", email: "", password: "", phoneNumber: "", home: "", fullname: "" })
   const[librarianImage, setLibrarianImage] = useState(false)
   const dispatch = useDispatch()



   const handleChange = (e) => {
    setFormDatta({
      ...formDatta,
      [e.target.name]: e.target.value,
    });

   }

   const handleBookImageUpload = (event) => {
    const file = event.target.files[0];
    setLibrarianImage(file);
  };
   

const handleSubmit = async(event) => {
    event.preventDefault()

    let formData = new FormData()

    formData.append('email', formDatta.email)
    formData.append('fullname', formDatta.fullname)
    formData.append('home', formDatta.home)
    formData.append('password', formDatta.password)
    formData.append('phoneNumber', formDatta.phoneNumber)
    formData.append('uniqueName', formDatta.uniqueName)
    formData.append('librarianImage', librarianImage)

    await dispatch(MakeLibrarian(formData))


    
}



    return(<>
    <Container style={{marginTop: "4rem", fontFamily: "Times New Roman"}}>
        <h4 className="text-center">Create Librarian</h4>
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
      
            <Form onSubmit={handleSubmit} encType="multipart/form-data">

            <Form.Group className="mb-3" controlId="formBasicLibImage">
              <Form.Label>Upload librarian photo </Form.Label>
              <Form.Control
                type="file"
                onChange={handleBookImageUpload}
                required
                 accept=".png, .jpg, .jpeg, .webp"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicFullName">
                
                <Form.Control
                  type="text"
                  name="fullname"
                  value={ formDatta.fullname }
                  onChange={handleChange}

                  placeholder="fullname"
                  required
                />
              </Form.Group>



              <Form.Group className="mb-3" controlId="formBasicUniqueName">
                
                <Form.Control
                  type="text"
                  name="uniqueName"
                  value={ formDatta.uniqueName }
                  onChange={handleChange}

                  placeholder="Unique Name to help in password reset"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicHomeAddress">
                
                <Form.Control
                  type="text"
                  name="home"
                  value={ formDatta.home }
                  onChange={handleChange}

                  placeholder="write their current home address"
                  required
                />
              </Form.Group>


              

              <Form.Group className="mb-3" controlId="formBasicEmail">
                
                <Form.Control
                  type="text"
                  name="email"
                  value={ formDatta.email }
                  onChange={handleChange}

                  placeholder="email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                
                <Form.Control
                  type="mumber"
                  name="phoneNumber"
                  value={ formDatta.phoneNumber }
                  onChange={handleChange}

                  placeholder="write phone number"
                  required
                />
              </Form.Group>


              <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="text"
                name="password"
                value={formDatta.password}
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
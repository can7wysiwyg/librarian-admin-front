import axios from "axios";
import { useState, useContext } from "react";
import { GlobalState } from "../../GlobalState";
import { Container, Form, Row, Col, Button } from "react-bootstrap";


function WriteYourInfo() {
    const state = useContext(GlobalState);
    const token = state.token;
     
    const[values, setValues] = useState({fullname: "", personalEmail: "", phoneNumber: "", gender: "", home: "" })
    const[librarianImage, setAdminImage] = useState(false)

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    

    }

    const handleAdminrImageUpload = (event) => {
      const file = event.target.files[0];
      setAdminImage(file);
    };
  

    const handleSubmit = async(event) => {
        event.preventDefault()

        let formData = new FormData() 

        formData.append('librarianImage', librarianImage)
        formData.append('fullname', values.fullname)
        formData.append('personalEmail', values.personalEmail)
        formData.append('phoneNumber', values.phoneNumber)
        formData.append('home', values.home)
        formData.append('gender', values.gender)

        const res = await axios.post('/admin/update_info', formData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        alert(res.data.msg);

        localStorage.removeItem("token")
      window.location.href = "/"


       
    }



    return(<>
    <Container style={{marginTop: "4rem", fontFamily: "Times New Roman"}}>
        <h4 className="text-center">Create Author</h4>
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
      
            <Form onSubmit={handleSubmit} encType="multipart/form-data">


            <Form.Group className="mb-3" controlId="formBasicBookImage">
              <Form.Label>Upload Your Image</Form.Label>
              <Form.Control
                type="file"
                onChange={handleAdminrImageUpload}
                required
                 accept=".jpg"
              />
            </Form.Group>


              <Form.Group className="mb-3" controlId="formBasicYourName">
                
                <Form.Control
                  type="text"
                  name="fullname"
                  value={ values.fullname }
                  onChange={handleChange}

                  placeholder="Your Name"
                  required
                />
              </Form.Group>

              

              <Form.Group className="mb-3" controlId="formBasicEmail">
                
                <Form.Control
                  type="text"
                  name="personalEmail"
                  value={ values.personalEmail }
                  onChange={handleChange}

                  placeholder="Your Email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPhone">
                
                <Form.Control
                  type="number"
                  name="phoneNumber"
                  value={ values.phoneNumber }
                  onChange={handleChange}

                  placeholder="Your Phone Number"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicHome">
                
                <Form.Control
                  type="text"
                  name="home"
                  value={ values.home }
                  onChange={handleChange}

                  placeholder="Your Place Of Residency"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicGender">
                
                <Form.Control
                  type="text"
                  name="gender"
                  value={ values.gender }
                  onChange={handleChange}

                  placeholder="Your Gender"
                  required
                />
              </Form.Group>

              <Button type="submit">Submit Your Info</Button>
              </Form>
              </Col>
              </Row>
              </Container>

    
    
    
    </>)
}

export default WriteYourInfo
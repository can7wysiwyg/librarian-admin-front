import axios from "axios";
import { useState, useContext } from "react";
import { GlobalState } from "../../GlobalState";
import { Container, Form, Row, Col, Button } from "react-bootstrap";


function CreateAuthors() {
    const state = useContext(GlobalState);
    const token = state.token;
     
    const[values, setValues] = useState({authorName: "", authorCountry: "", authorShortBio: "" })
    const[authorImage, setAuthorImage] = useState(false)

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    

    }

    const handleAuthorImageUpload = (event) => {
      const file = event.target.files[0];
      setAuthorImage(file);
    };
  

    const handleSubmit = async(event) => {
        event.preventDefault()

        let formData = new FormData() 

        formData.append('authorImage', authorImage)
        formData.append('authorName', values.authorName)
        formData.append('authorCountry', values.authorCountry)
        formData.append('authorShortBio', values.authorShortBio)

        const res = await axios.post('/author/create_author', formData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        alert(res.data.msg);

        window.location.href = "/manage_authors"

    }




    return(<>
    <Container style={{marginTop: "4rem", fontFamily: "Times New Roman"}}>
        <h4 className="text-center">Create Author</h4>
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
      
            <Form onSubmit={handleSubmit} encType="multipart/form-data">


            <Form.Group className="mb-3" controlId="formBasicBookImage">
              <Form.Label>Upload Author Image</Form.Label>
              <Form.Control
                type="file"
                onChange={handleAuthorImageUpload}
                required
                 accept=".jpg"
              />
            </Form.Group>


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
                required
              />



              </Form.Group>




              <Button type="submit">Create Author</Button>
              </Form>
              </Col>
              </Row>
              </Container>

    
    
    </>)
}

export default CreateAuthors
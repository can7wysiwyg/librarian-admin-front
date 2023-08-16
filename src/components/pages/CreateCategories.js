import React, { useContext, useState } from 'react';
import axios from 'axios';
import { GlobalState } from '../../GlobalState';
import { Container, Form, Row, Col, Button } from "react-bootstrap";



function CreateCategories() {
    const state = useContext(GlobalState)
  const token = state.token
  const [genreName, setGenreName] = useState([]);

  const handleInputChange = (e) => {
    setGenreName(e.target.value);
  };


  const handleSubmit = async(event) => {
    event.preventDefault()

    const res = await axios.post('/genre/create_genre', {genreName}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    alert(res.data.msg)

    window.location.href = "/manage_categories"

  }



    return(<>
    <Container style={{marginTop: "4rem", fontFamily: "Times New Roman"}}>
        <h4 className="text-center">Create Book Genre</h4>
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
      
            <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="formBasicGenreName">
                
                <Form.Control
                  type="text"
                  name="genreName"
                  value={ genreName }
                  onChange={handleInputChange}

                  placeholder="Book Genre"
                  required
                />
              </Form.Group>

              <Button type="submit">Create Genre</Button>



</Form>
</Col>
</Row>
</Container>    
    
    </>)
}

export default CreateCategories
import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import '../../bootstrap.min.css';

const Footer = () => {
  return (
    <div style={{
      width: "100%",
      display:'flex',
      justifyContent:'center',
      position:'relative',
      bottom: 0,
    }}>

   <Container>
    <Row>
      <Col className='text-center' py-3>Copyright &copy; Task Manager</Col>
    </Row>
   </Container>

    </div>
  ) 
}

export default Footer
import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import './LandingPage.css'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className='main'>
        <Container>
            <Row>
            <div className='intro-text'>
               <h1 className='title'>Welcome to Task Manager</h1>
               <p className='susbtitle'>One place for all your tasks.</p>
            </div>
            <div>
            <div className='buttonContainer'>
                <a href='/login'>
                    <Button size='lg' className='landingbutton'>
                        Login
                    </Button>
                </a>
                <a href='/register'>
                    <Button size='lg' className='landingbutton' variant='outline-primary'>
                        Signup
                    </Button>
                </a>
            </div>
            </div>
            </Row>
        </Container>
    </div>
  )
}

export default LandingPage
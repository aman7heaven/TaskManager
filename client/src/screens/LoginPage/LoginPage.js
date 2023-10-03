import React, { useEffect, useState } from 'react'
import MainScreen from '../../components/MainScreen'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import './LoginScreen.css'
import Loading from '../../components/Loading'
import ErrorMessage from '../../components/ErrorMessage'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../actions/userActions'

function LoginPage({history}) {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const dispatch = useDispatch();
    const userLogin = useSelector((state)=> state.userLogin);
    const {loading, error, userinfo} = userLogin
     console.log(loading);
     console.log(error);
     console.log(userinfo);

    const navigate = useNavigate();
    useEffect(() => {
       if(userinfo){
        navigate("/mytasks");
       }
    }, [navigate, userinfo]);

    const submitHandler = async(e)=> {
        e.preventDefault(); 
        dispatch(login(email, password)); 
    }

  return (
    <MainScreen title={"Login"}>
    <div className='loginContainer'>
        {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
        {loading && <Loading size={50}/>}
       <Form onSubmit={submitHandler}>
        <Form.Group controlId = "formBasicEmail">
           <Form.Label>Email address</Form.Label>
           <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e)=>setemail(e.target.value)}
           />
        </Form.Group>

        <Form.Group controlId = "formBasicPassword">
           <Form.Label>Password</Form.Label>
           <Form.Control
            type='password'
            placeholder='password'
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
           />
        </Form.Group>

        <Button variant='primary' type='submit' className='mt-3'>
            Login
        </Button>
       </Form>
       <Row className='py-3'>
          <Col>
          New Customer ? <Link to="/register"> Register Here</Link>
          </Col>
       </Row>
       </div>
        </MainScreen>
  )
}

export default LoginPage
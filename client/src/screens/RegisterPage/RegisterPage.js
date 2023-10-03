import React, { useEffect, useState } from 'react'
import MainScreen from '../../components/MainScreen'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import ErrorMessage from '../../components/ErrorMessage';
import Loading from '../../components/Loading';
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../actions/userActions';


function RegisterPage() {

const [email, setemail] = useState("");
const [name, setname] = useState("");
const [password, setpassword] = useState("");
const [confirmpassword, setconfirmpassword] = useState("");
const [message, setmessage] = useState(null);

const dispatch = useDispatch();
const userRegister = useSelector(state=>state.userRegister)
const {loading, error, userinfo} = userRegister

const navigate = useNavigate();
useEffect(() => {
   if(userinfo){
    navigate("/mytasks");
   }
}, [navigate, userinfo]);

const submitHandler = async(e) => {
  e.preventDefault();

   if(!name || !email || !password || !confirmpassword){
     setmessage('please fill all the form fields')
   } else if(password !== confirmpassword) {
    setmessage('Passwords do not match')
   }else{
      dispatch(register(name,email,password,confirmpassword));
   }
}
    
  return (
    <MainScreen title={"Register"}>
        <div className='loginContainer'> 
        {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
        {message && <ErrorMessage variant='danger'>{message}</ErrorMessage>}
        {loading && <Loading size={50}/>}
       <Form onSubmit={submitHandler}>
        <Form.Group controlId = "name">
           <Form.Label>Name</Form.Label>
           <Form.Control
            type='name'
            placeholder='Enter name'
            value={name}
            onChange={(e)=>setname(e.target.value)}
           />
        </Form.Group>

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

        <Form.Group controlId = "confirmPassword">
           <Form.Label>Confirm Password</Form.Label>
           <Form.Control
            type='password'
            placeholder='Confirm password'
            value={confirmpassword}
            onChange={(e)=>setconfirmpassword(e.target.value)}
           />
        </Form.Group>

        <Button variant='primary' type='submit' className='mt-3'>
            Register
        </Button>
       </Form>
       <Row className='py-3'>
          <Col>
          Old Customer ? <Link to="/login"> Login Here</Link>
          </Col>
       </Row>
       </div>
    </MainScreen>
  )
}

export default RegisterPage
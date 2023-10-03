import React, { useState, useEffect } from 'react'
import MainScreen from '../../components/MainScreen'
import { Link, useNavigate } from 'react-router-dom'
import { Accordion, Badge, Button,Card } from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Loading from '../../components/Loading'
import Error from '../../components/ErrorMessage'
import { deleteNoteAction, listNotes } from '../../actions/notesActions'

const MyTasks = () => {

  const dispatch = useDispatch();
  const taskList = useSelector(state=> state.taskList);
  const {loading, notes, error} = taskList;

  const userLogin = useSelector((state)=> state.userLogin);
  const { userinfo } = userLogin;

  const taskDelete = useSelector(state=> state.taskDelete);
  const{ loading:loadingDelete,error: errorDelete,success:successDelete } = taskDelete;



  const navigate = useNavigate();

  const deleteHandler = (id) => {
    if(window.confirm("Are you sure?")) {
      dispatch(deleteNoteAction(id));
    }
  } 
 
  useEffect(() => {
    dispatch(listNotes())
    if(!userinfo) {
      navigate("/");
    }
  }, [dispatch,userinfo,successDelete]);

  return (
    <MainScreen title={`Welcome Back ${userinfo.name}`}>
        <Link to='/createtask'>
          <Button style={{marginLeft: 10, marginBottom: 6}} size='lg'>
            Create New Task
          </Button>
          </Link>
          {error && <Error variant='danger'>{error}</Error>}
          {loading && <Loading/>}
          {
            notes?.reverse().map((note)=>(
              <Accordion defaultActiveKey={['0']}>
          <Accordion.Item eventKey='0'>
          <Card style={{margin: 10}}>
            <Card.Header style={{display: "flex"}}>
                <span style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 18, 
                }}>
                  
                  <Accordion.Button as={Card.Text} variant='link' eventKey='0'>{note.title}</Accordion.Button>
                  </span>
            <div>
                <Button href={`/task/${note._id}`} >
                    Edit
                </Button>
                <Button variant='danger' className='mx-2' onClick={()=>deleteHandler(note._id)}>
                    Delete
                </Button>
            </div>
            </Card.Header>
            <Accordion.Collapse eventKey='0'>
            <Card.Body>
              <h4>
               <Badge bg="success" text="light">
                Category - {note.category}
               </Badge>
              </h4>
              <blockquote className='blockquote mb-0'>
                  <p>
                   {note.content}
                  </p>
                  <footer className='blockquote-footer mt-2'>
                      Created On - {note.createdAt.substring(0,10)}
                  </footer>
              </blockquote>
            </Card.Body>
            </Accordion.Collapse>
          </Card>
          </Accordion.Item>
          </Accordion>
            ))}
    </MainScreen>
  )
}

export default MyTasks
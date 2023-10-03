// import React, { useEffect, useState } from "react";
// import MainScreen from "../../components/MainScreen";
// import axios from "axios";
// import { Button, Card, Form } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { deleteNoteAction, updateNoteAction } from "../../actions/notesActions";
// import ErrorMessage from "../../components/ErrorMessage";
// import Loading from "../../components/Loading";
// import ReactMarkdown from "react-markdown";
// import { useNavigate,useParams } from "react-router-dom";

// const UpdateTask =()=> {

//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [category, setCategory] = useState("");
//   const [date, setDate] = useState("");
//   const {id} = useParams();

//   const dispatch = useDispatch();

//   const userLogin = useSelector((state)=> state.userLogin);
//   const {userinfo} = userLogin

//   const taskUpdate = useSelector((state) => state.taskUpdate);
//   const { loading, error } = taskUpdate;

//   const taskDelete = useSelector((state) => state.taskDelete);
//   const { loading: loadingDelete, error: errorDelete } = taskDelete;
 
//   const navigate = useNavigate();
//   const deleteHandler = async(id) => {
//     if (window.confirm("Are you sure?")) {
//       dispatch(deleteNoteAction(id));
//     }
//     navigate("/mytasks");
//   };

//   useEffect(() => {
//     const fetching = async () => {
//         const config = {
//             headers: {
//               Authorization: `Bearer ${userinfo.token}`,
//             },
//           }; 
//           console.log(userinfo.token) 
//       const { data } = await axios.get(`http://localhost:5000/api/v1/tasks/gettask/${id}`, config);
//       console.log(data)
//       setTitle(data.title);
//       setContent(data.content);
//       setCategory(data.category);
//       setDate(data.updatedAt);
//     };

//     fetching();
//   }, [id, date]);

//   const resetHandler = () => {
//     setTitle("");
//     setCategory("");
//     setContent("");
//   };

//   const updateHandler = async(e) => {
//     e.preventDefault();
//     if (!title || !content || !category) return;
//     dispatch(updateNoteAction(id, title, content, category));

//     resetHandler();
//     navigate.push("/mytasks");
//   };

//   return (
//     <MainScreen title="Edit Task">
//       <Card>
//         <Card.Header>Edit your Task</Card.Header>
//         <Card.Body>
//           <Form onSubmit={updateHandler}>
//             {loadingDelete && <Loading />}
//             {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
//             {errorDelete && (
//               <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
//             )}
//             <Form.Group controlId="title">
//               <Form.Label>Title</Form.Label>
//               <Form.Control
//                 type="title"
//                 placeholder="Enter the title"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//               />
//             </Form.Group>

//             <Form.Group controlId="content">
//               <Form.Label>Content</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 placeholder="Enter the content"
//                 rows={4}
//                 value={content}
//                 onChange={(e) => setContent(e.target.value)}
//               />
//             </Form.Group>
//             {content && (
//               <Card>
//                 <Card.Header>Task Preview</Card.Header>
//                 <Card.Body>
//                   <ReactMarkdown>{content}</ReactMarkdown>
//                 </Card.Body>
//               </Card>
//             )}

//             <Form.Group controlId="content">
//               <Form.Label>Category</Form.Label>
//               <Form.Control
//                 type="content"
//                 placeholder="Enter the Category"
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)}
//               />
//             </Form.Group>
//             {loading && <Loading size={50} />}
//             <Button variant="primary" type="submit">
//               Update Note
//             </Button>
//             <Button
//               className="mx-2"
//               variant="danger"
//               onClick={() => deleteHandler(id)}
//             >
//               Delete Note
//             </Button>
//           </Form>
//         </Card.Body>

//         <Card.Footer className="text-muted">
//           Updated on - {date.substring(0, 10)}
//         </Card.Footer>
//       </Card>
//     </MainScreen>
//   );
// }

// export default UpdateTask;

import React from 'react'

function UpdateTasks() {
  return (
    <div>In development</div>
  )
}

export default UpdateTasks
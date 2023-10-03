const express = require('express');
const Note = require('../models/Task')
const asyncHandler = require('express-async-handler')
const app = express();

app.use(express.urlencoded({extended:true}))

module.exports.getTasks = asyncHandler(async(req,res)=>{
   const notes = await Note.find({user: req.user._id})
   res.json(notes) 
});

module.exports.createTask = asyncHandler(async(req,res)=>{
   const {title, content, category} = req.body;

   if(!title || !content || !category) {
    res.status(400).json({
        message: "Please fill all the fields"
    });
   } else {
    const note = new Note({user: req.user._id, title, content, category});
    const createdNote = await note.save();
    res.status(200).json(createdNote);
   }

})

module.exports.updateTask = asyncHandler(async(req,res)=>{
   const note = await Note.findById(req.params.id);
   const {title, content, category} = req.body

   if(!note) {
      res.status(404).json({message: "Note not found"});
      return;
   }

   if(note.user.toString() !== req.user._id.toString()) {
       res.status(400).json({
         message: "Unauthorized"
       });
       return
   }

   note.title = title;
   note.content = content;
   note.category= category;
   const updatedNote = await note.save();
   res.status(200).json(updatedNote);
})

module.exports.getTask =asyncHandler(async(req,res)=>{
   const note = await Note.findById(req.params.id);

   if(note) {
      res.json(note);
   }else {
      res.status(404).json({message: "Note not found"});
   }
   
})

module.exports.deleteTask = asyncHandler(async(req,res)=>{
  const note = await Note.findById(req.params.id);
  
  if(!note) {
   res.status(404).json({message: "Note not found"});
   return;
}

if(note.user.toString() !== req.user._id.toString()) {
    res.status(400).json({
      message: "Unauthorized"
    });
    return
}

 await note.deleteOne()
 res.status(200).json({
   message: "Successfully deleted"
 });
})
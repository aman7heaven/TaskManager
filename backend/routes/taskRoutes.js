const express = require('express');
const router = express.Router();
const taskController = require('../controller/taskController');
const {protect} = require('../middlewares/authMiddleware');

router.get('/gettasks', protect, taskController.getTasks);
router.post('/createtask', protect, taskController.createTask);
router.put('/updatetask/:id', protect,taskController.updateTask)
router.get('/gettask/:id', protect,taskController.getTask)
router.delete('/deletetask/:id', protect, taskController.deleteTask)

module.exports = router;
const express =  require('express');
const router = express.Router();
const studentcontroller=require('../controllers/studentcontroller')
router.use(express.urlencoded({ extended:false }))

router.post('/add/student',(req, res)=>{
    studentcontroller.addStudent(req,res)
})
router.post('/update/student/:id',(req, res)=>{
    studentcontroller.updateStudent(req,res)
})
router.get('/student/delete/:id',(req, res)=>{
    studentcontroller.deleteStudent(req,res)
})
router.get('/',(req, res)=>{
    res.render('home')
})
router.get('/students',(req, res)=>{
    studentcontroller.getStudents(req,res)
})
router.get('/home',(req, res)=>{
    studentcontroller.home(req,res)
})
router.get('/student/edit/page/:id',(req, res)=>{
    studentcontroller.getStudentEdit(req,res)
})

module.exports = router

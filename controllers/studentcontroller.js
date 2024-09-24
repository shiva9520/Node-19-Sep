const Student = require('../models/Student')
const addStudent = async (req, res) => {
    try {
        let student = new Student(req.body);
        await student.save()
        console.log("Added Sucessfully...");
        // res.end("<h1>Added Successfully....</h1>")
        res.render('studentadd')
    } catch (error) {
        console.log(error);
    }
}
const updateStudent = async (req, res) => {
    try {
        let id = req.params.id;
        let body = req.body
        let student = await Student.findOne({ _id: id })
        student.rollno = body.rollno;
        student.firstName = body.firstName;
        student.lastName = body.lastName;
        student.fatherName = body.fatherName;
        student.aadharCardNo = body.aadharCardNo;
        student.mobileNo = body.mobileNo;
        await student.save();
        let students= await Student.find({})
        res.render('studentdetail',{
            students:students
        })
    } catch (error) {
        console.log(error);
    }
}
const getStudents = async (req, res) => {
    try {
        let students = await Student.find({})
        res.render('studentdetail', {
            students: students
        })
    } catch (error) {
        console.log(error);
    }
}
const home = async (req, res) => {
    try {
        res.render('home')
    } catch (error) {
        console.log(error);
    }
}
const deleteStudent = async (req, res) => {
    try {
        let id = req.params.id; 
        await Student.deleteOne({ _id : id})
        let students= await Student.find({})
        res.render('studentdetail',{
            students:students
        }) 
    } catch (error) {
        console.log(error);
    }
}
const getStudentEdit = async (req, res) => {
    try {
        let id = req.params.id;
        let student = await Student.findOne({ _id: id })
        res.render('studentedit', {
            student: student
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    addStudent,
    getStudents,
    getStudentEdit,
    updateStudent,
    deleteStudent,
    home
}   
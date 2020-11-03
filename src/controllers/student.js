// no too reason am as i write all the codes for here ooo...
//i don taya..
//i no go lie you
const Student = require("../models/student");

//route to the add page route
exports.createStudentPage = (req, res, next) => {
    res.render("add", {
        pageTitle: "Add studnet",
        path: "/add",
        editing: false
    });
};

//create a new studnet
exports.addStudentAction = async (req, res, next) => {
    try {
        let { name, age, imageUrl } = req.body
        let response = await Student.create({
            age: age,
            name: name,
            imageUrl: imageUrl,
        })
        console.log('response', response);
        res.redirect('/')

    } catch (err) {
        console.log(err)
    }
};



exports.getEditStudentPage = async (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
        return res.redirect("/");
    }
    const { studentId } = req.params;
    let student = await Student.findByPk(studentId);
    if (!student) {
        return res.redirect("/");
    }
    console.log(studentId)
    res.render("edit", {
        pageTitle: "Edit Studnet Data",
        path: "/edit",
        editing: editMode,
        student: student
    });
}

exports.editSudentAction = async (req, res) => {
    let { name, age, imageUrl, studentId } = req.body;
    let student = await Student.findByPk(studentId);
    student.name = name;
    student.age = age;
    student.imageUrl = imageUrl;
    await student.save();
    console.log("Updated Student Data!");
    return res.redirect("/");
};

exports.getStudents = async (req, res, next) => {
    let students = await Student.findAll()
    res.render("index", {
        students: students,
        pageTitle: "Admin Sudents",
        path: "/"
    });
};


exports.deleteStudentAction = async (req, res, next) => {
    const studentId = req.body.studentId;
    let student = await Student.findByPk(studentId);
    student.destroy();
    res.redirect("/");
};
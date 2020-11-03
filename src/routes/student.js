const express = require("express");
const studentController = require("../controllers/student");
const router = express.Router();

router.get("/add", studentController.createStudentPage);
router.get("/", studentController.getStudents);
router.post("/add", studentController.addStudentAction);
router.get("/edit/:studentId", studentController.getEditStudentPage);
router.post("/edit", studentController.editSudentAction);
router.post("/delete", studentController.deleteStudentAction);

module.exports = router; 
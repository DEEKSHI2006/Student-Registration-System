const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

// Get all students
router.get("/", async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add student
router.post("/", async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();

        res.status(201).json({
            success: true,
            message: "Student Details Saved Successfully!"
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

// Delete student
router.delete("/:id", async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id);

        res.json({
            success: true,
            message: "Student Deleted Successfully"
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

module.exports = router;
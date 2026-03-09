import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/student");

const studentSchema = new mongoose.Schema({
  name: String,
  rollNo: Number,
  id: Number,
  dept: String,
});

const student = mongoose.model("student", studentSchema);

const stud1 = new student({});
stud1.name = "Ravi";
stud1.rollNo = 21;
stud1.id = 101;
stud1.dept = "Aeronautrical";

await stud1.save();

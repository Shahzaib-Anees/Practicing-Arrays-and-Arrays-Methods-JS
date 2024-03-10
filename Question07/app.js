// Question 08 

let qualification_in_Pakistan = ["SSC", "HSC", "BSC", "BS", "BCOM", "MS", "M.Phil.", "PHD"];
document.write(`<h4>Qualifications  in  Pakistan</h4>`);
for (a = 0; a < qualification_in_Pakistan.length; a++) {
    document.write(qualification_in_Pakistan[a]);
    document.write("<br>");
};  

let student_names = ["Michael" , "John" , "Tony"];
let student_marks = [320 , 230 ,480];
let total_marks=500;
document.write(`<div id="student-card">
<h4>Students Numbers</h4>
<span>Marks of ${student_names[0]} is ${student_marks[0]}. Percentage ${(student_marks[0] * 100)/total_marks}%</span>
<span>Marks of ${student_names[1]} is ${student_marks[1]}. Percentage ${(student_marks[1] * 100)/total_marks}%</span>
<span>Marks of ${student_names[2]} is ${student_marks[2]}. Percentage ${(student_marks[2] * 100)/total_marks}%</span>`);

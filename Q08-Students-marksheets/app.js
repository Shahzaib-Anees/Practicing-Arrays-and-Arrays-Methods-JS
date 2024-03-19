// Question 08 
let student_names = ["Michael" , "John" , "Tony"];
let student_marks = [320 , 230 ,480];
let total_marks=500;
document.write(`<div class="card">
<h4>Students Numbers</h4>
<span>Marks of ${student_names[0]} is ${student_marks[0]}. Percentage ${(student_marks[0] * 100)/total_marks}%</span>
<span>Marks of ${student_names[1]} is ${student_marks[1]}. Percentage ${(student_marks[1] * 100)/total_marks}%</span>
<span>Marks of ${student_names[2]} is ${student_marks[2]}. Percentage ${(student_marks[2] * 100)/total_marks}%</span>
</div>`);

document.write("<br>");

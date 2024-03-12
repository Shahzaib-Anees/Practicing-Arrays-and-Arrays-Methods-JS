// Question 07 

let qualification_in_Pakistan = ["SSC", "HSC", "BSC", "BS", "BCOM", "MS", "M.Phil.", "PHD"];
document.write(`<h4>Qualifications  in  Pakistan</h4>`);
for (a = 0; a < qualification_in_Pakistan.length; a++) {
    document.write(qualification_in_Pakistan[a]);
    document.write("<br>");
};  

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

// Question no 10 
let studentScores=[320,120,480,230];
let orderScores = studentScores.sort();
document.write(`<div class="card">
<h4>Practicing Array Sort Method</h4>
<p>Scores of Students : ${studentScores}</p>
<p>Ordered Scores of Students : ${orderScores}</p>
</div>`);


// Question no 11 
let citiesList =["Karachi " , "Lahore " , "Islamabad " , "Quetta " , "Peshawar " ]
let selectedCities = citiesList.slice(2,4);
document.write(`<div class="card">
<h4>Practicing Array Slice Method</h4>
<p>Cities List : ${citiesList}</p>
<p>Selected Cities List : ${selectedCities}</p>
</div>`)

// Question no 12 
let arr =["This " , "is " , "my " , "Cat " ]
let arrJoint = arr.join(" ");
document.write(`<div class="card">
<h4>Practicing Array Join Method</h4>
<p>Array : ${arr}</p>
<p>String : ${arrJoint}</p>
</div>`)


// Question no 13 
let copyComputerAccessories = ["Keyboard" , "Mouse" , "Printer" , "Monitor"]
let computerAccessories = [];
computerAccessories.unshift("Monitor");
computerAccessories.unshift("Printer");
computerAccessories.unshift("Mouse");
computerAccessories.unshift("Keyboard");
// First Eleminated Element 
let firstEliminatedElement = computerAccessories.shift();
let secondEliminatedElement = computerAccessories.shift();
let thirdEliminatedElement = computerAccessories.shift();
let fourthEliminatedElement = computerAccessories.shift();
document.write(`<div class="card">
<h4>Practicing Shift and Unshift Method(Fifo) of JavaScript</h4>
<p> Devices : ${copyComputerAccessories}</p>
<p> Out : ${firstEliminatedElement}</p>
<p> Out : ${secondEliminatedElement}</p>
<p> Out : ${thirdEliminatedElement}</p>
<p> Out : ${fourthEliminatedElement}</p>
</div>`)



// Question no 14 
let copyComputerAccessories2 =["Keyboard" , "Mouse" , "Printer" , "Monitor"];
let computerAccessories2 = [];
computerAccessories2.push("Keyboard");
computerAccessories2.push("Mouse");
computerAccessories2.push("Printer");
computerAccessories2.push("Monitor");
let firstEliminatedElement2 = computerAccessories2.pop();
let secondEliminatedElement2 = computerAccessories2.pop();
let thirdEliminatedElement2 = computerAccessories2.pop();
let fourthEliminatedElement2 = computerAccessories2.pop();
document.write(`<div class="card">
<h4>Practicing Push and Pop Method(Lifo) of JavaScript</h4>
<p> Devices : ${copyComputerAccessories2}</p>
<p> Out : ${firstEliminatedElement2}</p>
<p> Out : ${secondEliminatedElement2}</p>
<p> Out : ${thirdEliminatedElement2}</p>
<p> Out : ${fourthEliminatedElement2}</p>
</div>`)
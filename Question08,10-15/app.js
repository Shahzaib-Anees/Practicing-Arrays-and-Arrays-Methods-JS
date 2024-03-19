
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
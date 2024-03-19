
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



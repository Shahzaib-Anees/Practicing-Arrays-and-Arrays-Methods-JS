

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
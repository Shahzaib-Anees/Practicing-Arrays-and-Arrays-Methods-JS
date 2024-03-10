document.write(`<h4>Colors Names Array</h4>`);
// Question 09 
let color_array = ["Black" , "Blue" , "Red" , "Green" , "Purple"];
document.write(color_array);
document.write(`<div id="color-button" onclick="add_begining()">Add Color to the Begining of the Array</div>`)

function add_begining(){
    let user_input_color = prompt("Enter the Color Name");
    if(user_input_color !== ""){
        color_array.unshift(user_input_color);
        document.write(color_array);
    }
}

document.write(`<div id="color-button" onclick="add_end()">Add Color to the End </div>`)
function add_end(){
    let user_input_color =prompt("Enter color to add at the end of an Array")
    color_array.push(user_input_color);
    document.write(color_array);
}
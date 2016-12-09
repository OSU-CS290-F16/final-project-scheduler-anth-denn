/*
 * Add your JS in this file.
 */

//alert("I'm trying so haaaaaaaaaaaaaaaaaard");

var modal = document.getElementById('modal-backdrop');
var modal2 = document.getElementById('add-note-modal')
var what_box = document.getElementById('todo-input-what');
var remove = document.getElementsByClassName("dismiss-button");
var mama = document.getElementsByTagName("main");

var add_button =document.getElementById("add-note-button");
var cancel_button = document.getElementsByClassName("modal-cancel-button");
var close_button = document.getElementsByClassName("modal-close-button");


var aw_button3 = document.getElementsByClassName("accept3");





//add_button.onclick=openadd();	
add_button.addEventListener("click",openadd);
function openadd() {
	modal.className="add-note-modal";
	modal2.className="add-note-modal";
}
	
function closeadd() {
	modal.className="hidden";
	modal2.className="hidden";
	
	document.getElementById("todo-input-details").value = "";

}


aw_button3[0].addEventListener("click",validation3);



//aw_button[0].addEventListener("click",create_todo);
close_button[0].addEventListener("click",closeadd);
cancel_button[0].addEventListener("click",closeadd);


function create_todo3() {
    var input_details = document.getElementById("todo-input-details").value;
    var time = document.getElementById("time").selectedIndex;
    var date = document.getElementById("days").selectedIndex;
    var num1 = parseInt(time);
    num1 = num1*7;
    var num2 = parseInt(date);
    var temp = num1+num2+351;
    //alert(temp);
    var temp2 = temp.toString();
    var temp3 = document.getElementById(temp2);
    temp3.innerHTML = input_details;
    
    closeadd();
}

    

	

for(i=0;i<remove.length;i++)
{
	remove[i].addEventListener("click" , delete_todo, false);
}
function delete_todo(event){

	event.currentTarget.parentNode.parentNode.removeChild(event.currentTarget.parentNode);
}

function validation3(){

	var what_box = document.getElementById('todo-input-details');

	if(what_box.value == "") {
		alert("The To do box cannot be empty!!!")
		return false;
	} else {
		return create_todo3();
	}

}
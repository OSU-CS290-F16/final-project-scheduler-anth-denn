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
var aw_button = document.getElementsByClassName("modal-accept-button");
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

aw_button[0].addEventListener("click",validation);
//aw_button[0].addEventListener("click",create_todo);
close_button[0].addEventListener("click",closeadd);
cancel_button[0].addEventListener("click",closeadd);

function create_todo() {
    var input_details = document.getElementById("todo-input-details").value;
    var time = document.getElementById("time").selectedIndex;
    var date = document.getElementById("days").selectedIndex;
    var num1 = parseInt(time);
    num1 = num1*7;
    var num2 = parseInt(date);
    var temp = num1+num2+1;
    //alert(temp);
    var temp2 = temp.toString();
    var temp3 = document.getElementById(temp2);
    temp3.innerHTML = input_details;
    
    closeadd();
}

    
//function remove create_todo() {
//    var elem = document.getElementById('to do');
//    elem.parentNode.removeChild(elem);
//}
    /*
	var temp = document.createElement('section');
	temp.classList.add('todo');
	var header = document.createElement("h2");
	header_temp = document.getElementById("todo-input-what").value;
	header_temp2 = document.createTextNode(header_temp);
	header.appendChild(header_temp2);
	temp.appendChild(header);
	x_but = document.createElement('div');
	x_but.classList.add('dismiss-button');
	x_word = document.createTextNode('\xd7');
	x_but.appendChild(x_word);
	temp.appendChild(x_but);

	temp_div = document.createElement('div');
	temp_div.classList.add("todo-body");

	para1_temp = document.getElementById("todo-input-where").value;
	if(para1_temp != ""){
		para1 = document.createElement('p');
		para1.classList.add("indent-wrapped");
		span_temp = document.createElement('span');
		span_temp.classList.add("where");
		span_temp2 = document.createTextNode("   where: ");
		span_temp.appendChild(span_temp2);
		para1.appendChild(span_temp);
		para1_temp2 = document.createTextNode(para1_temp);
		para1.appendChild(para1_temp2);
		temp.appendChild(para1);
	}
	para1_temp = document.getElementById("todo-input-when").value;
	if(para1_temp != ""){
		para1 = document.createElement('p');
		para1.classList.add("indent-wrapped");
		span_temp = document.createElement('span');
		span_temp.classList.add("when");
		span_temp2 = document.createTextNode("   when: ");
		span_temp.appendChild(span_temp2);
		para1.appendChild(span_temp);
		para1_temp2 = document.createTextNode(para1_temp);
		para1.appendChild(para1_temp2);
		temp.appendChild(para1);
	}
	para1_temp = document.getElementById("todo-input-who").value;
	if(para1_temp != ""){
		para1 = document.createElement('p');
		para1.classList.add("indent-wrapped");
		span_temp = document.createElement('span');
		span_temp.classList.add("who");
		span_temp2 = document.createTextNode("   who: ");
		span_temp.appendChild(span_temp2);
		para1.appendChild(span_temp);
		para1_temp2 = document.createTextNode(para1_temp);
		para1.appendChild(para1_temp2);
		temp.appendChild(para1);
	}
	para1_temp = document.getElementById("todo-input-details").value;
	if(para1_temp != ""){
		para1 = document.createElement('p');
		para1_temp2 = document.createTextNode(para1_temp);
		para1.appendChild(para1_temp2);
		temp.appendChild(para1);
	}
	mama[0].appendChild(temp);

	for(i=0;i<remove.length;i++)
{
	remove[i].addEventListener("click" , delete_todo, false);
}
*/
	

for(i=0;i<remove.length;i++)
{
	remove[i].addEventListener("click" , delete_todo, false);
}
function delete_todo(event){

	event.currentTarget.parentNode.parentNode.removeChild(event.currentTarget.parentNode);
}

function validation(){

	var what_box = document.getElementById('todo-input-details');

	if(what_box.value == "") {
		alert("The what box cannot be empty!!!")
		return false;
	} else {
		return create_todo();
	}

}


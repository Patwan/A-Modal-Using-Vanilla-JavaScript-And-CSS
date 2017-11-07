//Grab modal element
var modal = document.getElementById('simpleModal');

//Get open modal button
var modalBtn = document.getElementById('modalBtn');

//Get close Button using its class name
var closeBtn = document.getElementsByClassName('closeBtn')[0];

//Event listener  for click
modalBtn.addEventListener('click', openModal);

//Event listener  for close click
closeBtn.addEventListener('click', closeModal);

//Event listener  for click outside the modal
window.addEventListener('click', clickOutside);


//Function to open the modal
function openModal(){
	// Change display from none to block
	modal.style.display = 'block';
}

//Function to close the modal
function closeModal(){
	modal.style.display = 'none';
}

//Function to close the modal if the user clicks outside
function clickOutside(e){
	if(e.target == modal){
		modal.style.display = 'none';
	}
}
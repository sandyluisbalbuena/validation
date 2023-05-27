var urlParams = new URLSearchParams(window.location.search);

// Retrieve specific values from the URL
var values = urlParams.get('values');
// var lname = urlParams.get('lname');


let body = document.getElementById('body');


var arr = values.split(",");



arr.forEach(value => {
	body.innerHTML += value +"\n";
});




// body.innerHTML=fname+" "+lname;
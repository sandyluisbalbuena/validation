let submitbtn = document.getElementById("submit");
let form = document.getElementById('myForm');
let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let email = document.getElementById('email');
let password = document.getElementById('password');
let rpassword = document.getElementById('rpassword');
let message = document.getElementById('message');
let checkboxAgree = document.getElementById('checkboxAgree');


form.addEventListener('submit', function(event) {
	event.preventDefault(); // Prevent form submission

	// Perform validation
	var isValid = true;
	// var regex = /\d/;

	
	//firstName
	if (firstName.value.trim() === '') {
		firstName.setAttribute('style', 'border:3px solid rgb(255, 155, 155);');
		isValid = false;
	} else {
		if(firstName.value.length < 8){
			firstName.setAttribute('style', 'border:solid 3px rgb(255, 155, 155);');
			isValid = false;
		} else {
			if(hasNumberUsingIsNaN(firstName.value)){
				firstName.setAttribute('style', 'border:solid 3px rgb(255, 155, 155);');
				isValid = false;
			} else {
				firstName.setAttribute('style', 'none');
			}
		}
	}

	
	


	//lastName
	if (lastName.value.trim() === '') {
		lastName.setAttribute('style', 'border:solid 3px rgb(255, 155, 155);');
		isValid = false;
	} else {
		if (lastName.value.length < 8) {
			lastName.setAttribute('style', 'border:solid 3px rgb(255, 155, 155);');
			isValid = false;
		} else {
			lastName.setAttribute('style', 'none');
		}
	}

	

	//email
	if (email.value.trim() === '') {
		email.setAttribute('style', 'border:solid 3px rgb(255, 155, 155);');
		isValid = false;
	} else {
		if (!isEmail(email.value)) {
			email.setAttribute('style', 'border:solid 3px rgb(255, 155, 155);');
			isValid = false;
		} else {
			
			email.setAttribute('style', 'none');
		}
	}

	

	//password
	if (password.value.trim() === '') {
		password.setAttribute('style', 'border:solid 3px rgb(255, 155, 155);');
		isValid = false;
	} else {
		if (password.value.length < 6) {
			password.setAttribute('style', 'border:solid 3px rgb(255, 155, 155);');
			isValid = false;
		} else {
			password.setAttribute('style', 'none');
		}
	}

	//rpassword
	if (rpassword.value.trim() === '') {
		rpassword.setAttribute('style', 'border:solid 3px rgb(255, 155, 155);');
		isValid = false;
	} else {
		if (rpassword.value !== password.value) {
			rpassword.setAttribute('style', 'border:solid 3px rgb(255, 155, 155);');
			isValid = false;
		} else {
			rpassword.setAttribute('style', 'none');
		}
	}

	
	//checkbox
	if (!checkboxAgree.checked) {
		checkboxAgree.setAttribute('style', 'border:solid 3px rgb(255, 155, 155);');
		isValid = false;
	} else {
	
		checkboxAgree.setAttribute('style', 'none');
	}


	// message

	if (message.value.trim() === '') {
		message.setAttribute('style', 'border:solid 3px rgb(255, 155, 155);');
		isValid = false;
	} else {
		message.setAttribute('style', 'none');
	}

	if (message.value.trim() === '') {
		message.setAttribute('style', 'border:solid 3px rgb(255, 155, 155);');
		isValid = false;
	} else {
		message.setAttribute('style', 'none');
	}




	// If all fields are valid, submit the form
	if (isValid) {
		Swal.fire(
			'Good job!',
			'Registration Complete',
			'success'
		)
		form.reset(); 
	}
	else{
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Something went wrong!',
			footer: '<a href="">Why do I have this issue?</a>'
		})
	}
});


function isEmail(email) {
	var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return regex.test(email);
}

function hasNumberUsingIsNaN(str) {
	return !isNaN(parseFloat(str));
}
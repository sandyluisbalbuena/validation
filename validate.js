let submitbtn = document.getElementById("submit");
let form = document.getElementById('myForm');
let firstName = document.getElementById('firstName');
let middleName = document.getElementById('middleName');
let lastName = document.getElementById('lastName');
let email = document.getElementById('email');
let password = document.getElementById('password');
let rpassword = document.getElementById('rpassword');
let message = document.getElementById('message');
let checkboxAgree = document.getElementById('checkboxAgree');
let zipcode = document.getElementById('zipcode');
let city = document.getElementById('city');
let province = document.getElementById('province');
let barangay = document.getElementById('barangay');
let streetUnit = document.getElementById('streetUnit');


form.addEventListener('submit', function(event) {
	event.preventDefault(); // Prevent form submission

	// Perform validation
	var isValid = true;
	// var regex = /\d/;
	let firstnameError = "";
	let middlenameError = "";
	let lastnameError = "";
	let emailError = "";
	let passwordError = "";
	let repasswordError = "";
	let cityError = "";
	let provinceError = "";
	let streetunitError = "";
	let barangayError = "";
	let zipcodeError = "";
	let messageError = "";
	let checkboxError = "";

	
	//firstName
	if (firstName.value.trim() === '') {
		firstName.setAttribute('style', 'border:3px solid rgb(255, 155, 155);');
		isValid = false;
		firstnameError = 'Firstname Required';
	} else {
		if(firstName.value.length < 1){
			firstName.setAttribute('style', 'border:solid 3px rgb(255, 155, 155);');
			isValid = false;
			firstnameError = 'Firstname Must be atleast 2 character';
		} else {
			if(containsNumbers(firstName.value)){
				firstName.setAttribute('style', 'border:solid 3px rgb(255, 155, 155);');
				isValid = false;
				firstnameError = 'Firstname Must not have a number';
			} else {
				if(firstName.value.length > 20){
					firstName.setAttribute('style', 'border:solid 3px rgb(255, 155, 155);');
					isValid = false;
					firstnameError = 'Firstname Must not longer than 20 characters';
				} else {
					firstName.setAttribute('style', 'none');
				}
			}
		}
	}


	//middleName
	if(containsNumbers(middleName.value)){
		middleName.setAttribute('style', 'border:solid 3px rgb(255, 155, 155);');
		isValid = false;
		middlenameError = 'Middlename Must not have a number';
	} else {
		if(middleName.value.length > 20){
			middleName.setAttribute('style', 'border:solid 3px rgb(255, 155, 155);');
			isValid = false;
			middlenameError = 'Middlename Must not longer than 20 characters';
		} else {
			middleName.setAttribute('style', 'none');
		}
	}


	//lastName
	if (lastName.value.trim() === '') {
		lastName.setAttribute('style', 'border:solid 3px rgb(255, 155, 155);');
		isValid = false;
		lastnameError = 'Lastname Required';
	} else {
		if (lastName.value.length < 1) {
			lastName.setAttribute('style', 'border:solid 3px rgb(255, 155, 155);');
			isValid = false;
			lastnameError = 'Lastname Must be atleast 2 character';
		} else {
			if(containsNumbers(lastName.value)){
				lastName.setAttribute('style', 'border:solid 3px rgb(255, 155, 155);');
				isValid = false;
				lastnameError = 'Lastname Must not have a number';
			} else {
				if(lastName.value.length > 20){
					lastName.setAttribute('style', 'border:solid 3px rgb(255, 155, 155);');
					isValid = false;
					middlenameError = 'Lastname Must not longer than 20 characters';
				} else {
					lastName.setAttribute('style', 'none');
				}
			}
		}
	}
	
	//email
	if (email.value.trim() === '') {
		email.setAttribute('style', 'border:solid 3px rgb(255, 155, 155);');
		isValid = false;
		emailError = 'Email Required';
	} else {
		if (!isEmail(email.value)) {
			email.setAttribute('style', 'border:solid 3px rgb(255, 155, 155);');
			isValid = false;
			emailError = 'Email Invalid format';
		} else {
			email.setAttribute('style', 'none');
		}
	}
	
	//password
	if (password.value.trim() === '') {
		password.setAttribute('style', 'border:solid 3px rgb(255, 155, 155);');
		isValid = false;
		passwordError = 'Password Required';

	} else {
		if (password.value.length < 7) {
			password.setAttribute('style', 'border:solid 3px rgb(255, 155, 155);');
			isValid = false;
			passwordError = 'Password Must be atleast 8 characters';
		} else {
			password.setAttribute('style', 'none');
		}
	}

	//rpassword
	// if (rpassword.value.trim() === '') {
	// 	rpassword.setAttribute('style', 'border:solid 3px rgb(255, 155, 155);');
	// 	isValid = false;
	// 	repasswordError = 'Repassword Required';
	// } else {
		if (rpassword.value !== password.value) {
			rpassword.setAttribute('style', 'border:solid 3px rgb(255, 155, 155);');
			isValid = false;
			repasswordError = 'Repassword be the same with password field';
		} else {
			rpassword.setAttribute('style', 'none');
		}
	// }
	
	//checkbox
	if (!checkboxAgree.checked) {
		checkboxAgree.setAttribute('style', 'border:solid 3px rgb(255, 155, 155);');
		isValid = false;
		checkboxError = 'Checkbox Required';
	} else {
		checkboxAgree.setAttribute('style', 'none');
	}

	//street/unit
	if (streetUnit.value.trim() === '') {
		streetUnit.setAttribute('style', 'border:solid 3px rgb(255, 155, 155);');
		isValid = false;
		streetunitError = 'Street Required';
	} else {
		streetUnit.setAttribute('style', 'none');
	}

	//city
	if (city.value.trim() === '') {
		city.setAttribute('style', 'border:solid 3px rgb(255, 155, 155);');
		isValid = false;
		cityError = 'City Required';
	} else {
		city.setAttribute('style', 'none');
	}

	//province
	if (province.value.trim() === '') {
		province.setAttribute('style', 'border:solid 3px rgb(255, 155, 155);');
		isValid = false;
		provinceError = 'Province Required';
	} else {
		province.setAttribute('style', 'none');
	}

	//barangay
	if (barangay.value.trim() === '') {
		barangay.setAttribute('style', 'border:solid 3px rgb(255, 155, 155);');
		isValid = false;
		barangayError = 'Barangay Required';
	} else {
		barangay.setAttribute('style', 'none');
	}


	//zcode
	if (zipcode.value.trim() === '') {
		zipcode.setAttribute('style', 'border:solid 3px rgb(255, 155, 155);');
		isValid = false;
		zipcodeError = 'Zipcode Required';
	} else {
		if (!isNumericRegex(zipcode.value)) {
			zipcode.setAttribute('style', 'border:solid 3px rgb(255, 155, 155);');
			isValid = false;
			zipcodeError = 'Zipcode Must be numeric';
		} else {
			zipcode.setAttribute('style', 'none');
		}
	}





	// message
	if (message.value.trim() === '') {
		message.setAttribute('style', 'border:solid 3px rgb(255, 155, 155);');
		isValid = false;
		messageError = 'Message Required';
	} else {
		message.setAttribute('style', 'none');
	}



	let errorMessages = [firstnameError, lastnameError, emailError, passwordError, repasswordError, streetunitError, barangayError, cityError, passwordError, zipcodeError, messageError, checkboxError];
	let tobeannounce ="";


	var filteredArray = errorMessages.filter(function(element) {
		return element !== undefined;
	});


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
		console.log(firstnameError, lastnameError, emailError, passwordError, repasswordError, streetunitError, barangayError, cityError, passwordError, zipcodeError, messageError, checkboxError);


		// filteredArray.forEach(errorMessage => {
		// });

		for(let i=0; i < filteredArray.length; i++)
		{
			if(filteredArray[i] !== undefined){
				tobeannounce += "<p>"+filteredArray[i] +"</p>";
			}
		}


		Swal.fire({
			icon: 'error',
			scrollbarPadding: true,
			title: tobeannounce,
			// title: '<p>Firstname: '+firstnameError+'</p><p>Firstname: '+middlenameError+'</p><p>Firstname: '+lastnameError+'</p><p>Firstname: '+emailError+'</p><p>Firstname: '+passwordError+'</p><p>Firstname: '+repasswordError+'</p><p>Firstname: '+streetunitError+'</p><p>Firstname: '+barangayError+'</p><p>Firstname: '+cityError+'</p><p>Firstname: '+provinceError+'</p><p>Firstname: '+zipcodeError+'</p><p>Firstname: '+messageError+'</p><p>Firstname: '+checkboxError+'</p>',
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

function hasNumberUsingNumber(str) {
	return !isNaN(Number(str));
  }

  function containsNumbers(str) {
	return /\d/.test(str);
  }

  function isNumericUsingRegex(str) {
	var regex = /^\d+$/;
	return regex.test(str);
  }

function isNumericRegex(str) {
	var regex = /^[+-]?\d+(\.\d+)?$/;
	return regex.test(str);
}
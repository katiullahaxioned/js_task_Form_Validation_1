// form element references
var form = document.querySelector("form"),
	fname = form.fname,
	lname = form.lname,
	mobile = form.mobile,
	position = form.position,
	company = form.company,
	companytype = form.companytype,
	country = form.country,
	workemail = form.workemail,
	password = form.password,
	cpassword = form.cPassword,
	gender = form.gender,
	yesNo = form.yesNo;
// form validation regex
var allTextPattern = /^[a-zA-Z]+$/,
	mobilePattern = /^(\+91|0)?([7-9]\d{9})$/,
	emailPattern = /^([a-z][a-z0-9\.\-]+[a-z0-9])\@([a-z]+)\.([a-z]{2,5})$/,
	emptyPattern = /\w/;
// password validation regex all 4
var lowerAlphaPattern = /(=?.*[a-z])/,
	upperAlphaPattern = /(=?.*[A-Z])/,
	numericPattern = /(=?.*[0-9])/,
	specialCharPattern = /(=?.*[\!\@\#\$\%\^\&\*\(\)\+\_\.\,\/\=\~\`\<\>\?\]\[\{\}\;\:\'\"\|\\])/;

// generalInputCheck()
function generalInputCheck(regexPattern, inputField, inputValue) {
	var check = false;
	if (regexPattern.test(inputValue)) {
		inputField.parentElement.lastElementChild.classList.remove('active');
		check = true;
	} else {
		inputField.parentElement.lastElementChild.classList.add('active');
		inputField.value = '';
		check = false;
	}
	return check;
}

// passwordCheck()
function passwordCheck(lowerPattern, upperPattern, numericPattern, specialCharPattern, inputField, inputValue) {
	var check = false;
	if (lowerPattern.test(inputValue) && upperPattern.test(inputValue) && numericPattern.test(inputValue) && specialCharPattern.test(inputValue) && (inputValue.length >= 5) && (inputValue.length <= 10)) {
		inputField.parentElement.lastElementChild.classList.remove('active');
		check = true;
	} else {
		inputField.parentElement.lastElementChild.classList.add('active');
		inputField.value = '';
		check = false;
	}
	return check;
}

// cPasswordCheck()
function cPasswordCheck(inputField, passwordValue, cpasswordValue) {
	var check = false;
	if (passwordValue === cpasswordValue) {
		inputField.parentElement.lastElementChild.classList.remove('active');
		check = true;
	} else {
		inputField.parentElement.lastElementChild.classList.add('active');
		inputField.value = '';
		check = false;
	}
	return check;
}

// checkBoxCheck()
function checkBoxCheck(inputRadio) {
	var check = false;
	inputRadio.forEach(function (radio) {
		if (radio.checked) {
			check = true;
		}

		if (check) {
			radio.parentElement.parentElement.nextElementSibling.classList.remove('active');
		} else {
			radio.parentElement.parentElement.nextElementSibling.classList.add('active');
		}
	});
	return check;
}

// form submit
form.addEventListener('submit', function (e) {
	e.preventDefault();
	var fnameValue = fname.value.trim(),
		lnameValue = lname.value.trim(),
		mobileValue = mobile.value.trim(),
		positionValue = position.value.trim(),
		companyValue = company.value.trim(),
		companytypeValue = companytype.value.trim(),
		countryValue = country.value.trim(),
		workemailValue = workemail.value.trim(),
		passwordValue = password.value.trim(),
		cpasswordValue = cpassword.value.trim();

	var fnameCheck = generalInputCheck(allTextPattern, fname, fnameValue),
		lnameCheck = generalInputCheck(allTextPattern, lname, lnameValue),
		mobileCheck = generalInputCheck(mobilePattern, mobile, mobileValue),
		positionCheck = generalInputCheck(allTextPattern, position, positionValue),
		companyCheck = generalInputCheck(allTextPattern, company, companyValue),
		companytypeCheck = generalInputCheck(emptyPattern, companytype, companytypeValue),
		countryCheck = generalInputCheck(emptyPattern, country, countryValue),
		workemailCheck = generalInputCheck(emailPattern, workemail, workemailValue),
		PasswordCheck = passwordCheck(lowerAlphaPattern, upperAlphaPattern, numericPattern, specialCharPattern, password, passwordValue),
		cpasswordCheck = cPasswordCheck(cpassword, passwordValue, cpasswordValue),
		genderCheck = checkBoxCheck(gender),
		yesNoCheck = checkBoxCheck(yesNo);

	if(fnameCheck && lnameCheck && mobileCheck && positionCheck && companyCheck && companytypeCheck && countryCheck && workemailCheck && PasswordCheck && cpasswordCheck && genderCheck && yesNoCheck) {
		alert('form submitted');
		fname.value = '';
		lname.value = '';
		mobile.value = '';
		position.value = '';
		company.value = '';
		companytype.value = '';
		country.value = '';
		workemail.value = '';
		password.value = '';
		cpassword.value = '';
		for(var i=0; i<gender.length; i++) {
			if (gender[i].checked)
			gender[i].checked = false;
		}
		for(var j=0; j<yesNo.length; j++) {
			if (yesNo[j].checked)
			yesNo[j].checked = false;
		}
	} else {
		alert('please fill all inputs');
	}
});
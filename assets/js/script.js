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
	yesNo = form.yesNo,
	alertMessage = document.querySelectorAll('.alert');
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
	if (regexPattern.test(inputValue)) {
		inputField.parentElement.lastElementChild.classList.remove('active');
	} else {
		inputField.parentElement.lastElementChild.classList.add('active');
		inputField.value = '';
	}
}

// passwordCheck()
function passwordCheck(lowerPattern, upperPattern, numericPattern, specialCharPattern, inputField, inputValue) {
	if (lowerPattern.test(inputValue) && upperPattern.test(inputValue) && numericPattern.test(inputValue) && specialCharPattern.test(inputValue) && (inputValue.length >= 5) && (inputValue.length <= 10)) {
		inputField.parentElement.lastElementChild.classList.remove('active');
	} else {
		inputField.parentElement.lastElementChild.classList.add('active');
		inputField.value = '';
	}
}

// cPasswordCheck()
function cPasswordCheck(inputField, passwordValue, cpasswordValue) {
	if (passwordValue === cpasswordValue) {
		inputField.parentElement.lastElementChild.classList.remove('active');
	} else {
		inputField.parentElement.lastElementChild.classList.add('active');
		inputField.value = '';
	}
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

	generalInputCheck(allTextPattern, fname, fnameValue);
	generalInputCheck(allTextPattern, lname, lnameValue);
	generalInputCheck(mobilePattern, mobile, mobileValue);
	generalInputCheck(allTextPattern, position, positionValue);
	generalInputCheck(allTextPattern, company, companyValue);
	generalInputCheck(emptyPattern, companytype, companytypeValue);
	generalInputCheck(emptyPattern, country, countryValue);
	generalInputCheck(emailPattern, workemail, workemailValue);
	passwordCheck(lowerAlphaPattern, upperAlphaPattern, numericPattern, specialCharPattern, password, passwordValue);
	cPasswordCheck(cpassword, passwordValue, cpasswordValue);
	checkBoxCheck(gender);
	checkBoxCheck(yesNo);
})
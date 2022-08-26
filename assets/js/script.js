// form element references
var form = document.querySelector("form");
var fname = form.fname;
var lname = form.lname;
var mobile = form.mobile;
var position = form.position;
var company = form.company;
var companytype = form.companytype;
var country = form.country;
var workemail = form.workemail;
var password = form.password;
var cpassword = form.cPassword;
var gender = form.gender;
var Confirm = form.confirm;
var genderAlert = document.querySelector(".gender-alert");
var yesNoAlert = document.querySelector(".yesNo-alert");

// form validation regex
var allTextPattern = /^[a-zA-Z]+$/;
var mobilePattern = /^(\+91|0)?([7-9]\d{9})$/;
var emailPattern = /^([a-z][a-z0-9\.\-]+[a-z0-9])\@([a-z]+)\.([a-z]{2,5})$/;

// password validation regex all 4
var lowerAlphaPattern = /(=?.*[a-z])/;
var upperAlphaPattern = /(=?.*[A-Z])/;
var numericPattern = /(=?.*[0-9])/;
var specialCharPattern = /(=?.*[\!\@\#\$\%\^\&\*\(\)\+\_\.\,\/\=\~\`\<\>\?\]\[\{\}\;\:\'\"\|\\])/;

// on form submit
form.onsubmit = function () {
  var fnameValue = fname.value;
  var lnameValue = lname.value;
  var mobileValue = mobile.value;
  var positionValue = position.value;
  var companyValue = company.value;
  var companytypeValue = companytype.value;
  var countryValue = country.value;
  var workemailValue = workemail.value;
  var passwordValue = password.value;
  var cpasswordValue = cpassword.value;

  // first name input
  if (allTextPattern.test(fnameValue)) {
		fname.nextElementSibling.classList.remove('active');
  } else {
		fname.nextElementSibling.classList.add('active');
  }

  // last name input
  if (allTextPattern.test(lnameValue)) {
		lname.nextElementSibling.classList.remove('active');
  } else {
		lname.nextElementSibling.classList.add('active');
  }

  // mobile input
  if (mobilePattern.test(mobileValue)) {
		mobile.nextElementSibling.classList.remove('active');
  } else {
		mobile.nextElementSibling.classList.add('active');
  }

  // position input
  if (allTextPattern.test(positionValue)) {
		position.nextElementSibling.classList.remove('active');
  } else {
		position.nextElementSibling.classList.add('active');
  }

  // company input
  if (allTextPattern.test(companyValue)) {
		company.nextElementSibling.classList.remove('active');
  } else {
		company.nextElementSibling.classList.add('active');
  }

  // company type select
  if (companytypeValue == "") {
		companytype.nextElementSibling.classList.add('active');
  } else {
		companytype.nextElementSibling.classList.remove('active');
  }

  // country select
  if (countryValue == "") {
		country.nextElementSibling.classList.add('active');
  } else {
		country.nextElementSibling.classList.remove('active');
  }

	// work email input
	if (emailPattern.test(workemailValue)) {
		workemail.nextElementSibling.classList.remove('active');
  } else {
		workemail.nextElementSibling.classList.add('active');
  }

	// password input
	if ((passwordValue.search(lowerAlphaPattern) != -1) && (passwordValue.search(upperAlphaPattern) != -1) && (passwordValue.search(specialCharPattern) != -1) && (passwordValue.search(numericPattern) != -1) && (passwordValue.length > 5 && passwordValue.length <= 10)) {
		password.nextElementSibling.classList.remove('active');
  } else {
		password.nextElementSibling.classList.add('active');
  }

	// confirm password input
	if ((passwordValue === cpasswordValue) && (cpasswordValue != '')) {
		cpassword.nextElementSibling.classList.remove('active');
	}else {
		cpassword.nextElementSibling.classList.add('active');
	}

	// gender select
	var check = false;
	for(var i=0; i<gender.length; i++) {
		if(gender[i].checked) {
			check = true;
			break;
		}
	}
	if(check) {
		genderAlert.classList.remove('active');
	}else {
		genderAlert.classList.add('active');
	}

	// Confirm select
	var yesNo = false;
	for(var j=0; j<Confirm.length; j++) {
		if(Confirm[j].checked) {
			yesNo = true;
			break;
		}
	}
	if(yesNo) {
		yesNoAlert.classList.remove('active');
	}else {
		yesNoAlert.classList.add('active');
	}
};
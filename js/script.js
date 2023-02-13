function apply() {
	let x = document.getElementById("n").value;
	let em = document.getElementById("e").value;
	let emregx =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	let p = document.getElementById("pack").value;
	let date = document.getElementById("d").value;
	let person = document.getElementById("per").value;
	let di = document.getElementById("dis").value;

	var checkboxes = document.querySelectorAll('input[type="checkbox"]');
	var checkbc = 0;
	for (var i = 0; i < checkboxes.length; i++) {
		if (checkboxes[i].checked) {
			checkbc++;
		}
	}
	var radios = document.getElementsByName("radio");
	var formValid = false;
	var i = 0;
	while (!formValid && i < radios.length) {
		if (radios[i].checked) formValid = true;
		i++;
	}

	if (x == "") {
		alert("Enter a Name !");
		return false;
	} else if (!isNaN(x)) {
		alert("Please enter valid name!");
		return false;
	} else if (em == "") {
		alert("Enter email id !");
		return false;
	} else if (!emregx.test(em)) {
		alert("Enter valid email id !");
		return false;
	} else if (p == "") {
		alert("Select any tour packages !");
		return false;
	} else if (date == "") {
		alert("Enter the date !");
		return false;
	} else if (person == "") {
		alert("Enter the number of persons !");
		return false;
	} else if (isNaN(person)) {
		alert("Please enter a valid number for number of persons !");
		return false;
	} else if (checkbc < 1) {
		alert("Please select atleast one option !");
		return false;
	} else if (!formValid) {
		alert("Please select Terms and Conditions !");
		return false;
	}
}
// function act2() {
// 	document.getElementById("coupon").style.display = "none";
// }

// function act1() {
// 	document.getElementById("coupon").style.display = "flex";
// }

$(document).ready(() => {
	$("#yes").click(() => {
		$("#coupon").slideDown(1000);
	});
	$("#no").click(() => {
		$("#coupon").slideUp(1000);
	});
});

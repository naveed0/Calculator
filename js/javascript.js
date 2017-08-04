function calculateAge() {
	var name = document.getElementById('name').value;
	document.getElementById("user-name").innerHTML = name;
	var birthDay = document.getElementById('birth-date').year;
	var today = Date();
	var userAge = today - birthDay;
	document.getElementById('user-age').innerHTML = userAge;
}


function calculateAggregate() {
	var metricObtained = document.getElementById('m-o-n').value / 4;
	var metricTotal = document.getElementById('m-t-n').value / 4;
	var fscObtined = document.getElementById('f-o-n').value;
	var fscTotal = document.getElementById('f-t-n').value;
	var testObtained = document.getElementById('t-n').value;

	var aggregate = (+metricObtained + +fscObtined) / (+metricTotal + +fscTotal) * 70 +testObtained / 140 * 30;
	document.getElementById('user-aggregate').innerHTML = aggregate;
}

function calculateAge() {
	var name = document.getElementById('name').value;
	var date = document.getElementById('date').value;
	var month = document.getElementById('month').value - 1;
	var year = document.getElementById('year').value;
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth();
	var yyyy = today.getFullYear();
	if (date == 0 || month == 0 || year == 0) {
			document.getElementById('user-age').innerHTML= "Please Fill All The Inputs"
		}else {
			var ageDate = dd - date;
			var ageMonth = mm - month;
			var ageYear = yyyy - year;
			document.getElementById("user-name").innerHTML = "Hey!   " + name;
			document.getElementById('user-age').innerHTML ="Your Age is </br>";
			document.getElementById('user-in-days').innerHTML = ageDate + " Days";
			document.getElementById('user-in-months').innerHTML =ageMonth + " Months";
			document.getElementById('user-in-years').innerHTML =ageYear + " Years";
	}
	var hideMe = document.getElementsByClassName("result-box")[0];
  hideMe.style.display = "block";
}

function calculateAggregate(metricObtained , metricTotal , fscObtined , fscTotal , testObtained) {
	var metricObtained = document.getElementById('m-o-n').value / 4;
	var metricTotal = document.getElementById('m-t-n').value / 4;
	var fscObtined = document.getElementById('f-o-n').value;
	var fscTotal = document.getElementById('f-t-n').value;
	var testObtained = document.getElementById('t-n').value;

	if (metricObtained == 0 || metricTotal === 0 || fscObtined === 0 || fscTotal === 0 || testObtained === 0) {
		document.getElementById('user-aggregate').innerHTML ="Fill All The Inputs";
	}else {
		var aggregate = (+metricObtained + +fscObtined) / (+metricTotal + +fscTotal) * 70 +testObtained / 140 * 30;
		document.getElementById('user-aggregate').innerHTML ="Your % aggregate is : " + aggregate.toFixed(2);
		if (aggregate < 70) {
			document.getElementById('chance').innerHTML = "There are NO chances in PUCIT admission.";
		}else {
			document.getElementById('chance').innerHTML ="You should apply for admission. There are chances to get admission in PUCIT.";
		}
	}
	var hideMe = document.getElementsByClassName("result-box1")[0];
  hideMe.style.display = "block";
}

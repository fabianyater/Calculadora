
function getHistory() {
	return document.getElementById("displayResult").innerText;
}
function printHistory(num) {
	document.getElementById("displayResult").innerText = num;
}
function getOutput() {
	return document.getElementById("display").innerText;
}
function printOutput(num) {
	if (num == "") {
		document.getElementById("display").innerText = num;
	}
	else
		document.getElementById("display").innerText = num;
}




const operator = document.getElementsByClassName("operators");
for (let i = 0; i < operator.length; i++) {
	operator[i].addEventListener('click', function () {
		if (this.value == "clear") {
			printHistory("");
			printOutput("");
		}
		if (this.value == "backspace") {
			let output = getOutput().toString();
			if (output) {
				output = output.substr(0, output.length - 1);
				printOutput(output);
			}
		}
		else {
			let output = getOutput();
			let history = getHistory();
			if (output == "" && history != "") {
				if (isNaN(history[history.length - 1])) {
					history = history.substr(0, history.length - 1);
				}
			}
			if (output != "" || history != "") {
				history = history + output;
				if (this.value == "=") {
					let result = eval(history);
					result = parseFloat(result).toPrecision(13);
					printOutput(result);
					printHistory("");
				}
				else {
					history = history + this.value;
					printHistory(history);
					printOutput("");
				}
			}
		}
	})
}






const numbers = document.getElementsByClassName("numbers");
for (let i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener('click', function () {
		let output = getOutput();
		if (output != NaN) {
			if (this.value == ".") {
				output = output.toString();
				if (!output.includes(".")) {
					output = output + ".";
					printOutput(output);
				}

			}
			else {
				output = output + this.value;
				printOutput(output);
			}
		}
	})
}
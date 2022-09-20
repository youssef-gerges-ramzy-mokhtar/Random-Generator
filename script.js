"use strict";

const output = document.querySelector("#output2");
const submitBtn = document.querySelector("#submit_btn");
const textArea = document.querySelector("textarea");

function randomPicker() {
	const choices = [];
	const userChoices = textArea.value;

	let currentChoice = "";
	for (let i = 0; i < userChoices.length; i++) {
		if (userChoices[i] != '\n') currentChoice += userChoices[i];
		else {
			choices.push(currentChoice);
			currentChoice = "";
		}
	}

	output.innerHTML = choices[Math.floor(Math.random() * choices.length)];

	// This is an alternative much shorter code
	// choices = textArea.value.trim().split("\n"),
}

submitBtn.addEventListener("click", function() {
	setTimeout(randomPicker, 50);
})
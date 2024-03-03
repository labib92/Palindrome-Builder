let textInput = document.querySelector("#text-input");
let checkButton = document.querySelector("#check-btn");
let result = document.querySelector("#result");


function isPalandrome() {
    if (textInput.value == "") {
        alert("Please input a value");
    }else{
        const words = textInput.value.replace(/[^A-Za-z0-9]/gi, "").toLowerCase();
        let resultValue = `${textInput.value} ${words === [...words].reverse().join("") ?
            "is" : "is not"} a palindrome.`;
        result.innerText = resultValue;
        result.style.display = "block";
    }
}

checkButton.onclick = isPalandrome;
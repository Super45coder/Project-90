function send(){
    console.log("Send");
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    question = "<h4>" + number1 + " X " + number2 + "</h4>";
    answer_input = "<br/>Answer = <input type='text' id='input_checkbox'>";
    check_button = "<br/><br/><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question + answer_input + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}
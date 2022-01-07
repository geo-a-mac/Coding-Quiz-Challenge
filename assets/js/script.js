// set up quiz question
var questArray = [];
var q1 = {
    q: "What is hoisting?",
    answer1: "A way of moving furniture",
    a1Status: "Wrong",
    answer2: "Allows functions to be used before they are declared",
    a2Status: "Correct",
    answer3: "Requires functions to be declared before they are used",
    a3Status: "Wrong",
    answer4: "Invalid in Javascript code",
    a4Status: "Wrong"
}
questArray.push(q1);
var q2 = {};
q2.q = "How do you reference an object property?"
q2.answer1 = "Object > property";
q2.a1Status = "Wrong";
q2.answer2 = "Property < Object";
q2.a2Status = "Wrong";
q2.answer3 = "Object.property";
q2.a3Status = "Correct";
q2.answer4 = "Property.Object";
q2.a4Status = "Wrong";
questArray.push(q2);

var q3 = {};
q3.q = "How do you remove an item from the end of an array?"
q3.answer1 = "array.pop()";
q3.a1Status = "Correct";
q3.answer2 = "array.remove()";
q3.a2Status = "Wrong";
q3.answer3 = "array.push()";
q3.a3Status = "Wrong";
q3.answer4 = "pop.array()";
q3.a4Status = "Wrong";
questArray.push(q3);

var q4 = {};
q4.q = "What does array.toString() do?"
q4.answer1 = "Modifies the array elements";
q4.a1Status = "Wrong";
q4.answer2 = "Invalid code";
q4.a2Status = "Wrong";
q4.answer3 = "Creates an array of strings";
q4.a3Status = "Wrong";
q4.answer4 = "Returns a string representation of the array's elements"
q4.a4Status = "Correct";
questArray.push(q4);

var q5 = {};
q5.q = "What does NaN mean?"
q5.answer1 = "Not a number";
q5.a1Status = "Correct";
q5.answer2 = "Near a number";
q5.a2Status = "Wrong";
q5.answer3 = "Null and Nothing";
q5.a3Status = "Wrong";
q5.answer4 = "Not a Null";
q5.a4Status = "Wrong";
questArray.push(q5);

var q6 = {};
q6.q = "How do you monitor for user clicks?"
q6.answer1 = "Use eventAddListener()";
q6.a1Status = "Wrong";
q6.answer2 = "Use addEventMonitor()";
q6.a2Status = "Wrong";
q6.answer3 = "Use addEventListener()";
q6.a3Status = "Correct";
q6.answer4 = "Use clickEventListener()";
q6.a4Status = "Wrong";
questArray.push(q6);

var q7 = {};
q7.q = "Which is valid code?"
q7.answer1 = "addEventListener('click', function())";
q7.a1Status = "Correct";
q7.answer2 = "addEventListener.click.function()";
q7.a2Status = "Wrong";
q7.answer3 = "addEventListener(function(), 'click')";
q7.a3Status = "Wrong";
q7.answer4 = "clickEventListener('event', function())";
q7.a4Status = "Wrong";
questArray.push(q7);

var q8 = {};
q8.q = "Which are Javascript events?"
q8.answer1 = "Click";
q8.a1Status = "Wrong";
q8.answer2 = "Change";
q8.a2Status = "Wrong";
q8.answer3 = "Mousemove";
q8.a3Status = "Wrong";
q8.answer4 = "All of the above";
q8.a4Status = "Correct";
questArray.push(q8);

var q9 = {};
q9.q = "How do you connect an HTLM element in javascript code?"
q9.answer1 = "document.querySelector()";
q9.a1Status = "Correct";
q9.answer2 = "document.elementSelector()";
q9.a2Status = "Wrong";
q9.answer3 = "document.Select()";
q9.a3Status = "Wrong";
q9.answer4 = "document.selectHTML()";
q9.a4Status = "Wrong";
questArray.push(q9);

var q10 = {};
q10.q = "What does DOM stand for?"
q10.answer1 = "Domain Object Model";
q10.a1Status = "Wrong";
q10.answer2 = "Document Object Manipulation";
q10.a2Status = "Wrong";
q10.answer3 = "Document Object Model";
q10.a3Status = "Correct";
q10.answer4 = "Domain Object Manipulation";
q10.a4Status = "Wrong";
questArray.push(q10);

for (i=0; i<questArray.length; i++) {
    console.log(questArray[i]);
}

var countDown = function() {

}


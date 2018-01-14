// NOTE: result get text input text 1
function getText() {
  var text = "result get text :" + "  " + document.getElementById('input-one').value;
  console.log(text);
  document.getElementById('result').innerHTML = text;
}
// NOTE:  combine 2 text
function textCombine() {
  var textone = document.getElementById('input-one').value;
  var textwo = document.getElementById('input-two').value;

  var textcom = "result text combine : " +
    textone + "  " + textwo;
  console.log(textcom);
  document.getElementById('result').innerHTML = textcom;
}
// NOTE: uppercase text
function uppercase() {
  var textone = document.getElementById('input-one').value;
  var textwo = document.getElementById('input-two').value;

  var textuc = "result toUpperCase :  " + textone.toUpperCase() + " " + textwo.toUpperCase();
  document.getElementById('result').innerHTML = textuc;
}
// NOTE:  lowercase text
function lowercase() {
  var textone = document.getElementById('input-one').value;
  var textwo = document.getElementById('input-two').value;

  var textuc = "result toLowerCase :  " + textone.toLowerCase() + " " + textwo.toLowerCase();
  document.getElementById('result').innerHTML = textuc;
}

function textCapital() {
  var textone = document.getElementById('input-one').value;

  // NOTE: text change to lowercase
  textone = textone.toLowerCase();

  // NOTE: text split into array of strings
  textone = textone.split(' ');

  console.log(textone);
  // NOTE: looping get charAt index 0 change to uppercase
  for (var i = 0; i < textone.length; i++) {
    textone[i] = textone[i].charAt(0).toUpperCase() + textone[i].slice(1);
    console.log(textone);
  }

  console.log(textone);
  document.getElementById('result').innerHTML = "result text capital:  " + textone.join(' ');
}
document.getElementById('result-one').addEventListener('click', getText);
document.getElementById('result-two').addEventListener('click', textCombine);
document.getElementById('result-three').addEventListener('click', uppercase);
document.getElementById('result-four').addEventListener('click', lowercase);
document.getElementById('result-five').addEventListener('click', textCapital);
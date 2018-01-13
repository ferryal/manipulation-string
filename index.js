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

  var textuc = textone.toUpperCase() + " " + textwo.toUpperCase();
  document.getElementById('result').innerHTML = textuc;
}
// NOTE:  lowercase text
function lowercase() {
  var textone = document.getElementById('input-one').value;
  var textwo = document.getElementById('input-two').value;

  var textuc = textone.toLowerCase() + " " + textwo.toLowerCase();
  document.getElementById('result').innerHTML = textuc;
}

function textCapital(textone) {
  var textone = document.getElementById('input-one').value;
  var textwo = document.getElementById('input-two').value;
  console.log(textone);
  // NOTE: first letter
  // var tempone = textone.charAt(0);
  // var temptwo = textwo.charAt(0);
  //
  // var tempthree = textone.charAt(0).toUpperCase();
  // var tempthree = textwo.charAt(0).toUpperCase();
  //
  // var tempfour = textone.slice(1);
  // var tempfive = textwo.slice(1);
  //
  return textone.charAt(0).toUpperCase().slice(1);
  console.log(textone);

  document.getElementById('result').innerHTML = tempfive;
}
document.getElementById('result-one').addEventListener('click', getText);
document.getElementById('result-two').addEventListener('click', textCombine);
document.getElementById('result-three').addEventListener('click', uppercase);
document.getElementById('result-four').addEventListener('click', lowercase);
document.getElementById('result-five').addEventListener('click', textCapital);
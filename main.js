var sec = document.getElementById("section");
var butt = document.getElementById("button");
butt.onclick = function()
    {
   var ssrc = sec.getAttribute('style');
   var bsrc = butt.getAttribute('style');
   if(ssrc === 'display: none;') {
     sec.setAttribute ('style','display: all;');
     butt.setAttribute ('style','display: none;');
    }
}
//creates a listener for when you press a key
var keyup = window.onkeyup

//creates a global Javascript variable
var inputTextValue;

function keyup(e) {
  inputTextValue = e.target.value;
  $('#searchValue').text("champ" + inputTextValue);
  if (e.keyCode == 13) {
    window.location = "champ" + inputTextValue;
  }
}
window.onload = function() {
    setTimeout( function fonc( )
        { alert( "Vien voir mon site XXX https://www.youporn.com/" ); }
        , 10000) ;};
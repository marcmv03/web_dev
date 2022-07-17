function respostes() {
  var a = document.getElementById('diagonal').value ;
  console.log(a);
  var e = 0;
  var f = 0;
  if(a == 20) {
    ++e ;
    window.alert("Correcte")
  }
  else {
    ++f ;
    window.alert("Incorrecte")
  }
}

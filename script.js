console.log("Hello 🌎");

const btn = document.querySelector("#btn"); 
const accept_btn = document.querySelector(".button_accept");

btn.onclick = function() {
  document.querySelector("#btn").innerHTML = "HẾT FREE GÒIII";
};

let id = 1;

accept_btn.onclick = btn_click;

function btn_click() {
  var data = document.querySelector(`.div_${id} #data_div`).innerHTML;
  alert(`Mua thành công gói ${data}`)
};

function show(id_par) {
  var x = document.querySelector(".popup_1");
  id = id_par;
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  } 
}

const btn1 = document.querySelector(".btn1");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");

btn1.onclick = function() {show(1);}
btn3.onclick = function() {show(3);}
btn4.onclick = function() {show(4);}

const close = document.querySelector(".close");

close.onclick = function() {
  var x = document.querySelector(".popup_1");
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
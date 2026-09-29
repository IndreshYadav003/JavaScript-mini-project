const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
})
const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", () => {
  
  document.body.style.backgroundColor = btn1.style.backgroundColor;
})  
const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", () => {
  document.body.style.backgroundColor = btn2.style.backgroundColor;
})  
const btn3 = document.getElementById("btn3");
btn3.addEventListener("click", () => {
  document.body.style.backgroundColor = btn3.style.backgroundColor;
}) 
const btn4 = document.getElementById("btn4");
btn4.addEventListener("click", () => {
  document.body.style.backgroundColor = btn4.style.backgroundColor;
})
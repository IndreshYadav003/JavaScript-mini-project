const btn=document.getElementById("btn");
const quote=document.getElementById("h1");
const quotes = [
  "Honesty is the best policy",
  "Believe in yourself",
  "Hard work beats talent",
  "Never give up",
  "Dream big and work hard",
  "Success takes time",
  "Stay positive",
  "Learn from your mistakes",
  "Knowledge is power",
  "Practice makes perfect",
  "Be kind to others",
  "Focus on your goals",
  "Every day is a new beginning",
  "Small steps lead to big results",
  "Keep moving forward",
  "Confidence comes with practice",
  "Discipline creates success",
  "Never stop learning",
  "Make today count",
  "Your effort matters"
];
// Add event listener to the button
btn.addEventListener("click",function(){
  // index random generator
const randomIndex = Math.floor(Math.random() * quotes.length);
// Add event listener to the button
    quote.textContent = quotes[randomIndex];
}); 
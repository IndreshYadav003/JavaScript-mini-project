const name1 = document.getElementById('name1');
const name2 = document.getElementById('name2');
const result= document.getElementById('result');
const form = document.getElementById('love-form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const name1Value = name1.value.trim().length;
  const name2Value = name2.value.trim().length;
  if (name1Value === 0 || name2Value === 0) {
    result.textContent = 'Please enter both names.';
    return;
  }
  const resultValue = Math.pow((name1Value + name2Value), 17) % 101;
document.querySelector('h2').textContent = `Love Percentage: ${resultValue}%`;
});

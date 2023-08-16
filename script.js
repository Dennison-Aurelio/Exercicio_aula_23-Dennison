const input = document.querySelector('#input');
const output = document.querySelector('#output');

input.addEventListener('input', () => {
  const words = input.value.split(' ').filter(word => word.length > 0);
  output.textContent = words.length;
});
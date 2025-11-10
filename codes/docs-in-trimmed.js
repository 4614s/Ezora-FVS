const code1 = `<input type="text" _trimmed _if="$len > 0">`;
const code2 = `<input type="text" _trimmed="left">`;
const code3 = `<input type="text" _trimmed="right">`;

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('#code1').textContent = code1;
  document.querySelector('#code2').textContent = code2;
  document.querySelector('#code3').textContent = code3;
});

const code1 = `
<form ezfvs-set
    _valid="document.querySelector('#msg').textContent = 'Form doğrulama başarılı';"
    _invalid="document.querySelector('#msg').textContent = 'Form doğrulama başarısız';">

  <input type="checkbox" _if-checked>
  
  <input type="submit">
  
</form>

<div id="msg"></div>
`.trim();

const code2 = `
// script.js dosyası

function showValidMsg() {
  document.querySelector('#msg').textContent = 'Form doğrulama başarılı';
}

function showInvalidMsg() {
  document.querySelector('#msg').textContent = 'Form doğrulama başarısız';
}
`.trim();

const code3 = `
<script src="script.js"></script>

<form ezfvs-set _valid="showValidMsg()" _invalid="showInvalidMsg()">

  <input type="checkbox" _if-checked>
  
  <input type="submit">
  
</form>

<div class="msg"></div>
`.trim();

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#code1').textContent = code1;
  document.querySelector('#output1').innerHTML = code1;
  document.querySelector('#code2').textContent = code2;
  document.querySelector('#code3').textContent = code3;
});
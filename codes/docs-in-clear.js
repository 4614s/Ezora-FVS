const code1 = `<input type="text" _clear>`;
const form = (clear = "") => `<form ezfvs-set _valid-msg="Doğrulama başarılı." _invalid-msg="Doğrulama başarısız. Tekrar deneyin">

  <label style="display: block; margin-bottom: 12px;">
    <div>Adınız:</div>
    <input type="text" _if="$len >= 3" ${clear}>
  </label>
  
  <label style="display: block; margin-bottom: 12px;">
    <input type="checkbox" _if-checked ${clear}> Kullanım koşullarını okudum ve kabul ediyorum.
  </label>
  
  <div style="margin-bottom: 12px;">
    <ins style="cursor: pointer;" onclick="alert('{{ Kullanım koşulları }}')">Kullanım koşulları</ins>
  </div>
  
  <input type="submit">
  
</form>`

document.querySelector('#code1').textContent = code1;

document.querySelector('#output1').innerHTML = form();
document.querySelector('#code2').textContent = form();
document.querySelector('#output2').innerHTML = form("_clear");
document.querySelector('#code3').textContent = form("_clear");

function showCode(el) {
  el.parentElement.nextElementSibling.classList.toggle("[display:none]");
  el.textContent = "Kodu " + (el.parentElement.nextElementSibling.classList.contains("[display:none]") ? "göster" : "gizle");
}
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#code1').textContent = cdnTagEzfvsV1Min;
  document.querySelector('#code2').textContent = output1Code;
  document.querySelector('#output1').innerHTML = output1Code;
});

const output1Code = `<form ezfvs-set _valid-msg="Başarılı! Aferin :)" _invalid-msg="Başarısız!">
      
  <label style="display: block; margin-bottom: 10px;">
    <input type="checkbox" _if-checked>
    Beni işaretlemek zorundasın
  </label>
      
  <input type="submit">
      
</form>`;

document.addEventListener('click', e => {
  if(!e.target.classList.contains('copytext')) return;
  copy(e);
})

function copy(e) {
  const text = e.target;
  
  navigator.clipboard.writeText(e.target.parentElement.nextElementSibling.textContent)
    .then(() => {
      text.textContent = "Kopyalandı";
    })
    .catch(() => {
      text.textContent = "Kopyalanamadı";
    });
    
  setTimeout(() => { 
    text.textContent = "Kopyala"
  }, 2500);
}
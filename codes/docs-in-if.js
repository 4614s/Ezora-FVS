const code1 = 
`<form ezfvs-set>

  <input type="text" _if="$val.lower == 'merhaba'">
  
  <input type="submit" value="gönder">
  
</form>`;

const code2 =
`<form ezfvs-set _valid-msg="Başarılı" _invalid-msg="Başarısız">

  <input type="text" value="Deneme" _if="$val == 'Deneme'">
  
  <input type="submit" value="gönder">
  
</form>`;

document.querySelector('#code1').textContent = code1;
document.querySelector('#code2').textContent = code2;
document.querySelector('#output1').innerHTML = code2;
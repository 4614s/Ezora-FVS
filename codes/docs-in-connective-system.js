const code1 = `
<form ezfvs-set>
  
  <label style="display: block; margin-bottom: 10px;">
    <div>Şifre:</div>
    <input type="password" _id="password1" placeholder="Şifrenizi girin...">
  </label>
  
  <label>
    <input type="checkbox" _connect="password1" _show-password> 
    Şifreyi göster
  </label>
  
</form>
`.trim();

const code2 = `
<form ezfvs-set>

  <label style="display: block; margin-bottom: 10px;">
    <div>Kullanıcı adı:</div>
    <input type="text" _id="username" placeholder="Kullanıcı adınızı girin..." _if="!$val.includes(' ') && $len > 5" _trimmed>
  </label>
  
  <div _connect="username" _if-valid style="color: green;">Kullanıcı adı formatı geçerli</div>
  
  <div _connect="username" _if-invalid style="color: red;">Kullanıcı adı formatı geçersiz</div>
  
</form>
`.trim();

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#code1').textContent = code1; 
    document.querySelector('#output1').innerHTML = code1;
    document.querySelector('#code2').textContent = code2; 
    document.querySelector('#output2').innerHTML = code2;
});
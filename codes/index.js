document.addEventListener("DOMContentLoaded", () => {
const renderCodes = () => {
   document.querySelector(`#code1`).textContent = code1;
   document.querySelector(`#code2`).textContent = code2;
   document.querySelector(`#code3`).textContent = code3;
   document.querySelector('#code4-js').textContent = code4Js;
   document.querySelector('#code4-html').textContent = code4Html;
}

const code1 = `<h3>1. Seviye zeka testi: Elmayı seçin</h3>
    
<form ezfvs-set _valid-msg="Başarılı" _invalid-msg="Başarılı değil">
       
  <select _if="$val == 'elma'">
    <option value="karpuz">🍉</option> 
    <option value="elma">🍎</option> 
    <option value="salatalik">🥒</option> 
  </select>
       
  <input type="submit" />
       
</form>`;

const code2 = `<h3>E-posta doğrulaması:</h3>

<form ezfvs-set _valid-msg="Başarılı" _invalid-msg="Lütfen geçerli bir e-posta formatı girin.">

 <input type="text" _if="$val.includes('@') && $val.split('@')[1].includes('.')" />
 
 <input type="submit" />
 
</form>`;

const code3 = `<h3>Giriş formu</h3>
  
<form ezfvs-set _valid-msg="Başarılı" _invalid-msg="Başarılı değil">

  <label>
     <div>Kullanıcı Adı:</div>
     <input type="text" _id="username" _if="!$val.includes(' ') && $len >= 8" />
     <div _connect="username" _if-invalid style="color: red;">Kullanıcı adı formatı geçersizdir</div>
  </label>
   
  <label>
     <div>Şifre:</div>
     <input type="password" _id="password" _if="$len >= 8 && $len <= 20" />
  </label>
  
  <label>
    <div>
      <input type="checkbox" _connect="password" _show-password /> 
      Şifreyi göster 
    </div>
  </label>
  
  <input type="submit" />
  
</form>`;

const code4Js = `EzoraFVS.variables = {
  importantPassword: "ruhi1234"
};`;

const code4Html = `<form ezfvs-set _valid-msg="Başarılı" _invalid-msg="Başarılı değil">
    
 <input type="password" _if="$val == $importantPassword" _id="password"/>
    
 <input type="checkbox" _connect="password" _show-password /> Şifreyi göster
    
 <input type="submit" />
    
</form>`;

renderCodes();
})
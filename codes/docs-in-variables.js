const code1 = `
EzoraFVS.variables = {
  importantPassword: "ruhi1234"
};
`.trim();

const code2 = `
<form ezfvs-set _valid-msg="Başarılı" _invalid-msg="Başarılı değil">
    
 <input type="password" _if="$val == $importantPassword" _id="password"/>
    
 <input type="checkbox" _connect="password" _show-password /> Şifreyi göster
    
 <input type="submit" />
    
</form>
`.trim();

const output1 = `
<form ezfvs-set _valid-msg="Başarılı" _invalid-msg="Başarılı değil">
    
 <input type="password" _if="$val == 'ruhi1234'" _id="password" class="block mb-2" />
    
 <input type="checkbox" _connect="password" _show-password class="mb-6" /> Şifreyi göster
    
  <div>
   <input type="submit" />
  </div>
    
</form>
`.trim();

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#code1').textContent = code1;
  document.querySelector('#code2').textContent = code2;
  document.querySelector('#output1').innerHTML = output1;
});

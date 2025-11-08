class EzoraFVS {
  
  static variables = {};
  
  static v = (() => {
  
  const version = "1.0.1"; 
  
  document.addEventListener("DOMContentLoaded", main);
  
  function main() {
    hideValidationMessages();
    const eventMap = {
      "change": changeEvent,
      "submit": submitEvent
    };
    for(const event in eventMap) document.addEventListener(event, eventMap[event]);
  }
  
  function changeEvent(e) {
    const input = e.target;
    const form = input.closest("form[ezfvs-set]");
    if(!form) return; 
    if(input.hasAttribute("_if") || input.hasAttribute("_if-checked")) inputValidate(form, input);
    if(input.hasAttribute("_connect") && input.hasAttribute("_show-password")) {
      const id = input.getAttribute("_connect");
      const target = form.querySelector(`[_id='${id}']`);
      target.type = input.checked ? "text" : "password";
    }
  }
  
  function submitEvent(e) {
    const form = e.target.closest("form[ezfvs-set]");
    if(!form) return;
    e.preventDefault();
    const clear = input => {
      if(input.type === "radio" || input.type === "checkbox") input.checked = false;
      else input.value = "";
    };
    if(form.hasAttribute("_clear-all")) form.querySelectorAll("[_if], [_if-checked]").forEach(input => clear(input));
    else form.querySelectorAll("[_clear]").forEach(input => clear(input));
    
    {
     const el = form.querySelector("[_show-password]");
     if(el !== null && el.checked) el.checked = false;
    }
    
    hideValidationMessages();
      
    if(Array.from(form.querySelectorAll("[_if], [_if-checked]")).every(input => input.dataset._valid === "true")) {
      if(form.hasAttribute("_valid")){
        try{ eval(form.getAttribute("_valid")); }
        catch(err){ console.error("EzoraFVS EvalError:", err); }
      } else if(form.hasAttribute("_valid-msg")) alert(form.getAttribute("_valid-msg"));
    } else {  
      const firstInvalid = form.querySelector("[_if][data-_valid='false'], [_if-checked][data-_valid='false']");
      if(firstInvalid) firstInvalid.focus();
      
      if(form.hasAttribute("_invalid")){
        try{ eval(form.getAttribute("_invalid")); }
        catch(err){ console.error("EzoraFVS EvalError:", err); }
      }
      else if(form.hasAttribute("_invalid-msg")) alert(form.getAttribute("_invalid-msg"));
      }
  }
  
  function inputValidate(form, input) {
        
    if(input.hasAttribute("_if-checked") && !input.hasAttribute("_if")) {
      input.removeAttribute("_if-checked");
      input.setAttribute("_if", "$checked");
    }
        
    const syntaxFixes = [
      [/(?<![=!])==(?!=)/g, "==="],
      [/(?<![=!])!=(?!=)/g, "!=="],
      [/(?<!["'`])\.upper\b\(/g, ".toLocaleUpperCase("],
      [/(?<!["'`])\.lower\b\(/g, ".toLocaleLowerCase("],
      [/(?<!["'`])\.upper\b(?!["'`])/g, ".toUpperCase()"],
      [/(?<!["'`])\.lower\b(?!["'`])/g, ".toLowerCase()"],
      [/(?<!["'`])\.start\b\(/g, ".startsWith("],
      [/(?<!["'`])\.end\b\(/g, ".endsWith("]
    ];
      
    
    const vars = EzoraFVS.variables || {};
    const varNames = Object.keys(vars);
    const varPattern = varNames.length ? `|\\$(?:${varNames.join("|")})` : "";

    const safe = new RegExp(`^((?:\\s|['"].*?['"]|true|false|\\d+|\\$val|\\$len|\\$checked${varPattern}|\\.(?:toUpperCase|toLowerCase|toLocaleUpperCase|toLocaleLowerCase|includes|startsWith|endsWith|split)|[+\\-*/%()><=!&|?:.,])*)$`, "i");
        
     let cond = input.getAttribute('_if');
     let val = input.value;
     syntaxFixes.forEach(fix => cond = cond.replace(fix[0], fix[1]) );
        
     if(input.hasAttribute("_trimmed") || form.hasAttribute("_trimmed-all")) {
      let attr;
      if(input.hasAttribute("_trimmed")) attr = input.getAttribute("_trimmed");
      else attr = form.getAttribute("_trimmed-all");
      attr = String(attr ?? "").trim().toLowerCase();
      val = (attr === "right" ? val.trimEnd() : attr === "left" ? val.trimStart() : val.trim()) ?? val;
      }
      
      const len = val.length;
      const checked = input.checked;
      let isValid = false;
      
      if(safe.test(cond)) {
        try { 
          for(const name of varNames) cond = cond.replaceAll(`$${name}`, `EzoraFVS.variables.${name}`);
          isValid = !!(new Function("$val", "$len", "$checked", `return ${cond}`)(val, len, checked)); 
        } catch { isValid = false; }
       } else isValid = false;
            
      if(input.hasAttribute("_id")) {
        form.querySelectorAll(`[_connect='${input.getAttribute("_id")}']`).forEach(txt => {
           if(txt.hasAttribute("_if-valid") || txt.hasAttribute("_if-invalid")) {
             const display = txt.hasAttribute("_is-inline") ? "inline" : "block";
             if(isValid) txt.style.display = txt.hasAttribute("_if-valid") ? display : "none"; 
             else txt.style.display = txt.hasAttribute("_if-invalid") ? display : "none"; 
           }
          });
       }
       
       input.dataset._valid = String(isValid);   
    }
   
  function hideValidationMessages() {
    document.querySelectorAll("form[ezfvs-set] [_if-valid], form[ezfvs-set] [_if-invalid]").forEach(txt => txt.style.display = "none");
  } 
    
   return version;
})()
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('main').classList.add("font-['Inter']");
  document.body.classList.add("c-body");
  renderBtn();
  if(document.querySelector('#hero') !== null) {
    document.querySelector('#hero').innerHTML = HeroInner;
    document.querySelector('#hero').className = "bg-green-600 dark:bg-green-800 text-2xl text-center p-4 font-semibold text-white capitalize text-center";
  }

});

Import();

function DefineComponents() {
  customElements.define("c-header", Header);
  customElements.define("c-footer", Footer);
}

class Header extends HTMLElement {
  connectedCallback() {
    this.className = "font-['Poppins'] flex gap-2 items-center justify-between bg-green-700 dark:bg-green-900 p-2 text-white sticky [top:0] z-50";
    this.innerHTML = `<span>
      <span class="text-xl mr-[1px]">EzoraFVS</span> v1
       </span>
       <span>
        <a href="https://github.com/4614s/ezora-fvs" class="text-white hover:text-gray-400 mr-1"><span class="fab fa-github text-4xl"></span></a>
        <a href="/code" class="text-white hover:text-gray-400"><span class="fas fa-code text-4xl"></span></a>
        <span class="text-4xl m-[2px] ml-[3px] cursor-pointer hover:text-gray-400" onclick="toggleMenu()" id="menubtn">☰</span>
        </span>`;
      this.querySelector("#menubtn").onclick = () => {
        menu.classList.toggle('[left:0]');
        shadow.classList.toggle('[left:0]');
        const open = menu.classList.contains('[left:0]');
        document.body.style.overflow = open ? "hidden" : "";
      };
      const menu = document.createElement("div");
      menu.id = "menu";
      menu.className = "p-2 fixed [left:-100vw] w-[80vw] h-screen transition-all z-100 [overflow-y:auto_!important] text-white bg-green-600 dark:bg-green-800";
      menu.innerHTML = `
       <h3 class="cursor-pointer" onclick="document.querySelector('#docs').classList.toggle('[display:none]')">Dokümantasyon</h3> 
       <div id="docs" class="[display:none]">
        <a href="/docs/introduction">1- Giriş: CDN ile dahil etme ve ilk kodumuz</a>
        
        <a href="/docs/if-attr">2- _if özniteliği: kullanımı ve sözdizimi</a>
        
        <a href="/docs/clear-attr">3- _clear özniteliği</a>
        
        <a href="/docs/trimmed-attr">4- _trimmed özniteliği</a>
        
        <a href="/docs/connective-system">5- Bağlantı sistemi</a>
        
        <a href="/docs/code-execution">6- Form doğrulamasına göre kod çalıştırma</a>
       </div>
       
      <h3 class="cursor-pointer" onclick="location.href='/'">Anasayfa</h3>
      
      <h3 class="cursor-pointer" onclick="location.href='https://github.com/4614s/ezora-fvs'">Github</h3>
      
      <h3 class="cursor-pointer" onclick="location.href='/code'">Kod</h3>
      
      <div class="h-[50vh]"></div>
      `.trim();
      document.body.appendChild(menu);
      
      const shadow = document.createElement("div");
      shadow.id = "shadow";
      shadow.className = "fixed [left:-100vw] bg-black/20 w-screen h-screen";
      document.body.appendChild(shadow);
  }
}

class Footer extends HTMLElement {
  connectedCallback() {
    this.className = "dark:bg-gray-800 bg-gray-500 text-white p-4 mb-0 block text-center";
    this.innerHTML = `<div class="ezs-footer">Lisans bilgisi yüklenemedi</div><div class="ezc-theme flex justify-center"></div>`;
  }
}
const startingPage = "docs/introduction" + (location.hostname === "localhost" ? ".html": "");

const HeroInner = `<div class="sm:flex sm:justify-around sm:items-center lg:justify-center gap-3"> <img onerror="this.style.display='none'" src="https://ezfvs.pages.dev/images/ezfvs-logo.jpg" class="w-48 mb-5 block mx-auto sm:inline sm:mx-2 rounded-md">
  HTML öznitelikleriyle form doğrulamayı kolaylaştıran hafif bir kütüphane.
 </div> <button onclick="location.href = '${startingPage}'" class="font-bold px-6 py-3 mt-5 rounded-lg border-none bg-lime-200 hover:bg-lime-400 active:scale-90 transition cursor-pointer">Başlayın</button>`;

DefineComponents();

function renderBtn() {

  document.querySelector(".ezc-theme").innerHTML = `<label> <input type="checkbox" id="theme"/> Karanlık Mod </label>`;
  
  const root = document.documentElement;
  const checkbox = document.querySelector("#theme");
 
  checkbox.addEventListener("change", handle);
  if(localStorage.getItem("theme") === null) localStorage.setItem("theme", window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  if(localStorage.getItem("theme") === "dark") {
    root.classList.add("dark");
    checkbox.checked = true;
  }
  
  let isDark = root.classList.contains("dark");
  
  function handle(){
    root.classList.toggle("dark");
    isDark = root.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }
}

function Import() {
  createLink("stylesheet", (document.documentElement.dataset.prfx ?? "") + "style.css");
  createLink("icon", "https://ezfvs.pages.dev/images/ezfvs-logo1.jpg");
  
  function createLink(rel, href) {
    const el = document.createElement("link");
    el.rel = rel;
    el.href = href;
    document.head.appendChild(el);
  }

      }

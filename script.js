let lang='en';
const langBtn=document.getElementById('lang');

function setLanguage(){
  document.documentElement.lang=lang;
  document.documentElement.dir=lang==='ar'?'rtl':'ltr';
  document.querySelectorAll('[data-ar]').forEach(el=>{
    el.innerHTML=el.getAttribute(lang==='ar'?'data-ar':'data-en');
  });
  langBtn.textContent=lang==='ar'?'English':'العربية';
}
langBtn.addEventListener('click',()=>{lang=lang==='ar'?'en':'ar';setLanguage()});

function order(item){
  const msg=encodeURIComponent(
    (lang==='ar'?'مرحباً، أريد الاستفسار عن: ':'Hello, I would like to ask about: ')+item
  );
  window.open('https://wa.me/96181859194?text='+msg,'_blank');
}
setLanguage();

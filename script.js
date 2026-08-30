let lang='en';
const langBtn=document.getElementById('lang');

const translations = {
"Home":"الرئيسية","Products":"المنتجات","Mobile Phones":"الهواتف المحمولة",
"Services":"الخدمات","About Us":"من نحن","Contact":"اتصل بنا",
"Complete Technology Solutions":"حلول تقنية متكاملة",
"For a Safer, Smarter World":"لعالم أكثر أماناً وذكاءً",
"CCTV cameras, computers, networking, mobile phones, installation, maintenance and complete technology solutions.":"كاميرات مراقبة، أجهزة كمبيوتر، شبكات، هواتف محمولة، تركيب، صيانة وحلول تقنية متكاملة.",
"Browse Products":"تصفح المنتجات","WhatsApp Us":"تواصل عبر واتساب",
"Competitive Prices":"أسعار منافسة","Delivery & Installation":"توصيل وتركيب",
"Quality Guaranteed":"جودة مضمونة","Technical Support":"دعم فني",
"Our Products":"منتجاتنا",
"Choose a product category. Detailed devices, specifications and prices are displayed inside their dedicated category.":"اختر فئة المنتج. تظهر الأجهزة والمواصفات والأسعار داخل القسم المخصص لها.",
"CCTV Cameras":"كاميرات المراقبة","Computers & Laptops":"الكمبيوتر واللابتوب",
"Networking":"الشبكات","Installation & Maintenance":"التركيب والصيانة",
"Accessories":"الإكسسوارات","Open Mobile Phones":"عرض الهواتف المحمولة",
"View category":"عرض الفئة","View services":"عرض الخدمات",
"Samsung":"سامسونج","Available":"متوفر","Available Versions & Prices":"النسخ والأسعار المتوفرة",
"Order on WhatsApp":"اطلب عبر واتساب","Samsung Galaxy A Series":"سلسلة سامسونج جالاكسي A",
"smartphone. Available versions and prices.":"هاتف ذكي. النسخ والأسعار المتوفرة.",
"Why Technology World?":"لماذا عالم التكنولوجيا؟",
"We provide practical technology solutions for homes and businesses, focusing on quality, fair pricing and after-sales support.":"نقدم حلولاً تقنية عملية للمنازل والشركات مع التركيز على الجودة والأسعار المناسبة وخدمة ما بعد البيع.",
"Contact Us":"تواصل معنا","Message us on WhatsApp":"راسلنا على واتساب",
"Solutions for a smarter world":"حلول لعالم أكثر ذكاءً",
"All Rights Reserved.":"جميع الحقوق محفوظة."
};

const originalNodes = new WeakMap();

function translateText(ar){
  const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
  const nodes=[]; while(walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node=>{
    const current=node.nodeValue;
    if(!originalNodes.has(node)) originalNodes.set(node,current);
    const original=originalNodes.get(node);
    const trimmed=original.trim();
    if(!ar){ node.nodeValue=original; return; }
    if(translations[trimmed]){
      const lead=original.match(/^\s*/)[0], tail=original.match(/\s*$/)[0];
      node.nodeValue=lead+translations[trimmed]+tail;
    }
  });
}

function setLanguage(){
  const ar=lang==='ar';
  document.documentElement.lang=lang;
  document.documentElement.dir=ar?'rtl':'ltr';
  document.body.classList.toggle('arabic-mode',ar);
  translateText(ar);
  document.querySelectorAll('[data-ar]').forEach(el=>{
    el.innerHTML=el.getAttribute(ar?'data-ar':'data-en');
  });
  langBtn.textContent=ar?'English':'العربية';
}

langBtn.addEventListener('click',()=>{
  lang=lang==='ar'?'en':'ar';
  setLanguage();
});

function order(item){
  const msg=encodeURIComponent((lang==='ar'?'مرحباً، أريد الاستفسار عن: ':'Hello, I would like to ask about: ')+item);
  window.open('https://wa.me/+961 81 85 91 94?text='+msg,'_blank');
}

// English is always the default when opening the website.
setLanguage();

document.addEventListener('DOMContentLoaded',()=>{
  const btn=document.getElementById('previewBtn');
  const txt=document.getElementById('letter');
  const pv=document.getElementById('preview');
  const render=(text)=>{
    // basic formatting: convert lines to paragraphs
    const lines=text.split('\n').filter(l=>l.trim().length>0);
    pv.innerHTML=lines.map(l=>'<p>'+escapeHtml(l)+'</p>').join('');
  };
  function escapeHtml(s){return s.replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]))}
  btn.addEventListener('click',()=>render(txt.value));
});
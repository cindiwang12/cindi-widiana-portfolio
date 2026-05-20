// Scroll reveal
const ro = new IntersectionObserver((entries)=>{
    entries.forEach((e,i)=>{
      if(e.isIntersecting){
        setTimeout(()=>e.target.classList.add('vis'),i*55);
        ro.unobserve(e.target);
      }
    });
  },{threshold:.08,rootMargin:'0px 0px -30px 0px'});
  
  document.querySelectorAll('.reveal').forEach(el=>ro.observe(el));
  
  // Skill bars
  const bo = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.querySelectorAll('.sk-fill').forEach(bar=>{
          const w = bar.getAttribute('data-w');
          setTimeout(()=>{ bar.style.width = w+'%' },250);
        });
        bo.unobserve(entry.target);
      }
    });
  },{threshold:.25});
  
  document.querySelectorAll('.sk-layout').forEach(el=>bo.observe(el));
  
  // Active nav
  const secs = document.querySelectorAll('[id]');
  const navAs = document.querySelectorAll('.nav-links a');
  
  window.addEventListener('scroll',()=>{
    let cur='';
    secs.forEach(s=>{
      if(window.scrollY >= s.offsetTop - 220) cur = s.id;
    });
  
    navAs.forEach(a=>{
      a.classList.toggle(
        'active',
        a.getAttribute('href').replace('#','') == cur
      );
    });
  });
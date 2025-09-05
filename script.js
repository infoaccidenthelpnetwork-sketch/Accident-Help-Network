
(function(){
  const params = new URLSearchParams(location.search);
  const src = (params.get('utm_source')||'').toLowerCase();
  const hook = document.querySelector('#dyn-head');
  const map = {'facebook':'Hit by a driver? Talk to a human in minutes.','instagram':'Injured? Get real help fast — no upfront fees.','google':'Car accident help, from intake to attorney, same-day.','reddit':'Insurance pushing you to settle? Know your options first.'};
  if(hook && map[src]) hook.textContent = map[src];
  const list = ['No upfront fees — ever.','Speak to a real person, not a chatbot.','We only work with licensed, vetted firms.','If you don’t win, you don’t pay the law firm.'];
  const rot = document.querySelector('#rot-hook'); let i=0; setInterval(()=>{ if(rot) rot.textContent=list[i++%list.length]; }, 3000);
  const form = document.querySelector('#lead-form'); const status = document.querySelector('#form-status');
  if(form){ form.addEventListener('submit', async (e)=>{ e.preventDefault(); status.classList.remove('hidden'); status.textContent='Submitting…';
    const data = Object.fromEntries(new FormData(form).entries());
    try{ await new Promise(r=>setTimeout(r,800)); form.reset(); status.textContent='Thanks! A case specialist will contact you shortly.'; }
    catch(err){ status.textContent='Something went wrong. Please try again or call us.'; }
  });}
  const menuBtn = document.querySelector('#menu-btn'); const menu = document.querySelector('#menu'); if(menuBtn&&menu){ menuBtn.addEventListener('click',()=>menu.classList.toggle('hidden'));}
})();

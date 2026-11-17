const cards=document.querySelector('#cards'),search=document.querySelector('#search');
function render(){
 const q=search.value.trim().toLocaleLowerCase();cards.replaceChildren();let count=0;
 chapters.forEach((x,i)=>{if(!(x.join(' ')+' '+practices[i]).toLocaleLowerCase().includes(q))return;
 const a=document.createElement('a');a.className='card';a.href=`slides.html?lesson=${i+1}`;
 const label=document.createElement('span');label.textContent=x[1]+' / '+x[5];
 const title=document.createElement('h3');title.textContent=x[0];
 const summary=document.createElement('p');summary.textContent=x[2];
 const link=document.createElement('strong');link.textContent='閱讀簡報 →';
 a.append(label,title,summary,link);cards.append(a);count++;
 });document.querySelector('#count').textContent=count+' 個學習主題';document.querySelector('#empty').hidden=count>0;
}search.addEventListener('input',render);render();

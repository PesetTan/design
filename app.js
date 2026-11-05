const styles = window.designStyles;
const grid = document.querySelector('#cards');
const dialog = document.querySelector('#detail');
let activeFilter = 'All';
const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const safeURL = value => { try { const url = new URL(value, location.href); return ['https:', 'http:'].includes(url.protocol) ? url.href : '#'; } catch { return '#'; } };
const visualText = {swiss:'Aa',editorial:'Less, but better.<small>THE ART OF SIMPLICITY</small>',brutalist:'MAKE IT BOLD.',organic:'A softer form.',glass:'A clearer perspective.<b>Pure focus.</b>',retro:'FUTURE<br>FEELS<br>FAMILIAR.'};
function render() {
  const query = document.querySelector('#search').value.trim().toLowerCase();
  const filtered = styles.filter(s => (activeFilter === 'All' || s.category === activeFilter) && [s.name,s.description,s.category,...s.tags].join(' ').toLowerCase().includes(query));
  grid.innerHTML = filtered.map(s => `<article class="card"><div class="preview ${escapeHTML(s.preview)}" aria-hidden="true">${s.cover ? `<img src="${escapeHTML(safeURL(s.cover))}" alt="" style="width:100%;height:100%;object-fit:cover">` : `<span>${visualText[s.preview] || escapeHTML(s.name)}</span>${s.preview==='swiss'?'<small>FORM FOLLOWS FUNCTION</small>':''}`}</div><div class="card-body"><div class="card-top"><h2>${escapeHTML(s.name)}</h2><span class="number">${String(styles.indexOf(s)+1).padStart(2,'0')}</span></div><p>${escapeHTML(s.description)}</p><div class="tags">${s.tags.map(t=>`<span class="tag">${escapeHTML(t)}</span>`).join('')}</div><div class="card-bottom"><div class="swatches" aria-label="Color palette">${s.colors.map(c=>`<span class="swatch" style="background:${/^#[0-9a-f]{6}$/i.test(c)?c:'#ddd'}" title="${escapeHTML(c)}"></span>`).join('')}</div><button class="details-link" data-id="${escapeHTML(s.id)}">Explore style <span aria-hidden="true">↗</span></button></div><p class="starter">${s.references.length ? `${s.references.length} reference${s.references.length===1?'':'s'} · ${s.artifacts.length} artifacts` : 'Starter direction · references to come'}</p></div></article>`).join('');
  document.querySelector('#empty').hidden = filtered.length > 0;
  document.querySelector('#total').textContent = `(${styles.length.toString().padStart(2,'0')})`;
}
function showDetail(id) {
  const s = styles.find(s=>s.id===id);
  if (!s) return;
  document.querySelector('#detail-content').innerHTML = `<h2 id="dialog-title" class="dialog-title">${escapeHTML(s.name)}</h2><p class="detail-description">${escapeHTML(s.description)}</p><section class="detail-section"><h3>Palette</h3><div class="palette">${s.colors.map(c=>`<span class="palette-color"><i style="background:${/^#[0-9a-f]{6}$/i.test(c)?c:'#ddd'}"></i>${escapeHTML(c)}</span>`).join('')}</div><h3>Typography</h3><p>${escapeHTML(s.typography)}</p></section><section class="detail-section"><h3>Design principles</h3><ul>${s.principles.map(p=>`<li>${escapeHTML(p)}</li>`).join('')}</ul></section><section class="detail-section"><h3>Source references</h3>${s.references.length?`<ul>${s.references.map(r=>`<li><a href="${escapeHTML(safeURL(r.url))}" target="_blank" rel="noopener noreferrer">${escapeHTML(r.title)}</a>${r.note?` — ${escapeHTML(r.note)}`:''}</li>`).join('')}</ul>`:'<p class="placeholder">No sources added yet. Add websites, image references, and attribution here.</p>'}</section><section class="detail-section"><h3>Style artifacts</h3>${s.artifacts.length?`<ul>${s.artifacts.map(a=>`<li><a href="${escapeHTML(safeURL(a.url))}" target="_blank" rel="noopener noreferrer">${escapeHTML(a.title)}</a>${a.note?` — ${escapeHTML(a.note)}`:''}</li>`).join('')}</ul>`:'<p class="placeholder">Ready to develop: palette & tokens, type specimen, components, layout example, and usage notes.</p>'}</section><button class="brief-button" id="copy-brief">Copy artifact brief</button><span class="copy-status" role="status" id="copy-status"></span>`;
  dialog.setAttribute('aria-labelledby','dialog-title');
  document.querySelector('#copy-brief').addEventListener('click',async()=>{
    const brief = `Develop a reusable design style kit for "${s.name}".\n\nDirection: ${s.description}\nPalette: ${s.colors.join(', ')}\nTypography: ${s.typography}\nPrinciples:\n${s.principles.map(p=>'- '+p).join('\n')}\n\nSource references:\n${s.references.length?s.references.map(r=>`${r.title}: ${r.url}${r.note?' — '+r.note:''}`).join('\n'):'No source references supplied yet. Request references before claiming to reproduce a particular source.'}\n\nCreate: 1. Design tokens (CSS variables and JSON). 2. Typography specimen. 3. Buttons, inputs, and cards with interaction states. 4. Responsive layout example. 5. Usage guidelines and source attribution.\n\nStore files in assets/${s.id}/. Update this style in styles.js with reference links, artifact links, and an optional cover image. Preserve the library layout. Distinguish source observations from your own interpretation.`;
    try {await navigator.clipboard.writeText(brief);document.querySelector('#copy-status').textContent='Brief copied';}catch{document.querySelector('#copy-status').textContent='Clipboard unavailable. Use the brief in README.md.';}
  });
  dialog.showModal();
}
grid.addEventListener('click',e=>{const button=e.target.closest('[data-id]');if(button) showDetail(button.dataset.id);});
document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{activeFilter=button.dataset.filter;document.querySelectorAll('.filter').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});render();}));
document.querySelector('#search').addEventListener('input',render);
document.querySelector('#close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
document.querySelector('#year').textContent = new Date().getFullYear();
render();

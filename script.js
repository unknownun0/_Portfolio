const siteState = loadState();

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
const formatted = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

const renderHero = () => {
  const h = siteState.hero || {};
  const set = (id, html) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  };
  set('hero-eyebrow', esc(h.eyebrow || ''));
  set('hero-title', (h.titleLines || []).map((l) => `<span class="line"><span>${esc(l)}</span></span>`).join(''));
  set('hero-sub', formatted(h.lead || ''));
  set('portfolio-est', esc(h.estTag || ''));
  const img = document.getElementById('portrait-img');
  if (img && h.portrait) img.src = h.portrait;
  const vp = document.getElementById('view-projects-btn');
  if (vp && h.viewProjectsLabel) vp.innerHTML = esc(h.viewProjectsLabel);
  const dl = document.getElementById('resume-download-btn');
  if (dl && h.resumeLabel) dl.innerHTML = esc(h.resumeLabel);
  if (dl && h.resumeUrl) dl.href = h.resumeUrl;
};

const renderAbout = () => {
  const a = siteState.about || {};
  const text = (a.paragraphs || []).map((p) => `<p>${formatted(p)}</p>`).join('');
  const stats = (a.stats || [])
    .map((s) => `<div class="stat"><div class="num">${esc(s.num)}</div><div class="lbl">${esc(s.lbl)}</div></div>`)
    .join('');
  const el = document.getElementById('about-text');
  if (el) el.innerHTML = text + `<div class="stat-row">${stats}</div>`;
};

const renderSkills = () => {
  const cols = (siteState.skills || [])
    .map(
      (c) => `
      <div class="skill-cat">
        <h4>${esc(c.cat)}</h4>
        <div class="tag-list">
          ${(c.items || []).map((t) => `<span class="tag">${esc(t)}</span>`).join('')}
        </div>
      </div>`
    )
    .join('');
  const el = document.getElementById('skill-cols');
  if (el) el.innerHTML = cols;
};

const renderProjects = () => {
  const cards = (siteState.projects || [])
    .map(
      (p) => `
      <article class="proj-card">
        <div class="proj-top"><span class="proj-id">SYS / ${esc(p.id)}</span><span class="proj-role">${esc(p.role)}</span></div>
        <h3>${formatted(p.title)}</h3>
        <p class="proj-desc">${formatted(p.desc)}</p>
        <ul class="proj-points">
          ${(p.bullets || []).map((b) => `<li>${formatted(b)}</li>`).join('')}
        </ul>
        <div class="proj-stack">${(p.stack || []).map((t) => `<span>${esc(t)}</span>`).join('')}</div>
      </article>`
    )
    .join('');
  const el = document.getElementById('projTrack');
  if (el) el.innerHTML = cards;
  const total = document.getElementById('projTotal');
  if (total) total.textContent = String((siteState.projects || []).length).padStart(2, '0');
};

const renderCerts = () => {
  const cards = (siteState.certifications || [])
    .map(
      (c) => `
      <article class="cert-card">
        <img class="cert-img" src="${esc(c.image)}" alt="${esc(c.name)} certificate" />
        <h4>${formatted(c.name)}</h4>
        <span class="cert-issuer">${esc(c.issuer)}</span>
        <a class="cert-link" href="${esc(c.link)}" target="_blank" rel="noopener">View credential <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M7 7h10v10"/></svg></a>
      </article>`
    )
    .join('');
  const el = document.getElementById('certTrack');
  if (el) el.innerHTML = cards;
  const total = document.getElementById('certTotal');
  if (total) total.textContent = String((siteState.certifications || []).length).padStart(2, '0');
};

const renderExperience = () => {
  const items = (siteState.experience || [])
    .map(
      (x, i) => `
      <div class="tl-item${i === 0 ? ' active' : ''}">
        <div class="tl-head"><h3>${formatted(x.title)}</h3><span>${esc(x.date)}</span></div>
        <span class="tl-org">${esc(x.org)}</span>
        <ul>
          ${(x.bullets || []).map((b) => `<li>${formatted(b)}</li>`).join('')}
        </ul>
      </div>`
    )
    .join('');
  const el = document.getElementById('timeline');
  if (el) el.innerHTML = items;
};

const renderEducation = () => {
  const cards = (siteState.education || [])
    .map(
      (e) => `
      <div class="edu-card">
        <span class="edu-year">${esc(e.years)}</span>
        <h4>${formatted(e.school)}</h4>
        <p>${formatted(e.degree)}</p>
      </div>`
    )
    .join('');
  const el = document.getElementById('edu-grid');
  if (el) el.innerHTML = cards;
};

const renderContact = () => {
  const c = siteState.contact || {};
  const cta = document.getElementById('contact-cta');
  if (cta) {
    cta.href = `mailto:${esc(c.email)}`;
    cta.innerHTML = (c.ctaLines || []).map((l) => esc(l)).join('<br>');
  }
  const emailLink = document.getElementById('emailLink');
  if (emailLink) {
    emailLink.href = `mailto:${esc(c.email)}`;
    emailLink.textContent = c.email;
    emailLink.dataset.email = c.email;
  }
  const phone = document.getElementById('phone-link');
  if (phone) {
    phone.href = `tel:${esc(c.phoneLink)}`;
    phone.textContent = c.phone;
  }
  const loc = document.getElementById('location-span');
  if (loc) loc.textContent = c.location;
  const sayHello = document.getElementById('say-hello');
  if (sayHello) sayHello.href = `mailto:${esc(c.email)}`;
  const footBrand = document.getElementById('foot-brand');
  if (footBrand && siteState.footer) footBrand.textContent = siteState.footer.brand;
  const footNote = document.getElementById('foot-note');
  if (footNote && siteState.footer) footNote.textContent = siteState.footer.note;
};

const renderSite = () => {
  renderHero();
  renderAbout();
  renderSkills();
  renderProjects();
  renderCerts();
  renderExperience();
  renderEducation();
  renderContact();
};

renderSite();
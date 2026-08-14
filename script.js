const state = loadState();

const escapeHtml = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const imageBlock = (src, alt, fallbackText, heightClass) =>
  src
    ? `
      <div class="mb-4 overflow-hidden rounded-md border" style="border-color:var(--border);">
        <img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" class="${heightClass} w-full object-cover" loading="lazy">
      </div>
    `
    : `
      <div class="mb-4 ${heightClass} rounded-md border flex items-center justify-center text-center px-4" style="border-color:var(--border); color:var(--fg-mute);">
        <span class="font-mono text-xs">${escapeHtml(fallbackText)}</span>
      </div>
    `;

const videoEmbed = (video, image, title) => {
  const src = String(video || '').trim();
  if (!src) return '';
  const yt = src.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/);
  const frame = yt
    ? `<iframe src="https://www.youtube.com/embed/${escapeHtml(yt[1])}" title="${escapeHtml(title + ' video')}" class="h-48 w-full" allowfullscreen loading="lazy"></iframe>`
    : `<video src="${escapeHtml(src)}" poster="${escapeHtml(image || '')}" controls preload="metadata" class="h-48 w-full object-cover"></video>`;
  return `<div class="mb-4 overflow-hidden rounded-md border" style="border-color:var(--border);">${frame}</div>`;
};

const projectLinks = (p) => {
  const parts = [];
  if (p.link) parts.push(`<a href="${escapeHtml(p.link)}" target="_blank" rel="noopener" class="pill">LIVE ↗</a>`);
  if (p.github) parts.push(`<a href="${escapeHtml(p.github)}" target="_blank" rel="noopener" class="pill">GITHUB ↗</a>`);
  return parts.join('');
};

const render = () => {
  document.getElementById('project-grid').innerHTML = state.projects
    .map((p) => `
      <article class="carousel-card glow-border ticks p-6 flex flex-col" style="background:var(--bg-elev);">
        ${p.video ? videoEmbed(p.video, p.image, p.title) : imageBlock(p.image, p.title + ' preview', 'Add an image path in admin JSON', 'h-48')}
        <div class="flex items-center justify-between mb-4">
          <span class="font-mono text-[11px] tracking-widest px-2 py-1" style="color:var(--fg-mute); border:1px solid var(--border);">[ PROJECT_ID: ${escapeHtml(p.id)} ]</span>
        </div>
        <h3 class="font-display text-xl md:text-2xl leading-snug mb-1">${escapeHtml(p.title)}</h3>
        <p class="font-mono text-xs mb-4" style="color:var(--fg-mute);">${escapeHtml(p.role)}</p>
        <ul class="space-y-2 mb-5 flex-1">
          ${p.bullets.map((b) => `<li class="text-sm leading-relaxed flex gap-2" style="color:var(--fg-dim);"><span style="color:var(--fg-mute);">›</span><span>${escapeHtml(b)}</span></li>`).join('')}
        </ul>
        <div class="flex flex-wrap gap-2">
          ${p.tags.map((t) => `<span class="pill">${escapeHtml(t)}</span>`).join('')}
        </div>
        <div class="mt-5 flex flex-wrap gap-2">${projectLinks(p)}</div>
      </article>
    `)
    .join('');

  document.getElementById('cert-grid').innerHTML = state.certifications
    .map((c) => `
      <div class="glow-border ticks p-6 flex flex-col justify-between" style="background:var(--bg-elev);">
        ${imageBlock(c.image, c.name + ' certificate preview', 'Add a certificate image path in admin JSON', 'h-40')}
        <div>
          <p class="font-mono text-[11px] mb-3" style="color:var(--fg-mute);">[ CREDENTIAL ]</p>
          <h3 class="font-display text-lg leading-snug mb-1">${escapeHtml(c.name)}</h3>
          <p class="font-mono text-xs" style="color:var(--fg-mute);">${escapeHtml(c.issuer)}</p>
        </div>
        <a href="${escapeHtml(c.link)}" target="_blank" rel="noopener" class="mt-6 inline-flex items-center gap-2 font-mono text-xs glow-border px-3 py-2 w-fit" style="color:var(--fg-dim);">
          VERIFY <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M7 7h10v10"/></svg>
        </a>
      </div>
    `)
    .join('');

  document.getElementById('skills-grid').innerHTML = state.skills
    .map((s) => `
      <div class="skills-card glow-border ticks p-6 h-full" style="background:var(--bg-elev);">
        <p class="font-mono text-xs tracking-widest mb-3 pb-2" style="color:var(--fg-mute); border-bottom:1px solid var(--border);">${escapeHtml(s.cat.toUpperCase())}</p>
        <div class="flex flex-wrap gap-2">
          ${s.items.map((i) => `<span class="pill">${escapeHtml(i)}</span>`).join('')}
        </div>
      </div>
    `)
    .join('');

  document.getElementById('timeline').innerHTML = `
    <div class="absolute left-0 top-2 bottom-2 w-px timeline-line"></div>
    ${state.experience
      .map((e) => `
        <div class="relative pb-14 last:pb-0">
          <span class="absolute -left-8 md:-left-10 top-1.5 w-2.5 h-2.5 rounded-full" style="background:var(--fg); box-shadow:0 0 0 3px var(--bg), 0 0 0 4px var(--border);"></span>
          <p class="font-mono text-xs mb-2" style="color:var(--fg-mute);">${escapeHtml(e.date)}</p>
          <h3 class="font-display text-xl md:text-2xl mb-1">${escapeHtml(e.title)}</h3>
          <p class="font-mono text-xs mb-4" style="color:var(--fg-dim);">${escapeHtml(e.org)}</p>
          <ul class="space-y-2 max-w-2xl">
            ${e.bullets.map((b) => `<li class="text-sm leading-relaxed flex gap-2" style="color:var(--fg-dim);"><span style="color:var(--fg-mute);">›</span><span>${escapeHtml(b)}</span></li>`).join('')}
          </ul>
        </div>
      `)
      .join('')}
  `;

  document.getElementById('education-grid').innerHTML = state.education
    .map((ed) => `
      <div class="glow-border ticks p-6" style="background:var(--bg-elev);">
        <p class="font-mono text-[11px] mb-3" style="color:var(--fg-mute);">[ RECORD ]</p>
        <h3 class="font-display text-lg leading-snug mb-2">${escapeHtml(ed.school)}</h3>
        <p class="text-sm mb-3" style="color:var(--fg-dim);">${escapeHtml(ed.degree)}</p>
        <p class="font-mono text-xs" style="color:var(--fg-mute);">${escapeHtml(ed.years)}</p>
      </div>
    `)
    .join('');
};

const bootHudReadout = () => {
  const hudLines = ['CORE ......... OK', 'RENDER ....... OK', 'NETWORK ...... OK', 'PORTFOLIO .... LOADED'];
  const hudReadoutEl = document.getElementById('hud-readout');
  if (!hudReadoutEl) return;
  hudLines.forEach((line, i) => {
    setTimeout(() => {
      const p = document.createElement('p');
      p.textContent = line;
      p.style.opacity = '0';
      p.style.transition = 'opacity .35s ease';
      hudReadoutEl.appendChild(p);
      requestAnimationFrame(() => {
        p.style.opacity = '1';
      });
    }, i * 260);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  const hudImageEl = document.getElementById('hud-image');
  if (hudImageEl) {
    hudImageEl.innerHTML = `
      <img
        src="./1.png"
        alt="HUD image"
        class="hud-image h-full w-full object-cover portrait-cutout"
        loading="lazy"
      >
    `;
  }

  render();
  bootHudReadout();

  const root = document.documentElement;
  const themeBtn = document.getElementById('theme-toggle');
  const themeLabel = document.getElementById('theme-label');

  themeBtn.addEventListener('click', () => {
    const isLight = root.classList.toggle('light');
    root.classList.toggle('dark', !isLight);
    themeLabel.textContent = isLight ? '[ LIGHT ]' : '[ DARK ]';
  });

  document.getElementById('back-to-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  const carousel = document.getElementById('project-grid');
  const carouselPrev = document.getElementById('carousel-prev');
  const carouselNext = document.getElementById('carousel-next');
  const carouselStep = () => {
    const card = carousel.querySelector('.carousel-card');
    return card ? card.offsetWidth + 20 : carousel.clientWidth * 0.8;
  };
  carouselPrev.addEventListener('click', () => carousel.scrollBy({ left: -carouselStep(), behavior: 'smooth' }));
  carouselNext.addEventListener('click', () => carousel.scrollBy({ left: carouselStep(), behavior: 'smooth' }));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
});

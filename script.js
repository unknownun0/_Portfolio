// ---------- DATA ----------
const projects = [
  {
    id: '01',
    title: 'Heritage Park Taguig Management System',
    role: 'Full-Stack Developer',
    image: 'D:\\xampp\\_Portfolio\\Screenshot 2026-07-15 132524.png',
    tags: ['PHP', 'JavaScript', 'MySQL', 'Tailwind CSS'],
    bullets: [
      'Architected and developed a full-stack web application using PHP, JavaScript, and MySQL to streamline park operations and record management.',
      'Designed a responsive frontend interface with Tailwind CSS, ensuring optimal viewing across desktop and mobile devices.',
      'Implemented backend logic for database management, data retrieval, and secure user interactions.',
    ],
  },
  {
    id: '02',
    title: 'Student Health Record (SHR) & Admin Analytics System',
    role: 'Full-Stack Developer',
    image: 'D:\\xampp\\_Portfolio\\Screenshot 2026-06-09 092009.png',
    tags: ['PHP', 'MySQL', 'JavaScript', 'Tailwind CSS', 'UI/UX'],
    bullets: [
      'Designed and built an interactive analytics dashboard interface using Tailwind CSS, JavaScript, and institutional color branding.',
      'Configured backend database routes in PHP/MySQL to pull dynamic metrics for system administrators and medical staff.',
      'Integrated role-based documentation workflows and system security access practices.',
    ],
  },
  {
    id: '03',
    title: 'Online Booking System (Roma Bus)',
    role: 'Full-Stack Developer',
    image: 'D:\\xampp\\_Portfolio\\2.png',
    tags: ['PHP', 'MySQL', 'XAMPP', 'AI Chatbot', 'Analytics'],
    bullets: [
      'Developed a web-based bus booking platform enabling travelers to view real-time bus availability, schedules, driver details, and locations.',
      'Integrated an AI chatbot to provide automated, real-time responses regarding bus schedules, fares, and bus types.',
      'Built a sales analytics dashboard featuring dynamic data charts, moving averages, printable receipts, and automated email notifications.',
    ],
  },
  {
    id: '04',
    title: 'Online Grading Management System AZGH College Inc.',
    role: 'Full-Stack Developer',
    image: '',
    tags: ['PHP', 'XAMPP', 'HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript'],
    bullets: [
      'Built a web-based grading system to automate grade computation across Performance Tasks, Written Works, and Examinations.',
      'Automated email notifications sent directly to students upon grade posting by administrators.',
      'Designed an accessible, user-friendly frontend interface using HTML5, CSS3, Tailwind CSS, and JavaScript.',
    ],
  },
];

const certifications = [
  {
    name: 'Python',
    issuer: 'freeCodeCamp',
    link: 'https://freecodecamp.org/certification/fccaada7d45-00a6-4feb-a757-d51238c2ebea/python-v9',
    image: 'D:\\xampp\\_Portfolio\\cert3.png',
  },
  {
    name: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    link: 'https://freecodecamp.org/certification/fccaada7d45-00a6-4feb-a757-d51238c2ebea/responsive-web-design-v9',
    image: 'D:\\xampp\\_Portfolio\\cert1.png',
  },
  {
    name: 'JavaScript Algorithms and Data Structures',
    issuer: 'freeCodeCamp',
    link: 'https://freecodecamp.org/certification/fccaada7d45-00a6-4feb-a757-d51238c2ebea/javascript-v9',
    image: 'D:\\xampp\\_Portfolio\\cert4.png',
  },
];

const skills = [
  { cat: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Next.js', 'Tailwind CSS', 'Styled Components', 'Webpack', 'Responsive Design'] },
  { cat: 'Backend & Databases', items: ['PHP', 'Node.js', 'Express.js', 'NestJS', 'Laravel', 'Python', 'Java', 'FastAPI', 'MySQL', 'XAMPP'] },
  { cat: 'AI & API Integration', items: ['RESTful APIs', 'API Integration', 'AI Chatbot Integration', 'OpenAI API', 'LangChain', 'TensorFlow', 'PyTorch'] },
  { cat: 'Tools & Workflow', items: ['Git', 'GitHub', 'GitLab', 'VS Code', 'PyCharm', 'Browser DevTools', 'Prettier'] },
  { cat: 'CMS & No-Code', items: ['WordPress', 'Webflow', 'Bubble', 'Microsoft Power Platform'] },
  { cat: 'Design & Multimedia', items: ['UI/UX Fundamentals', 'Graphic Design (Canva, Photoshop)', 'Video Editing (CapCut, Premiere)'] },
  { cat: 'QA & Strategy', items: ['System Debugging', 'Testing', 'Code Optimization', 'Social Media Strategy', 'Digital Marketing'] },
  { cat: 'Interpersonal & Ops', items: ['Multitasking Under Pressure', 'Customer Service', 'Event Promotion'] },
];

const experience = [
  {
    title: 'Web Development Engineer Intern',
    org: 'St. Dominic College of Asia    ICT Department',
    date: 'Feb 2026    Apr 2026',
    bullets: [
      'Developed and maintained frontend web application components using HTML5, Tailwind CSS, JavaScript, and PHP.',
      'Integrated system APIs and assisted in database management tasks using MySQL.',
      'Collaborated on technical documentation, including user guide manuals and system flow charts.',
      'Conducted system debugging and performance testing across multiple device viewports to ensure responsive design compliance.',
    ],
  },
  {
    title: 'Club Promoter & Host',
    org: 'Various Venues (Quezon City, PoblaciÃ³n, Malate)',
    date: '2024    2025',
    bullets: [
      'Promoted nightlife events and hosted club programs, directly enhancing event turnout and guest experience.',
      'Managed audience engagement and marketing campaigns across multiple social media platforms.',
    ],
  },
  {
    title: 'Social Media Editor',
    org: 'JE Consumer Goods and Trading',
    date: '2023',
    bullets: [
      'Created publication materials and executed social media content strategies.',
      'Scaled company social media following from 10,000 to 25,000 within 3 months through high-converting product posts.',
    ],
  },
  {
    title: 'Barista / Graphic Designer',
    org: "Bimbo's Coffee Shop, Las PiÃ±as",
    date: '2022    2023',
    bullets: [
      'Promoted from Barista to Graphic Designer to lead product visual identity and promotional campaigns.',
      'Designed posters, digital graphics, and video marketing content that elevated brand visibility and customer retention.',
      'Managed counter operations and customer service during peak operational hours.',
    ],
  },
];

const education = [
  { school: 'Dr. Filemon C. Aguilar Memorial College, Las PiÃ±as', degree: 'B.S. Information Systems (BSIS)', years: '2022    2026' },
  { school: 'Zarate College', degree: 'Senior High School Graduate', years: '2020    2022' },
  { school: 'Captain Albert Aguilar National High School', degree: 'High School Graduate', years: '2016    2020' },
];

const hudImagePrimary = 'images/profilew.jpg';
const hudImageFallback = '2.png';

// ---------- RENDER ----------
const escapeHtml = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

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

const hudImageEl = document.getElementById('hud-image');
if (hudImageEl) {
  hudImageEl.innerHTML = `
    <img
      src="${escapeHtml(hudImagePrimary)}"
      alt="HUD image"
      class="hud-image h-full w-full object-cover"
      loading="lazy"
    >
  `;

  const hudImg = hudImageEl.querySelector('.hud-image');
  const showHudImageError = () => {
    hudImageEl.innerHTML = `
      <div class="flex h-full w-full items-center justify-center px-4 text-center">
        <span class="font-mono text-[10px]" style="color:var(--fg-mute);">
          Image failed to load. Check the path or use a file inside the project folder.
        </span>
      </div>
    `;
  };

  hudImg.addEventListener('error', () => {
    if (hudImg.src.endsWith(hudImageFallback)) {
      showHudImageError();
      return;
    }
    hudImg.src = hudImageFallback;
  });
}

document.getElementById('project-grid').innerHTML = projects
  .map((p) => `
    <article class="glow-border ticks p-6 flex flex-col" style="background:var(--bg-elev);">
      ${imageBlock(p.image, p.title + ' preview', 'Add an image path in script.js', 'h-48')}
      <div class="flex items-center justify-between mb-4">
        <span class="font-mono text-[11px] tracking-widest px-2 py-1" style="color:var(--fg-mute); border:1px solid var(--border);">[ PROJECT_ID: ${p.id} ]</span>
      </div>
      <h3 class="font-display text-xl md:text-2xl leading-snug mb-1">${escapeHtml(p.title)}</h3>
      <p class="font-mono text-xs mb-4" style="color:var(--fg-mute);">${escapeHtml(p.role)}</p>
      <ul class="space-y-2 mb-5 flex-1">
        ${p.bullets.map((b) => `<li class="text-sm leading-relaxed flex gap-2" style="color:var(--fg-dim);"><span style="color:var(--fg-mute);">›</span><span>${escapeHtml(b)}</span></li>`).join('')}
      </ul>
      <div class="flex flex-wrap gap-2">
        ${p.tags.map((t) => `<span class="pill">${escapeHtml(t)}</span>`).join('')}
      </div>
    </article>
  `)
  .join('');

document.getElementById('cert-grid').innerHTML = certifications
  .map((c) => `
    <div class="glow-border ticks p-6 flex flex-col justify-between" style="background:var(--bg-elev);">
      ${imageBlock(c.image, c.name + ' certificate preview', 'Add a certificate image path in script.js', 'h-40')}
      <div>
        <p class="font-mono text-[11px] mb-3" style="color:var(--fg-mute);">[ CREDENTIAL ]</p>
        <h3 class="font-display text-lg leading-snug mb-1">${escapeHtml(c.name)}</h3>
        <p class="font-mono text-xs" style="color:var(--fg-mute);">${escapeHtml(c.issuer)}</p>
      </div>
      <a href="${c.link}" target="_blank" rel="noopener" class="mt-6 inline-flex items-center gap-2 font-mono text-xs glow-border px-3 py-2 w-fit" style="color:var(--fg-dim);">
        VERIFY <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M7 7h10v10"/></svg>
      </a>
    </div>
  `)
  .join('');

document.getElementById('skills-grid').innerHTML = skills
  .map((s) => `
    <div>
      <p class="font-mono text-xs tracking-widest mb-3 pb-2" style="color:var(--fg-mute); border-bottom:1px solid var(--border);">${escapeHtml(s.cat.toUpperCase())}</p>
      <div class="flex flex-wrap gap-2">
        ${s.items.map((i) => `<span class="pill">${escapeHtml(i)}</span>`).join('')}
      </div>
    </div>
  `)
  .join('');

document.getElementById('timeline').innerHTML += experience
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
  .join('');

document.getElementById('education-grid').innerHTML = education
  .map((ed) => `
    <div class="glow-border ticks p-6" style="background:var(--bg-elev);">
      <p class="font-mono text-[11px] mb-3" style="color:var(--fg-mute);">[ RECORD ]</p>
      <h3 class="font-display text-lg leading-snug mb-2">${escapeHtml(ed.school)}</h3>
      <p class="text-sm mb-3" style="color:var(--fg-dim);">${escapeHtml(ed.degree)}</p>
      <p class="font-mono text-xs" style="color:var(--fg-mute);">${escapeHtml(ed.years)}</p>
    </div>
  `)
  .join('');

// HUD readout boot sequence
const hudLines = ['CORE ......... OK', 'RENDER ....... OK', 'NETWORK ...... OK', 'PORTFOLIO .... LOADED'];
const hudReadoutEl = document.getElementById('hud-readout');
hudLines.forEach((line, i) => {
  setTimeout(() => {
    const p = document.createElement('p');
    p.textContent = line;
    p.style.opacity = '0';
    p.style.transition = 'opacity .35s ease';
    hudReadoutEl.appendChild(p);
    requestAnimationFrame(() => { p.style.opacity = '1'; });
  }, i * 260);
});

// Theme toggle (in-memory only; no storage APIs per artifact constraints)
const root = document.documentElement;
const themeBtn = document.getElementById('theme-toggle');
const themeLabel = document.getElementById('theme-label');
themeBtn.addEventListener('click', () => {
  const isLight = root.classList.toggle('light');
  root.classList.toggle('dark', !isLight);
  themeLabel.textContent = isLight ? '[ LIGHT ]' : '[ DARK ]';
});

// Back to top
document.getElementById('back-to-top').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Scroll reveal
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

const syncHudImageMode = () => {
  const img = document.querySelector('.hud-image');
  if (!img) return;
  const isLight = document.documentElement.classList.contains('light');
  img.style.filter = isLight
    ? 'grayscale(0.08) contrast(1.02) brightness(0.94) saturate(0.92)'
    : 'grayscale(0.12) contrast(1.08) brightness(0.88) saturate(0.88)';
};

syncHudImageMode();
themeBtn.addEventListener('click', () => {
  requestAnimationFrame(syncHudImageMode);
});

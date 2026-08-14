let adminUnlocked = false;

const setStatus = (message, isError = false) => {
  const statusEl = document.getElementById('admin-status');
  if (!statusEl) return;
  statusEl.textContent = message;
  statusEl.style.color = isError ? 'var(--fg)' : 'var(--fg-mute)';
};

document.addEventListener('DOMContentLoaded', () => {
  let state = loadState();

  const root = document.documentElement;
  const themeBtn = document.getElementById('theme-toggle');
  const themeLabel = document.getElementById('theme-label');
  const adminLogin = document.getElementById('admin-login');
  const adminEditor = document.getElementById('admin-editor');
  const adminLoginBtn = document.getElementById('admin-login-btn');
  const adminSaveBtn = document.getElementById('admin-save-btn');
  const adminExportBtn = document.getElementById('admin-export-btn');
  const adminCopyBtn = document.getElementById('admin-copy-btn');
  const adminResetBtn = document.getElementById('admin-reset-btn');
  const adminJson = document.getElementById('admin-json');
  const adminUser = document.getElementById('admin-user');
  const adminPass = document.getElementById('admin-pass');

  themeBtn.addEventListener('click', () => {
    const isLight = root.classList.toggle('light');
    root.classList.toggle('dark', !isLight);
    themeLabel.textContent = isLight ? '[ LIGHT ]' : '[ DARK ]';
  });

  adminLoginBtn.addEventListener('click', () => {
    if (adminUser.value === ADMIN_USER && adminPass.value === ADMIN_PASS) {
      adminUnlocked = true;
      adminLogin.classList.add('hidden');
      adminEditor.classList.remove('hidden');
      adminJson.value = getJsonForEditor(state);
      setStatus('Logged in. Edit the JSON and save when ready.');
    } else {
      setStatus('Invalid username or password.', true);
    }
  });

  adminSaveBtn.addEventListener('click', () => {
    try {
      const nextState = JSON.parse(adminJson.value);
      state = {
        ...deepClone(defaultState),
        ...nextState,
      };
      saveState(state);
      setStatus('Saved and re-rendered successfully.');
    } catch (error) {
      setStatus(`Save failed: ${error.message}`, true);
    }
  });

  adminExportBtn.addEventListener('click', () => {
    const blob = new Blob([getJsonForEditor(state)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'portfolio-state.json';
    a.click();
    URL.revokeObjectURL(url);
    setStatus('Exported JSON file.');
  });

  adminCopyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(getJsonForEditor(state));
      setStatus('JSON copied to clipboard.');
    } catch {
      setStatus('Clipboard copy failed. Your browser may block it.', true);
    }
  });

  adminResetBtn.addEventListener('click', () => {
    state = deepClone(defaultState);
    localStorage.removeItem(STORAGE_KEY);
    if (adminUnlocked) {
      adminJson.value = getJsonForEditor(state);
    }
    setStatus('Data reset to defaults.');
  });
});

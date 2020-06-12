var toggle = document.getElementById("night-mode-toggle");
var currentMode = toggle.dataset.currentMode;
var nightTheme = document.getElementById("night-mode-theme");
var nightIcon = `<svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
var lightIcon = `<svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;

toggle.addEventListener("click", () => {
  if (toggle.dataset.currentMode === "light") {
    setTheme("night");
  } else if (toggle.dataset.currentMode === "night") {
    setTheme("light");
  }
});

// the default theme is light
var savedTheme = localStorage.getItem("night-mode-storage") || "light";
setTheme(savedTheme);

function setTheme(mode) {
  localStorage.setItem("night-mode-storage", mode);

  if (mode === "night") {
    nightTheme.disabled = false;
    toggle.dataset.currentMode = "night";
    toggle.innerHTML = lightIcon;
  } else if (mode === "light") {
    nightTheme.disabled = true;
    toggle.dataset.currentMode = "light";
    toggle.innerHTML = nightIcon;
  }
}

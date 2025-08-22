//make sure infobox retains the theme
const themeToggle = document.getElementById('themeToggle');

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('theme', theme);
}

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  setTheme(current === 'light' ? 'dark' : 'light');
});
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  setTheme(savedTheme);
}

// -------- Infobox logic below --------

const builds = [
  {
    name: "Windows 7 Build 7000",
    description: "This is a build of Windows 7",
    wiki: "https://BetaCity.github.io/wiki/Windows_7_Build_7000.html",
    page: "https://BetaCity.github.io/downloads/Windows-7/Beta.html"
  },
  {
    name: "Windows Whistler Build 2428",
    description: "this is a test will update later",
    wiki: "https://example.com/wiki/mystery-edition",
    page: "https://example.com/builds/mystery-edition"
  },
  {
    name: "test test test",
    description: "this is yet another test",
    wiki: "https://example.com/wiki/beta-v2-0",
    page: "https://example.com/builds/beta-v2-0"
  }
];

function showRandomBuild() {
  const infobox = document.getElementById('infobox');
  const randomBuild = builds[Math.floor(Math.random() * builds.length)];

  infobox.innerHTML = `
    <h3>${randomBuild.name}</h3>
    <p>${randomBuild.description}</p>
    <div style="display: flex; gap: 0.5rem;">
      <a href="${randomBuild.wiki}" target="_blank" class="btn">Wiki Page</a>
      <a href="${randomBuild.page}" target="_blank" class="btn">Build Page</a>
    </div>
  `;
}

showRandomBuild();

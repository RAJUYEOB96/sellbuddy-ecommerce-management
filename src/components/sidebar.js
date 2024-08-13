document.addEventListener('DOMContentLoaded', () => {
  const sidebarHTML = `
  <nav class="sidebar-navigation">
    <h1 id="none">사이드바</h1>
    <ul>
      <h2 id="none">Main</h2>
      <a href="/src/pages/main/main.html">
        <li>
          <i class="fa-sharp-duotone fa-solid fa-house"></i>
          <span class="tooltip">Main</span>
        </li>
      </a>
      <a href="/src/pages/sales/sales.html">
        <h2 id="none">Sales</h2>
        <li>
          <i class="fa-sharp-duotone fa-solid fa-comments-dollar"></i>
          <span class="tooltip">Sales</span>
        </li>
      </a>
      <a href="/src/pages/analysis/main/analysis.html">
        <h2 id="none">Analysis</h2>
        <li>
          <i class="fa-solid fa-magnifying-glass-chart"></i>
          <span class="tooltip">Analysis</span>
        </li>
      </a>
    </ul>
  </nav>`;

  // 사이드바 삽입
  document.body.insertAdjacentHTML('afterbegin', sidebarHTML);
});

module.exports = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>AutoDrive — Auto Automation</title>
  <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;600;800&family=Lora:ital,wght@0,400;1,300&display=swap" rel="stylesheet"/>
  <style>
    /* ── Reset & Variables ─────────────────────── */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --bg:      #f4f1ec;
      --dark:    #181614;
      --accent:  #c0392b;
      --text:    #2c2825;
      --muted:   #8c8075;
      --line:    rgba(44,40,37,0.12);
    }

    html, body {
      height: 100%;
      background: var(--bg);
      color: var(--text);
      font-family: 'Lora', Georgia, serif;
    }

    body::before {
      content: '';
      position: fixed; inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23g)' opacity='0.035'/%3E%3C/svg%3E");
      pointer-events: none;
      z-index: 100;
    }

    .page {
      min-height: 100vh;
      display: grid;
      grid-template-rows: auto 1fr auto;
    }

    /* ── Nav ── */
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 28px 64px;
      border-bottom: 1px solid var(--line);
      animation: fadeDown 0.7s ease both;
    }
    .logo {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 800;
      font-size: 1.45rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--dark);
    }
    .logo span { color: var(--accent); }
    .nav-right { display: flex; gap: 40px; align-items: center; }
    .nav-right a {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 600;
      font-size: 0.78rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--muted);
      text-decoration: none;
      transition: color 0.2s;
    }
    .nav-right a:hover { color: var(--text); }
    .nav-btn {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 600;
      font-size: 0.78rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      background: var(--dark);
      color: var(--bg);
      border: none;
      padding: 10px 26px;
      cursor: pointer;
      transition: background 0.2s;
    }
    .nav-btn:hover { background: var(--accent); }

    /* ── Hero ── */
    .hero {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: stretch;
    }
    .hero-left {
      padding: 80px 64px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-right: 1px solid var(--line);
    }
    .tag {
      display: inline-block;
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 600;
      font-size: 0.72rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--accent);
      border: 1px solid rgba(192,57,43,0.35);
      padding: 5px 14px;
      margin-bottom: 36px;
      width: fit-content;
      animation: fadeUp 0.6s 0.2s ease both;
    }
    h1 {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 800;
      font-size: clamp(3.8rem, 6.5vw, 6.5rem);
      line-height: 0.88;
      letter-spacing: -0.01em;
      text-transform: uppercase;
      color: var(--dark);
      margin-bottom: 36px;
      animation: fadeUp 0.6s 0.35s ease both;
    }
    h1 em {
      font-style: italic;
      font-family: 'Lora', serif;
      font-size: 0.82em;
      color: var(--accent);
      display: block;
      font-weight: 300;
      letter-spacing: 0.01em;
    }
    .description {
      font-size: 1.05rem;
      font-style: italic;
      line-height: 1.8;
      color: var(--muted);
      max-width: 440px;
      margin-bottom: 48px;
      border-left: 2px solid var(--accent);
      padding-left: 20px;
      animation: fadeUp 0.6s 0.5s ease both;
    }
    .description strong { font-style: normal; color: var(--text); }
    .hero-actions {
      display: flex; gap: 14px;
      animation: fadeUp 0.6s 0.65s ease both;
    }
    .btn-dark {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 600;
      font-size: 0.82rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      background: var(--dark);
      color: var(--bg);
      border: none;
      padding: 14px 36px;
      cursor: pointer;
      transition: background 0.2s, transform 0.15s;
    }
    .btn-dark:hover { background: var(--accent); transform: translateY(-2px); }
    .btn-outline {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 600;
      font-size: 0.82rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      background: none;
      color: var(--text);
      border: 1px solid var(--line);
      padding: 14px 36px;
      cursor: pointer;
      transition: border-color 0.2s;
    }
    .btn-outline:hover { border-color: var(--text); }

    /* ── Hero Right ── */
    .hero-right {
      padding: 80px 64px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 48px;
      animation: fadeLeft 0.8s 0.4s ease both;
    }
    .deco-num {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 800;
      font-size: 9rem;
      line-height: 1;
      color: transparent;
      -webkit-text-stroke: 1px rgba(44,40,37,0.1);
      user-select: none;
      letter-spacing: -0.03em;
    }
    .features { display: flex; flex-direction: column; gap: 0; }
    .feature-row {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 18px 0;
      border-bottom: 1px solid var(--line);
    }
    .feature-row:first-child { border-top: 1px solid var(--line); }
    .feat-num {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 600;
      font-size: 0.72rem;
      letter-spacing: 0.1em;
      color: var(--accent);
      width: 28px;
      flex-shrink: 0;
    }
    .feat-title {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 600;
      font-size: 1rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--dark);
      flex: 1;
    }
    .feat-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--muted); flex-shrink: 0; }
    .feat-dot.active { background: var(--accent); }
    .stats-row { display: flex; border: 1px solid var(--line); }
    .stat {
      flex: 1;
      padding: 20px 24px;
      border-right: 1px solid var(--line);
      text-align: center;
    }
    .stat:last-child { border-right: none; }
    .stat-val {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 800;
      font-size: 2rem;
      color: var(--dark);
      display: block;
    }
    .stat-lbl {
      font-size: 0.7rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--muted);
    }

    /* ── Footer ── */
    footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 18px 64px;
      border-top: 1px solid var(--line);
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 0.72rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--muted);
    }

    /* ── Animations ── */
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(20px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeDown {
      from { opacity: 0; transform: translateY(-14px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeLeft {
      from { opacity: 0; transform: translateX(30px); }
      to   { opacity: 1; transform: translateX(0); }
    }

    /* ── Responsive ── */
    @media (max-width: 860px) {
      nav { padding: 20px 28px; }
      .nav-right a { display: none; }
      .hero { grid-template-columns: 1fr; }
      .hero-left, .hero-right { padding: 48px 28px; border-right: none; }
      .deco-num { font-size: 5rem; }
      footer { padding: 16px 28px; }
    }
  </style>
</head>
<body>
<div class="page">

  <nav>
    <div class="logo">Auto<span>Drive</span></div>
    <div class="nav-right">
      <a href="#">Solutions</a>
      <a href="#">Fleet</a>
      <a href="#">Contact</a>
      <button class="nav-btn">Get Started</button>
    </div>
  </nav>

  <main class="hero">
    <div class="hero-left">
      <div class="tag">Intelligent Vehicle Automation</div>
      <h1>
        Automate.<br>
        <em>Accelerate.</em>
        Dominate.
      </h1>
      <p class="description">
        AutoDrive is a <strong>next-generation automation platform</strong> built for modern vehicles and fleets. We turn raw vehicle data into real-time intelligence — cutting downtime, slashing maintenance costs, and keeping every car and machine running at peak performance.
      </p>
      <div class="hero-actions">
        <button class="btn-dark">Explore Platform</button>
        <button class="btn-outline" onclick="runCustomScript()">Run Script</button>
      </div>
      <p id="script-status" style="margin-top:16px;color:#8c8075;font-size:0.95rem;">Idle</p>
    </div>

    <div class="hero-right">
      <div class="deco-num">24/7</div>
      <div class="features">
        <div class="feature-row">
          <span class="feat-num">01</span>
          <span class="feat-title">AI-Powered Diagnostics</span>
          <span class="feat-dot active"></span>
        </div>
        <div class="feature-row">
          <span class="feat-num">02</span>
          <span class="feat-title">Predictive Maintenance</span>
          <span class="feat-dot active"></span>
        </div>
        <div class="feature-row">
          <span class="feat-num">03</span>
          <span class="feat-title">Real-Time Fleet Tracking</span>
          <span class="feat-dot"></span>
        </div>
        <div class="feature-row">
          <span class="feat-num">04</span>
          <span class="feat-title">Remote Control & Alerts</span>
          <span class="feat-dot"></span>
        </div>
      </div>
      <div class="stats-row">
        <div class="stat">
          <span class="stat-val">98%</span>
          <span class="stat-lbl">Uptime</span>
        </div>
        <div class="stat">
          <span class="stat-val">50K+</span>
          <span class="stat-lbl">Vehicles</span>
        </div>
        <div class="stat">
          <span class="stat-val">3.2×</span>
          <span class="stat-lbl">Faster</span>
        </div>
      </div>
    </div>
  </main>

  <footer>
    <span>© 2026 AutoDrive Systems</span>
    <span>Built for the Road Ahead</span>
  </footer>

</div>

<script>
async function runCustomScript() {
  const statusEl = document.getElementById('script-status');
  statusEl.textContent = 'Running customScripts()...';

  try {
    const response = await fetch('/run-custom-script', { method: 'POST' });
    const data = await response.json();
    statusEl.textContent = data.message || 'Done';
  } catch (error) {
    statusEl.textContent = 'Request failed. Check server logs.';
  }
}
</script>

</body>
</html>`;

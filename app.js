// ===== DATA =====
const portfolioData = [
  { p: 1, ret: 0.001371706, sd: 0.013001915, cv: 9.478644539 },
  { p: 2, ret: 0.002143493, sd: 0.016924754, cv: 7.895874479 },
  { p: 3, ret: 0.001994032, sd: 0.014695506, cv: 7.369743878 },
  { p: 4, ret: 0.001805403, sd: 0.013042136, cv: 7.223947843 },
  { p: 5, ret: 0.00178519, sd: 0.012547308, cv: 7.028554674 },
  { p: 6, ret: 0.001709967, sd: 0.012508212, cv: 7.314884246 },
  { p: 7, ret: 0.001756069, sd: 0.013624783, cv: 7.758681374 },
  { p: 8, ret: 0.001669903, sd: 0.013246437, cv: 7.932456876 },
  { p: 9, ret: 0.001598548, sd: 0.012879872, cv: 8.057232859 },
  { p: 10, ret: 0.001498766, sd: 0.011521082, cv: 7.687046659 },
  { p: 11, ret: 0.001433255, sd: 0.011345586, cv: 7.915955395 },
  { p: 12, ret: 0.001387777, sd: 0.011156228, cv: 8.038918843 },
  { p: 13, ret: 0.001334508, sd: 0.010392331, cv: 7.787388511 },
  { p: 14, ret: 0.001278475, sd: 0.010182764, cv: 7.964772081 },
  { p: 15, ret: 0.001302852, sd: 0.01094617, cv: 8.401698057 },
  { p: 16, ret: 0.001312758, sd: 0.011288193, cv: 8.598836336 },
  { p: 17, ret: 0.001284679, sd: 0.011172337, cv: 8.696600804 },
  { p: 18, ret: 0.001245355, sd: 0.011017011, cv: 8.846480114 },
  { p: 19, ret: 0.001196092, sd: 0.010485633, cv: 8.766577095 },
  { p: 20, ret: 0.001173412, sd: 0.010560489, cv: 8.999811253 },
  { p: 21, ret: 0.001139958, sd: 0.010537614, cv: 9.243857979 },
  { p: 22, ret: 0.001116302, sd: 0.010748088, cv: 9.628298131 },
  { p: 23, ret: 0.00109646, sd: 0.010811549, cv: 9.860413834 },
  { p: 24, ret: 0.001075226, sd: 0.010854712, cv: 10.09528877 },
  { p: 25, ret: 0.001041335, sd: 0.010514825, cv: 10.09744484 }
];

const stocks = [
  { ticker: 'WMT', name: 'Walmart', sector: 'Consumer Defensive' },
  { ticker: 'NVDA', name: 'NVIDIA', sector: 'Technology' },
  { ticker: 'NFLX', name: 'Netflix', sector: 'Communication' },
  { ticker: 'AXP', name: 'American Express', sector: 'Financial Services' },
  { ticker: 'MA', name: 'Mastercard', sector: 'Financial Services' },
  { ticker: 'KO', name: 'Coca-Cola', sector: 'Consumer Defensive' },
  { ticker: 'MSFT', name: 'Microsoft', sector: 'Technology' },
  { ticker: 'BKNG', name: 'Booking Holdings', sector: 'Consumer Cyclical' },
  { ticker: 'CAT', name: 'Caterpillar', sector: 'Industrials' },
  { ticker: 'AAPL', name: 'Apple', sector: 'Technology' },
  { ticker: 'MMM', name: '3M', sector: 'Industrials' },
  { ticker: 'AMZN', name: 'Amazon', sector: 'Consumer Cyclical' },
  { ticker: 'JPM', name: 'JPMorgan Chase', sector: 'Financial Services' },
  { ticker: 'MET', name: 'MetLife', sector: 'Financial Services' },
  { ticker: 'TSLA', name: 'Tesla', sector: 'Consumer Cyclical' },
  { ticker: 'DELL', name: 'Dell Technologies', sector: 'Technology' },
  { ticker: 'FDX', name: 'FedEx', sector: 'Industrials' },
  { ticker: 'MCD', name: "McDonald's", sector: 'Consumer Cyclical' },
  { ticker: 'BX', name: 'Blackstone', sector: 'Financial Services' },
  { ticker: 'JNJ', name: 'Johnson & Johnson', sector: 'Healthcare' },
  { ticker: 'ORCL', name: 'Oracle', sector: 'Technology' },
  { ticker: 'T', name: 'AT&T', sector: 'Communication' },
  { ticker: 'INTC', name: 'Intel', sector: 'Technology' },
  { ticker: 'APA', name: 'APA Corp', sector: 'Energy' },
  { ticker: 'LUV', name: 'Southwest Airlines', sector: 'Industrials' }
];

// ===== LOADER =====
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('loader').classList.add('hidden'), 1500);
});

// ===== FLOATING MONEY =====
(function createMoney() {
  const bg = document.getElementById('moneyBg');
  const symbols = ['$', '💰', '💵', '₿', '💎', '🪙', '﷼'];
  for (let i = 0; i < 30; i++) {
    const el = document.createElement('span');
    el.className = 'money-symbol';
    el.textContent = symbols[i % symbols.length];
    el.style.left = Math.random() * 100 + '%';
    el.style.fontSize = (1 + Math.random() * 2) + 'rem';
    el.style.animationDuration = (8 + Math.random() * 15) + 's';
    el.style.animationDelay = Math.random() * 10 + 's';
    bg.appendChild(el);
  }
})();

// ===== SCROLL ANIMATIONS =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ===== COUNTER ANIMATION =====
const counterObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const el = e.target, target = +el.dataset.target;
      let cur = 0;
      const step = () => {
        cur += Math.ceil(target / 40);
        if (cur >= target) { el.textContent = target; return; }
        el.textContent = cur;
        requestAnimationFrame(step);
      };
      step();
      counterObs.unobserve(el);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.counter').forEach(el => counterObs.observe(el));

// ===== STOCKS GRID =====
(function renderStocks() {
  const grid = document.getElementById('stocksGrid');
  stocks.forEach((s, i) => {
    const div = document.createElement('div');
    div.className = 'stock-card fade-in';
    div.style.animationDelay = (i * 0.05) + 's';
    div.innerHTML = `<div class="ticker">${s.ticker}</div><div class="name">${s.name}</div><div class="sector">${s.sector}</div>`;
    grid.appendChild(div);
    observer.observe(div);
  });
})();

// ===== RESULTS TABLE =====
(function renderTable() {
  const t = document.getElementById('resultsTable');
  let html = '<thead><tr><th>Portfolio</th><th>Mean Return</th><th>Risk (SD)</th><th>CV</th><th>Stocks</th></tr></thead><tbody>';
  portfolioData.forEach(d => {
    const cls = d.p === 5 ? ' class="best"' : '';
    html += `<tr${cls}><td class="highlight">P${d.p}</td><td>${d.ret.toFixed(6)}</td><td>${d.sd.toFixed(6)}</td><td>${d.cv.toFixed(4)}</td><td>${d.p}</td></tr>`;
  });
  html += '</tbody>';
  t.innerHTML = html;
})();

// ===== CHARTS =====
const labels = portfolioData.map(d => 'P' + d.p);
const gold = '#D4AF37', goldLight = '#F5E6A3', emerald = '#0D6B3D', red = '#E74C3C';

function makeGradient(ctx, c1, c2) {
  const g = ctx.createLinearGradient(0, 0, 0, 400);
  g.addColorStop(0, c1); g.addColorStop(1, c2);
  return g;
}

// Return Chart
const rc = document.getElementById('returnChart').getContext('2d');
new Chart(rc, {
  type: 'line',
  data: {
    labels,
    datasets: [{
      label: 'Mean Return',
      data: portfolioData.map(d => d.ret),
      borderColor: gold,
      backgroundColor: makeGradient(rc, 'rgba(212,175,55,0.3)', 'rgba(212,175,55,0)'),
      fill: true, tension: 0.4, pointRadius: 5,
      pointBackgroundColor: portfolioData.map(d => d.p === 2 ? emerald : d.p === 25 ? red : gold),
      pointBorderColor: '#111', pointBorderWidth: 2
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { labels: { color: '#aaa' } } },
    scales: {
      x: { ticks: { color: '#888' }, grid: { color: 'rgba(255,255,255,0.05)' } },
      y: { ticks: { color: '#888' }, grid: { color: 'rgba(255,255,255,0.05)' } }
    }
  }
});

// Risk Chart
const rk = document.getElementById('riskChart').getContext('2d');
new Chart(rk, {
  type: 'bar',
  data: {
    labels,
    datasets: [{
      label: 'Standard Deviation',
      data: portfolioData.map(d => d.sd),
      backgroundColor: portfolioData.map(d => d.p === 14 ? emerald : d.p === 2 ? red : 'rgba(212,175,55,0.5)'),
      borderColor: portfolioData.map(d => d.p === 14 ? emerald : d.p === 2 ? red : gold),
      borderWidth: 1, borderRadius: 4
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { labels: { color: '#aaa' } } },
    scales: {
      x: { ticks: { color: '#888' }, grid: { color: 'rgba(255,255,255,0.05)' } },
      y: { ticks: { color: '#888' }, grid: { color: 'rgba(255,255,255,0.05)' } }
    }
  }
});

// CV Chart
const cv = document.getElementById('cvChart').getContext('2d');
new Chart(cv, {
  type: 'line',
  data: {
    labels,
    datasets: [{
      label: 'Coefficient of Variation',
      data: portfolioData.map(d => d.cv),
      borderColor: emerald,
      backgroundColor: makeGradient(cv, 'rgba(13,107,61,0.3)', 'rgba(13,107,61,0)'),
      fill: true, tension: 0.4, pointRadius: 5,
      pointBackgroundColor: portfolioData.map(d => d.p === 5 ? gold : d.p === 25 ? red : emerald),
      pointBorderColor: '#111', pointBorderWidth: 2
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { labels: { color: '#aaa' } } },
    scales: {
      x: { ticks: { color: '#888' }, grid: { color: 'rgba(255,255,255,0.05)' } },
      y: { ticks: { color: '#888' }, grid: { color: 'rgba(255,255,255,0.05)' } }
    }
  }
});

// ===== CATCH THE MONEY GAME =====
const canvas = document.getElementById('gameCanvas');
const ctx2 = canvas.getContext('2d');
let gameRunning = false, score = 0, gameLoop = null;
let basket = { x: 300, y: 360, w: 80, h: 30 };
let items = [];
let keys = {};

document.addEventListener('keydown', e => keys[e.key] = true);
document.addEventListener('keyup', e => keys[e.key] = false);
canvas.addEventListener('touchstart', e => {
  const rect = canvas.getBoundingClientRect();
  const tx = e.touches[0].clientX - rect.left;
  if (tx < canvas.width / 2) keys['ArrowLeft'] = true;
  else keys['ArrowRight'] = true;
});
canvas.addEventListener('touchend', () => { keys['ArrowLeft'] = false; keys['ArrowRight'] = false; });

function spawnItem() {
  const isBomb = Math.random() < 0.2;
  items.push({
    x: Math.random() * (canvas.width - 30),
    y: -20,
    w: 25, h: 25,
    speed: 2 + Math.random() * 3,
    type: isBomb ? 'bomb' : 'coin',
    emoji: isBomb ? '💣' : ['💰', '🪙', '💵', '💎'][Math.floor(Math.random() * 4)]
  });
}

function updateGame() {
  if (!gameRunning) return;
  ctx2.clearRect(0, 0, canvas.width, canvas.height);

  // Draw grid lines
  ctx2.strokeStyle = 'rgba(212,175,55,0.05)';
  for (let i = 0; i < canvas.width; i += 40) { ctx2.beginPath(); ctx2.moveTo(i, 0); ctx2.lineTo(i, canvas.height); ctx2.stroke(); }
  for (let i = 0; i < canvas.height; i += 40) { ctx2.beginPath(); ctx2.moveTo(0, i); ctx2.lineTo(canvas.width, i); ctx2.stroke(); }

  // Move basket
  if (keys['ArrowLeft'] && basket.x > 0) basket.x -= 7;
  if (keys['ArrowRight'] && basket.x < canvas.width - basket.w) basket.x += 7;

  // Draw basket
  ctx2.fillStyle = '#D4AF37';
  ctx2.beginPath();
  ctx2.roundRect(basket.x, basket.y, basket.w, basket.h, 8);
  ctx2.fill();
  ctx2.fillStyle = '#111';
  ctx2.font = '14px Inter';
  ctx2.textAlign = 'center';
  ctx2.fillText('🧺', basket.x + basket.w / 2, basket.y + 22);

  // Spawn
  if (Math.random() < 0.04) spawnItem();

  // Update items
  for (let i = items.length - 1; i >= 0; i--) {
    const it = items[i];
    it.y += it.speed;
    ctx2.font = '22px serif';
    ctx2.fillText(it.emoji, it.x + 12, it.y + 20);

    // Catch
    if (it.y + it.h > basket.y && it.x + it.w > basket.x && it.x < basket.x + basket.w) {
      if (it.type === 'coin') { score += 10; }
      else { score = Math.max(0, score - 25); }
      items.splice(i, 1);
      document.getElementById('gameScore').textContent = score;
      continue;
    }
    if (it.y > canvas.height) items.splice(i, 1);
  }

  // Score display on canvas
  ctx2.fillStyle = '#D4AF37';
  ctx2.font = 'bold 16px Inter';
  ctx2.textAlign = 'left';
  ctx2.fillText('Score: ' + score, 15, 30);

  gameLoop = requestAnimationFrame(updateGame);
}

function startGame() {
  if (gameRunning) return;
  gameRunning = true;
  score = 0; items = [];
  basket.x = 300;
  document.getElementById('gameScore').textContent = 0;
  updateGame();
}

function resetGame() {
  gameRunning = false;
  if (gameLoop) cancelAnimationFrame(gameLoop);
  score = 0; items = [];
  document.getElementById('gameScore').textContent = 0;
  ctx2.clearRect(0, 0, canvas.width, canvas.height);
  ctx2.fillStyle = 'rgba(212,175,55,0.1)';
  ctx2.font = '24px Playfair Display, serif';
  ctx2.textAlign = 'center';
  ctx2.fillText('Press START to play!', canvas.width / 2, canvas.height / 2);
}

// Initial canvas state
resetGame();

// ===== NAV SCROLL EFFECT =====
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 100) {
    nav.style.background = 'rgba(10,10,10,0.95)';
    nav.style.height = '60px';
  } else {
    nav.style.background = 'rgba(10,10,10,0.85)';
    nav.style.height = '70px';
  }
});

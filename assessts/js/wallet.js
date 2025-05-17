// Animate balance count
let target = 1000;
let balance = document.getElementById("balance");
let current = 0;
let interval = setInterval(() => {
  current += 10;
  balance.textContent = `$${current}`;
  if (current >= target) clearInterval(interval);
}, 10);

  // Chart setup in a function
  
  // Chart.js - Dynamic theme-aware rendering
  let chartInstance;

  function renderWalletChart() {
    const styles = getComputedStyle(document.body);
    const textColor = styles.getPropertyValue('--text').trim();
    const gridColor = styles.getPropertyValue('--text').trim() + '33'; // slightly transparent grid

    const ctx = document.getElementById('walletChart').getContext('2d');

    if (chartInstance) chartInstance.destroy();

    chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Monday','Tuesday','Wednesday','Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
          label: 'Wallet Stats ($)',
          data: [400, 300, 600,1000, 700, 200, 500],
          backgroundColor: [
            'var(--success)',
            'var(--danger)',
            'var(--primary)'
          ],
          borderRadius: 8,
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              color: textColor
            },
            grid: {
              color: gridColor
            }
          },
          x: {
            ticks: {
              color: textColor
            },
            grid: {
              color: gridColor
            }
          }
        }
      }
    });
  }

  // Initial render
  renderWalletChart();

  // Listen to theme change and re-render
  const observer = new MutationObserver(() => {
    renderWalletChart('data-theme');
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme']
  });


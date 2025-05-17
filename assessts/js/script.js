


/////////////// MENU / Side-Bar / THEME TOGGLE ///////////////


const themeToggle = document.getElementById("themeToggle");
const themeToggleSidebar = document.getElementById("themeToggleSidebar");
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
const themeIcon = themeToggle.querySelector("i");
const themeSidebarIcon = themeToggleSidebar.querySelector("i");
const menuIcon = menuToggle.querySelector("i");

// Theme ////////////
function toggleTheme() {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  document.documentElement.setAttribute("data-theme", isDark ? "light" : "dark");
  themeIcon.className = isDark ? "bx bx-moon" : "bx bx-sun";
  themeSidebarIcon.className = isDark ? "bx bx-moon" : "bx bx-sun";
}

themeToggle.onclick = toggleTheme;
themeToggleSidebar.onclick = toggleTheme;


// Menu / Side-Bar ////////////
menuToggle.onclick = () => {
  sidebar.classList.toggle("active");
  menuIcon.className = sidebar.classList.contains("active") ? "bx bx-x" : "bx bx-menu-alt-right";
};




   ///////////// Progress-Bar / Timer and Button Actions /////////////

   let coins = 20;
   let watched = 2;
   const maxAds = 10;

   function simulateAdPlayback() {
     let fill = document.getElementById("progressFill");
     let btn = document.getElementById("earnBtn");
     let width = 0;
     btn.disabled = true;
     btn.innerText = "Watching Ad...";

     const interval = setInterval(() => {
       if (width >= 100) {
         clearInterval(interval);
         btn.disabled = false;
         btn.innerText = "Earn 10 Coins";
       } else {
         width++;
         fill.style.width = width + "%";
       }
     }, 50); // 5 seconds total  ( 500 / 50 seconds total )
   }

   function earnCoins() {
     if (watched >= maxAds) return alert("You reached today's limit!");

     coins += 10;
     watched += 1;
     document.getElementById("coinsTotal").innerText = coins;
     document.getElementById("adsWatched").innerText = watched;
     document.getElementById("adsRemaining").innerText = maxAds - watched;

     let percent = (watched / maxAds) * 100;
     document.getElementById("barFill").style.width = percent + "%";
     document.getElementById("barFill").innerText = Math.round(percent) + "%";

     const msg = document.getElementById("coinMsg");
     msg.style.display = "block";
     msg.style.opacity = 1;
     setTimeout(() => msg.style.opacity = 0, 1500);

     document.getElementById("progressFill").style.width = "0%";
     simulateAdPlayback();
   }

   document.getElementById("earnBtn").addEventListener("click", earnCoins);

   // Start ad on page load
   simulateAdPlayback();





 

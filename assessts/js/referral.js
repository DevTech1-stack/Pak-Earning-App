// Example click handler for social icons
document.querySelectorAll(".social-icons i").forEach((icon) => {
  icon.addEventListener("click", () => {
    alert(
      "Sharing your referral link: https://pak-earning-app.com/referral?code=REFAASHIR55"
    );
    // You can replace this alert with actual share logic using navigator.share or custom URLs
  });
});

// Progress Bar ////
let currentReferrals = 2;
const maxReferrals = 5;

const progressBar = document.getElementById("progressBar");
const referralCount = document.getElementById("referralCount");
const bonusMessage = document.getElementById("bonusMessage");

// Initialize starting progress
updateProgress(currentReferrals);

document.querySelectorAll(".social-icons i").forEach((icon) => {
  icon.addEventListener("click", () => {
    if (currentReferrals >= maxReferrals) return;

    currentReferrals++;
    referralCount.textContent = currentReferrals;
    updateProgress(currentReferrals);

    const remaining = maxReferrals - currentReferrals;
    bonusMessage.textContent =
      remaining > 0
        ? `🎯 ${remaining} more referral${
            remaining > 1 ? "s" : ""
          } to earn ₹50 bonus`
        : "✅ You've earned the ₹50 bonus!";
  });
});

function updateProgress(referrals) {
  const targetPercent = (referrals / maxReferrals) * 100;
  let currentWidth = parseFloat(progressBar.style.width) || 0;

  if (progressBar.animationInterval) {
    clearInterval(progressBar.animationInterval);
  }

  progressBar.animationInterval = setInterval(() => {
    if (currentWidth >= targetPercent) {
      clearInterval(progressBar.animationInterval);
      return;
    }
    currentWidth += 1;
    progressBar.style.width = currentWidth + "%";
  }, 10);
}

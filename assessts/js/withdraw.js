// WITHDRAW  -  DEPOSIT //

let balance = 500;
let dailyLimit = { deposit: 0, withdraw: 0 };
const limit = 3;

function showSection(id) {
  // Hide all sections
  document.querySelectorAll(".withdraw-deposit-section").forEach((section) => {
    section.classList.remove("active");
  });

  // Show the selected one
  const target = document.getElementById(id);
  if (target) {
    target.classList.add("active");
  }
}

function showMessage(msg, type) {
  const activeSection = document.querySelector(
    ".withdraw-deposit-section.active"
  );
  if (!activeSection) return;

  const msgBox = activeSection.querySelector(".message");
  if (!msgBox) return;

  msgBox.textContent = msg;
  msgBox.className = `message ${type}`;
  setTimeout(() => {
    msgBox.textContent = "";
    msgBox.className = "message";
  }, 3000);
}

function handleTransaction(type) {
  const phoneInput = document.getElementById(`${type}-phone`);
  const amountInput = document.getElementById(`${type}-amount`);

  if (!phoneInput || !amountInput) {
    showMessage("Input fields not found", "error");
    return;
  }

  const phone = phoneInput.value.trim();
  const amount = parseInt(amountInput.value);

  if (!phone) {
    showMessage("Please enter your phone number.", "error");
    return;
  }

  if (isNaN(amount) || amount < 10 || amount > 1000) {
    showMessage("Amount must be between ₹10 and ₹1000", "error");
    return;
  }

  if (dailyLimit[type] >= limit) {
    showMessage(`Daily ${type} limit reached!`, "error");
    return;
  }

  if (type === "withdraw") {
    if (amount > balance) {
      showMessage("Insufficient balance!", "error");
      return;
    }
    balance -= amount;
  } else {
    balance += amount;
  }

  dailyLimit[type]++;
  document
    .querySelectorAll("#balance")
    .forEach((el) => (el.textContent = balance));
  showMessage(
    `${type.charAt(0).toUpperCase() + type.slice(1)} Successful!`,
    "success"
  );
}

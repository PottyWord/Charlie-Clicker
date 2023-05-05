<!DOCTYPE html>
<html>
<head>
  <title>Charlie Clicker</title>
  <script src="charlie-clicker.js"></script>
</head>
<body>
  <h1>Charlie Clicker</h1>
  <p>Cookies: <span id="cookies">0</span></p>
  <p>Clicks per second: <span id="cps">0</span></p>
  <button onclick="clickCookie()">Click Charlie!</button>
  <br>
  <button onclick="buyUpgrade(0)">Upgrade Click</button>
  <button onclick="buyUpgrade(1)">Charlie's Fingers</button>
  <button onclick="buyUpgrade(2)">Charlie's Minions</button>
  <button onclick="buyUpgrade(3)">Farms</button>
</body>
</html>
// Variables
let cookies = 0;
let cps = 0;
let clickUpgrades = [
  { price: 30, value: 1 },
  { price: 200, value: 15 },
  { price: 700, value: 90 },
  { price: 100000, value: 3000 }
];

// Functions
function clickCookie() {
  cookies += 1;
  updateUI();
}

function buyUpgrade(index) {
  const upgrade = clickUpgrades[index];
  if (cookies >= upgrade.price) {
    cookies -= upgrade.price;
    cps += upgrade.value;
    upgrade.price += index * 100;
    updateUI();
  }
}

function updateUI() {
  document.getElementById('cookies').textContent = cookies;
  document.getElementById('cps').textContent = cps;
}
// Click upgrade
setInterval(() => {
  cookies += cps / 10;
  updateUI();
}, 100);
// Display upgrades
for (let i = 0; i < clickUpgrades.length; i++) {
  const upgrade = clickUpgrades[i];
  const button = document.getElementsByTagName('button')[i + 1];
  button.textContent = `Upgrade ${i + 1}: ${upgrade.value} cps (${upgrade.price} cookies)`;
}
// Farms upgrade
setInterval(() => {
  cookies += cps * 15;
  updateUI();
}, 2000);

// Display Farms upgrade
const farmButton = document.getElementsByTagName('button')[4];
farmButton.textContent = `Upgrade 4: +3000 cps (${clickUpgrades[3].price} cookies)`;


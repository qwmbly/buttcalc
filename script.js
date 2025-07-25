// Object data
const objectData = {
  "🍕 Food": {
    "Banana": { l: 18, w: 4, h: 3 },
    "Candy Cane (Mini)": { l: 9, w: 2, h: 1.5 },
    "Chicken Nugget": { l: 5, w: 3, h: 2 },
    "Grape": { l: 2, w: 2, h: 2 },
    "Gummy Bear": { l: 2, w: 1, h: 1 },
    "Mini Pickle": { l: 5, w: 2.5, h: 2.5 },
    "Peanut Butter Cup": { l: 4, w: 4, h: 2 },
    "Snack Pack Pudding": { l: 7, w: 7, h: 4 },
    "Snickers Mini": { l: 3.5, w: 2.5, h: 2 },
    "Tide Pod": { l: 4, w: 4, h: 2 },
    "Yogurt Tube": { l: 12, w: 3, h: 2 }
  },
  "📱 Tech": {
    "AA Battery": { l: 5, w: 1.4, h: 1.4 },
    "Earbud Case": { l: 6, w: 6, h: 3 },
    "GoPro": { l: 6, w: 4, h: 3 },
    "iPhone": { l: 14.7, w: 7.1, h: 0.7 },
    "Lightbulb (A19)": { l: 11, w: 6, h: 6 },
    "Smartwatch": { l: 4.5, w: 4.5, h: 1.3 },
    "Thumb Drive": { l: 4, w: 2, h: 1 },
    "USB Stick": { l: 5.5, w: 2, h: 1 },
    "USB-C Charger Brick": { l: 5, w: 4, h: 3 }
  },
  "🧸 Toys": {
    "Bouncy Ball": { l: 3.5, w: 3.5, h: 3.5 },
    "Die (d6)": { l: 1.6, w: 1.6, h: 1.6 },
    "Fidget Spinner": { l: 7, w: 7, h: 1.5 },
    "Funko Pop": { l: 9, w: 6, h: 6 },
    "LEGO Brick (2x4)": { l: 3.2, w: 1.6, h: 1 },
    "Lego Minifig": { l: 4.5, w: 1.5, h: 1.5 },
    "Matchbox Car": { l: 7, w: 3, h: 2.5 },
    "Plastic Army Man": { l: 5, w: 3, h: 2 },
    "Rubber Duck": { l: 8, w: 6, h: 7 },
    "Rubik’s Cube": { l: 5.7, w: 5.7, h: 5.7 },
    "Toy Dinosaur (Tiny)": { l: 7, w: 4, h: 3 }
  },
  "✏️ Office Supplies": {
    "Altoids Tin": { l: 9.5, w: 6, h: 2 },
    "Bottle Cap": { l: 3, w: 3, h: 1.5 },
    "Business Card": { l: 9, w: 5, h: 0.2 },
    "ChapStick": { l: 6.6, w: 1.6, h: 1.6 },
    "Chalk Stick": { l: 10, w: 2, h: 2 },
    "Eraser": { l: 5, w: 2, h: 1 },
    "Marker Pen": { l: 14, w: 1.5, h: 1.5 },
    "Measuring Spoon (Tbsp)": { l: 8, w: 2.5, h: 2 },
    "Mini Stapler": { l: 6.5, w: 4, h: 3 },
    "Pencil": { l: 18, w: 0.8, h: 0.8 },
    "Stack of Post-Its": { l: 7.6, w: 7.6, h: 1.2 }
  },
  "🚽 Bathroom": {
    "Bar of Soap": { l: 9, w: 6, h: 3 },
    "Handheld Mirror": { l: 20, w: 8, h: 1 },
    "Lint Roller Head": { l: 10, w: 5, h: 5 },
    "Mini Shampoo Bottle": { l: 9, w: 4, h: 4 },
    "Plastic Shot Glass": { l: 5.5, w: 4, h: 4 },
    "Toilet Paper Roll": { l: 10, w: 10, h: 11 },
    "Toothbrush": { l: 18, w: 2, h: 2 },
    "Travel Deodorant": { l: 9, w: 4, h: 3 },
    "Travel Toothpaste": { l: 10, w: 3.5, h: 3 }
  },
  "🧰 Miscellaneous": {
    "Bag Clip": { l: 7, w: 5, h: 1.5 },
    "Car Key Fob": { l: 7, w: 3.5, h: 1.5 },
    "Compact Mirror": { l: 7, w: 7, h: 1 },
    "Duct Tape Roll": { l: 10, w: 10, h: 5 },
    "Eyeglass Case": { l: 16, w: 5, h: 4 },
    "Film Canister": { l: 6, w: 3.5, h: 3.5 },
    "Golf Ball": { l: 4.3, w: 4.3, h: 4.3 },
    "Pine Cone (Small)": { l: 7, w: 4, h: 4 },
    "PopSocket": { l: 4.5, w: 4.5, h: 1 },
    "Remote Control": { l: 15, w: 4, h: 2 },
    "Shot Glass": { l: 6, w: 5, h: 5 },
    "Stress Ball": { l: 6, w: 6, h: 6 },
    "Whistle": { l: 5, w: 2.5, h: 2 }
  },
  "🔥 Wildcards": {
    "Chapman’s Ice Cream Lid": { l: 9, w: 9, h: 1 },
    "Coin Roll": { l: 8.5, w: 2.5, h: 2.5 },
    "Dog Treat Bone": { l: 8, w: 3, h: 2 },
    "Disposable Lighter": { l: 8, w: 2.5, h: 1.5 },
    "Ear Plug (Pair)": { l: 3, w: 1.5, h: 1.5 },
    "Pez Dispenser": { l: 11, w: 2.5, h: 2.5 },
    "Plastic Fork": { l: 17, w: 3, h: 2 },
    "Wii Nunchuk": { l: 11, w: 4, h: 4 },
    "Bottle Opener": { l: 10, w: 4, h: 1 }
  }
};

const disclaimerLines = [
  "Actual results may vary based on flexibility, shame, and Newtonian physics.",
  "Actual results may vary based on hydration level, moral fortitude, and moon phase.",
  "Actual results may vary based on posture, panic, and prayer.",
  "Actual results may vary based on object texture, your last meal, and if Mercury is in retrograde.",
  "Actual results may vary based on personal ambition and available lube.",
  "Actual results may vary based on how much you believe in yourself.",
  "Actual results may vary based on intestinal negotiations.",
  "Actual results may vary based on your browser history.",
  "Actual results may vary based on whether your mom walks in.",
  "Actual results may vary based on pressure, friction, and divine intervention.",
  "Actual results may vary based on stretch level and emotional stability.",
  "Actual results may vary based on training montage duration.",
  "Actual results may vary based on sheer spite.",
  "Actual results may vary based on unholy curiosity.",
  "Actual results may vary based on your internet provider.",
  "Actual results may vary based on TikTok trends.",
  "Actual results may vary based on the will of the gods.",
  "Actual results may vary based on the presence of witnesses.",
  "Actual results may vary based on the density of your sins.",
  "Actual results may vary based on your browser plugins.",
  "Actual results may vary based on your D&D constitution score.",
  "Actual results may vary based on seasonal allergies.",
  "Actual results may vary based on caffeine intake.",
  "Actual results may vary based on whether or not it's a full moon.",
  "Actual results may vary based on how bad you want it.",
  "Actual results may vary based on gravitational anomalies.",
  "Actual results may vary based on reality being a simulation.",
  "Actual results may vary based on the alignment of your chakras.",
  "Actual results may vary based on whether you're being dared.",
  "Actual results may vary based on Bluetooth signal strength.",
  "Actual results may vary based on the square root of regret.",
  "Actual results may vary based on which Taylor Swift era you're in.",
  "Actual results may vary based on what you just Googled.",
  "Actual results may vary based on local ordinances.",
  "Actual results may vary based on the butt gods' favor.",
  "Actual results may vary based on IRS scrutiny.",
  "Actual results may vary based on inflation (both kinds).",
  "Actual results may vary based on inner peace and fiber intake.",
  "Actual results may vary based on your Enneagram type.",
  "Actual results may vary based on legal advice received on Reddit.",
  "Actual results may vary based on AI hallucinations.",
  "Actual results may vary based on the square footage of your shame.",
  "Actual results may vary based on buttstock futures volatility.",
  "Actual results may vary based on USB port compatibility.",
  "Actual results may vary based on the number of tabs you have open.",
  "Actual results may vary based on how many times you've done this.",
  "Actual results may vary based on your zodiac rising sign.",
  "Actual results may vary based on ghost approval.",
  "Actual results may vary based on the speed of the wind.",
  "Actual results may vary based on how long you hold your breath."
];

function setRandomDisclaimer() {
  const base = "⚠️ All calculations are based on approximate volume only.";
  const random = disclaimerLines[Math.floor(Math.random() * disclaimerLines.length)];
  const disclaimerElement = document.getElementById("disclaimer");
  if (disclaimerElement) {
    disclaimerElement.innerText = `${base} ${random}`;
  }
}

window.onload = () => {
  populateCategorySelect();
  setRandomDisclaimer();
};

function populateCategorySelect() {
  const catSelect = document.getElementById("category-select");
  const categories = Object.keys(objectData).sort();
  categories.forEach((cat) => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    catSelect.appendChild(option);
  });
}

function populateObjectSelect() {
  const category = document.getElementById("category-select").value;
  const objSelect = document.getElementById("object-select");
  objSelect.innerHTML = "";

  if (!objectData[category]) return;

  const items = Object.keys(objectData[category]).sort();
  items.forEach((item) => {
    const option = document.createElement("option");
    option.value = item;
    option.textContent = item;
    objSelect.appendChild(option);
  });
}

function getRectalVolume() {
  const select = document.getElementById("stretch-level");
  return parseInt(select.value, 10);
}

function calculateFromPreset() {
  const category = document.getElementById("category-select").value;
  const object = document.getElementById("object-select").value;
  const output = document.getElementById("result");

  if (!objectData[category] || !objectData[category][object]) {
    output.innerText = "Please select a valid object.";
    return;
  }

  const dims = objectData[category][object];
  const volume = dims.l * dims.w * dims.h;
  const packingEfficiency = 0.6;
  const adjustedVolume = volume / packingEfficiency;
  const buttVolume = getRectalVolume();

  const rawCount = buttVolume / adjustedVolume;
  const fullCount = Math.floor(rawCount);

  const message = rawCount < 1
    ? `Only ${rawCount.toFixed(2)} ${object}(s) could fit.`
    : `${fullCount} full ${object}(s) could fit (${rawCount.toFixed(2)} by volume).`;

  output.innerText = `💥 Estimated: ${message}`;
  setRandomDisclaimer();
}

function calculateCustom() {
  const l = parseFloat(document.getElementById("length").value);
  const w = parseFloat(document.getElementById("width").value);
  const h = parseFloat(document.getElementById("height").value);
  const output = document.getElementById("result");

  if (isNaN(l) || isNaN(w) || isNaN(h)) {
    output.innerText = "Please enter valid dimensions.";
    return;
  }

  const volume = l * w * h;
  const packingEfficiency = 0.6;
  const adjustedVolume = volume / packingEfficiency;
  const buttVolume = getRectalVolume();

  const rawCount = buttVolume / adjustedVolume;
  const fullCount = Math.floor(rawCount);

  const message = rawCount < 1
    ? `Only ${rawCount.toFixed(2)} of your custom object could fit.`
    : `${fullCount} full object(s) could fit (${rawCount.toFixed(2)} by volume).`;

  output.innerText = `🧮 Estimated: ${message}`;
  setRandomDisclaimer();
}

 function feelingLucky() {
  const categories = Object.keys(objectData);
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];

  const objects = Object.keys(objectData[randomCategory]);
  const randomObject = objects[Math.floor(Math.random() * objects.length)];

  const categorySelect = document.getElementById("category-select");
  const objectSelect = document.getElementById("object-select");

  categorySelect.value = randomCategory;
  populateObjectSelect();
  objectSelect.value = randomObject;

  calculateFromPreset();
}

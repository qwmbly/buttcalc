const objectData = {
  "Food": {
    "Banana": { l: 18, w: 4, h: 3 },
    "Chicken Nugget": { l: 5, w: 3, h: 2 },
    "Grape": { l: 2, w: 2, h: 2 },
    "Mini Pickle": { l: 5, w: 2.5, h: 2.5 },
    "Snack Pack Pudding": { l: 7, w: 7, h: 4 },
    "Tide Pod": { l: 4, w: 4, h: 2 },
    "Yogurt Tube": { l: 12, w: 3, h: 2 }
  },
  "Tech": {
    "AA Battery": { l: 5, w: 1.4, h: 1.4 },
    "Earbud Case": { l: 6, w: 6, h: 3 },
    "iPhone": { l: 14.7, w: 7.1, h: 0.7 },
    "USB Stick": { l: 5.5, w: 2, h: 1 },
    "USB-C Charger Brick": { l: 5, w: 4, h: 3 }
  },
  "Toys": {
    "Dice": { l: 1.6, w: 1.6, h: 1.6 },
    "Funko Pop": { l: 9, w: 6, h: 6 },
    "LEGO Brick (2x4)": { l: 3.2, w: 1.6, h: 1.0 },
    "Lego Minifig": { l: 4.5, w: 1.5, h: 1.5 },
    "Matchbox Car": { l: 7, w: 3, h: 2.5 },
    "Plastic Army Man": { l: 5, w: 3, h: 2 },
    "Rubber Duck": { l: 8, w: 6, h: 7 }
  },
  "Office Supplies": {
    "Altoids Tin": { l: 9.5, w: 6, h: 2 },
    "Bottle Cap": { l: 3, w: 3, h: 1.5 },
    "Eraser": { l: 5, w: 2, h: 1 },
    "Marker Pen": { l: 14, w: 1.5, h: 1.5 },
    "Pencil": { l: 18, w: 0.8, h: 0.8 },
    "Stack of Post-Its": { l: 7.6, w: 7.6, h: 1.2 }
  },
  "Bathroom": {
    "Mini Shampoo Bottle": { l: 9, w: 4, h: 4 },
    "Toilet Paper Roll": { l: 10, w: 10, h: 11 },
    "Toothbrush": { l: 18, w: 2, h: 2 },
    "Travel Toothpaste": { l: 10, w: 3.5, h: 3 },
    "Travel Deodorant": { l: 9, w: 4, h: 3 }
  },
  "Miscellaneous": {
    "ChapStick": { l: 6.6, w: 1.6, h: 1.6 },
    "Compact Mirror": { l: 7, w: 7, h: 1 },
    "Golf Ball": { l: 4.3, w: 4.3, h: 4.3 },
    "Lightbulb (A19)": { l: 11, w: 6, h: 6 },
    "Remote Control": { l: 15, w: 4, h: 2 },
    "Shot Glass": { l: 6, w: 5, h: 5 },
    "Stress Ball": { l: 6, w: 6, h: 6 }
  }
};

// On page load
window.onload = () => {
  populateCategorySelect();
  populateObjectSelect(); // populate with blank/defaults
};

function populateCategorySelect() {
  const categorySelect = document.getElementById("category-select");
  const categories = Object.keys(objectData).sort();

  categories.forEach((cat) => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    categorySelect.appendChild(option);
  });
}

function populateObjectSelect() {
  const category = document.getElementById("category-select").value;
  const objectSelect = document.getElementById("object-select");
  objectSelect.innerHTML = "";

  if (!category || !objectData[category]) return;

  const items = Object.keys(objectData[category]).sort();

  items.forEach((item) => {
    const option = document.createElement("option");
    option.value = item;
    option.textContent = item;
    objectSelect.appendChild(option);
  });
}

function getRectalVolume() {
  const select = document.getElementById("stretch-level");
  return parseInt(select.value, 10);
}

function calculateFromPreset() {
  const category = document.getElementById("category-select").value;
  const object = document.getElementById("object-select").value;

  if (!objectData[category] || !objectData[category][object]) {
    alert("Please select a valid object.");
    return;
  }

  const dims = objectData[category][object];
  const volume = dims.l * dims.w * dims.h;
  const buttCapacity = getRectalVolume();
  const count = Math.floor(buttCapacity / volume);

  document.getElementById("result").innerText = `${count} ${object}(s) can fit in your butt.`;
}

function calculateCustom() {
  const l = parseFloat(document.getElementById("length").value);
  const w = parseFloat(document.getElementById("width").value);
  const h = parseFloat(document.getElementById("height").value);

  if (isNaN(l) || isNaN(w) || isNaN(h)) {
    alert("Please enter valid dimensions.");
    return;
  }

  const volume = l * w * h;
  const buttCapacity = getRectalVolume();
  const count = Math.floor(buttCapacity / volume);

  document.getElementById("result").innerText = `Approximately ${count} of your custom object(s) could fit.`;
}

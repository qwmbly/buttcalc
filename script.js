const objectData = {
  "Grape": { l: 2, w: 2, h: 2 },
  "Hot Dog": { l: 15, w: 2, h: 2 },
  "Dice": { l: 1.6, w: 1.6, h: 1.6 },
  "Funko Pop": { l: 9, w: 6, h: 6 },
  "iPhone": { l: 14.7, w: 7.1, h: 0.7 }
};

const averageRectalVolume = 600; // ml

window.onload = () => {
  const select = document.getElementById("object-select");
  for (let obj in objectData) {
    const option = document.createElement("option");
    option.value = obj;
    option.textContent = obj;
    select.appendChild(option);
  }
};

function calculateFromPreset() {
  const obj = document.getElementById("object-select").value;
  const dims = objectData[obj];
  const vol = dims.l * dims.w * dims.h;
  const count = Math.floor(averageRectalVolume / vol);
  document.getElementById("result").innerText = `${count} ${obj}s can fit in your butt.`;
}

function calculateCustom() {
  const l = parseFloat(document.getElementById("length").value);
  const w = parseFloat(document.getElementById("width").value);
  const h = parseFloat(document.getElementById("height").value);

  if (isNaN(l) || isNaN(w) || isNaN(h)) {
    alert("Please enter valid dimensions.");
    return;
  }

  const vol = l * w * h;
  const count = Math.floor(averageRectalVolume / vol);
  document.getElementById("result").innerText = `Roughly ${count} of your custom object could fit.`;
}

const MCDonaldDiv = document.getElementById('MCDonald');
const TrumpDiv = document.getElementById('Trump');

const infoDiv = document.getElementById('info');

MCDonaldDiv.addEventListener('click', function() {
  infoDiv.innerHTML = 'This Is MCDONALD';
});

TrumpDiv.addEventListener('click', function() {
  infoDiv.innerHTML = 'Trump Working on MCDONALD? WHAAAAAA';
});

document.getElementById("checkButton").addEventListener("click", function() {
  let age = document.getElementById("ageInput").value;
  let resultText = document.getElementById("resultText");
  let resultImage = document.getElementById("resultImage");

  if (age <= 15) {
    resultText.innerText = "You cannot drive";
    resultText.style.color = "red"; // change color
    resultImage.src = "bike.jpg";
  } else if (age >= 16 && age <= 24) {
    resultText.innerText = "You can drive";
    resultText.style.color = "green";
    resultImage.src = "gtr.jpg";
  } else if (age >= 25) {
    resultText.innerText = "You can drive and rent a car";
    resultText.style.color = "green";
    resultImage.src = "car.jpg";
  }
});

const container = document.getElementById("list_container");

for (let i = 1; i <= 5; i++) {
  const p = document.createElement("p");
  p.textContent = "This is item #" + i;
  container.appendChild(p);
}

let j = 1;
while (j <= 5) {
  const p = document.createElement("p");
  p.textContent = "While loop item #" + j;
  container.appendChild(p);
  j++;
}


for (let k = 1; k <= 20; k++) {
  const p = document.createElement("p");
  p.textContent = "Blue or red? # " + k;

  if (k % 2 == 0) {
    p.style.color = "blue";
  } else {
    p.style.color = "red";
  }

  container.appendChild(p);
}


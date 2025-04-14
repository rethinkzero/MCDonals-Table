const MCDonaldDiv = document.getElementById('MCDonald');
const TrumpDiv = document.getElementById('Trump');

const infoDiv = document.getElementById('info');

MCDonaldDiv.addEventListener('click', function() {
  infoDiv.innerHTML = 'This Is MCDONALD';
});

TrumpDiv.addEventListener('click', function() {
  infoDiv.innerHTML = 'Trump Working on MCDONALD? WHAAAAAA';
});
//work from thursday here



//work from thursday here


const container = document.getElementById("list-container");

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


for (let i = 1; i <= 20; i++) {
  const p = document.createElement("p");
  p.textContent = i;

  if (i = 2) {
    p.style.color = "blue";
  } else {
    p.style.color = "red";
  }

  container.appendChild(p);
}


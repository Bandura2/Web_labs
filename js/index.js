const sortButton = document.getElementById("sort_button");
const searchButton = document.getElementById("search__button");
const searchInput = document.getElementById("choose__search");
const countButton = document.getElementById("count_botton");
const totalWeightElement = document.getElementById("total_weight");
const clearButton = document.getElementById("clear__button");

let originalInsectList = Array.from(document.querySelectorAll(".insect"));
let currentInsectList = [...originalInsectList];

// Sort insects by speed
sortButton.addEventListener("click", () => {

  currentInsectList.sort((a, b) => {
    const speedA = parseInt(a.querySelector("#insect_speed").textContent.split(":")[1]);
    const speedB = parseInt(b.querySelector("#insect_speed").textContent.split(":")[1]);
    return speedA - speedB;
  });

  updateInsectList(currentInsectList);
});

searchButton.addEventListener("click", () => {

  const searchTerm = searchInput.value.trim();
  if (searchTerm !== "") {
    currentInsectList = originalInsectList.filter((insect) => {

      const name = insect.querySelector("#insect_name").textContent;
      return name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    updateInsectList(currentInsectList);
  }
});

// Count total weight
countButton.addEventListener("click", () => {

  const totalWeight = currentInsectList.reduce((accumulator, insect) => {

    const weight = parseInt(insect.querySelector("#insect_weight").textContent.split(":")[1]);
    return accumulator + weight;
  }, 0);

  totalWeightElement.textContent = totalWeight;
});

// Clear after search
clearButton.addEventListener("click", () => {

  currentInsectList = [...originalInsectList];
  updateInsectList(currentInsectList);
});

// Update container
function updateInsectList(updatedInsects) {

  const insectsContainer = document.querySelector(".cards__section ul");

  originalInsectList.forEach((insect) => {

    insect.remove();
  });

  updatedInsects.forEach((insect) => {

    insectsContainer.appendChild(insect);
  });
}

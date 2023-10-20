const sortButton = document.getElementById("sort_button");
const searchButton = document.getElementById("search__button");
const searchInput = document.getElementById("choose__search");
const countButton = document.getElementById("count_botton");
const totalWeightElement = document.getElementById("total_weight");
const clearButton = document.getElementById("clear__button");
const createButton = document.getElementById("create__insect_btn");
const createMenu = document.getElementById("create_section_id");
const editMenu = document.getElementById("edit_section_id");
const closeMenu = document.getElementById("cancel_btn");
const closeEditMenu = document.getElementById("cancel_btn_2");
const nameInput = document.getElementById("insect_name_in");
const speedInput = document.getElementById("insect_speed_in");
const weightInput = document.getElementById("insect_weight_in");
const nameEditInput = document.getElementById("insect_edit_name_in");
const speedEditInput = document.getElementById("insect_edit_speed_in");
const weightEditInput = document.getElementById("insect_edit_weight_in");
const submitButton = document.getElementById("submit_btn");
const submitEditButton = document.getElementById("submit_btn_2");
const insectsContainer = document.getElementById("cards_ul");
const EDIT_BUTTON_ID = "edit_button-";

let nextId = 0;
let ALLInsects = [];
let displayedInsects = [];

function generateNextId() {
  return nextId++;
}

const addInsect = ({ id, name, speed, weight }) => {

  const newInsect = {
    id,
    name,
    speed,
    weight,
  };
  
  ALLInsects.push(newInsect);
  displayedInsects.push(newInsect); 
  addInsectToPage(newInsect);
  
};

const itemTemplate = ({ id, name, speed, weight }) => `
  <li id="insect-${id}" class="card_insect" draggable="true">
    <div class="card-body">
      <p id="insect_name">${name}</p>
      <p id="insect_speed">Speed: ${speed}</p>
      <p id="insect_weight">Weight: ${weight}</p>
      <button id="${EDIT_BUTTON_ID}${id}" class="edit-button" data-id="${id}">Edit</button>
    </div>
  </li>
`;

const addInsectToPage = (insect) => {
  insectsContainer.insertAdjacentHTML("beforeend", itemTemplate(insect));

  const editButton = document.getElementById(`${EDIT_BUTTON_ID}${insect.id}`);
  // editButton.removeEventListener("click", openEditMenu);
  editButton.addEventListener("click", () => {
    openEditMenu(insect.id);
  });
};

submitButton.addEventListener("click", () => {
  
  const name = nameInput.value;
  const speed = speedInput.value;
  const weight = weightInput.value;

  if (name === "" || !/^\d+$/.test(speed) || !/^\d+$/.test(weight)) {

    alert("Fields can not be empty, and speed/weight must contain only numeric digits.");

  } else if (speed <= 0 || weight <= 0) {

    alert("Numeric fields can not be less than or equal to 0.");

  } else {
    addInsect({
    id: generateNextId(),
    name,
    speed,
    weight,
  });

  nameInput.value = '';
  speedInput.value = '';
  weightInput.value = '';
  }
});

const renderItemsList = (items) => {
  insectsContainer.innerHTML = "";
  items.forEach(addInsectToPage);
};

countButton.addEventListener("click", () => {
  const totalWeight = displayedInsects.reduce((total, insect) => total + parseInt(insect.weight), 0);
  totalWeightElement.textContent = totalWeight;
});

sortButton.addEventListener("click", () => {
  displayedInsects.sort((b, a) => parseInt(b.speed) - parseInt(a.speed));
  renderItemsList(displayedInsects);
});

searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value.trim().toLowerCase();
  if (searchTerm !== "") {
    displayedInsects = displayedInsects.filter((insect) => insect.name.toLowerCase().includes(searchTerm));
    renderItemsList(displayedInsects);
    searchInput.value = "";
  }
});

clearButton.addEventListener("click", () => {
  displayedInsects = ALLInsects;
  renderItemsList(ALLInsects);
});

createButton.addEventListener("click", () => {
  createMenu.style.display = "block";
});

closeMenu.addEventListener("click", () => {
  createMenu.style.display = "none";
});

closeEditMenu.addEventListener("click", () => {
  editMenu.style.display = "none";
});

function openEditMenu(insectId) {
  const insectToEdit = displayedInsects.find((insect) => insect.id === insectId);
  if (insectToEdit) {
    nameEditInput.value = insectToEdit.name;
    speedEditInput.value = insectToEdit.speed;
    weightEditInput.value = insectToEdit.weight;
    editMenu.style.display = "block";

    const submitEditButton = document.getElementById("submit_btn_2");
    submitEditButton.onclick = () => {
      editInsect(insectToEdit, insectId);
    };
  }
}

function editInsect(insectToEdit, insectId) {

  const newName = nameEditInput.value;
  const newSpeed = speedEditInput.value;
  const newWeight = weightEditInput.value;

  if (newName === "" || !/^\d+$/.test(newSpeed) || !/^\d+$/.test(newWeight)) {

    alert("Fields can not be empty, and speed/weight must contain only numeric digits.");

  } else if (newSpeed <= 0 || newWeight <= 0) {

    alert("Numeric fields can not be less than or equal to 0.");

  } else {

  insectToEdit.name = newName;
  insectToEdit.speed = newSpeed;
  insectToEdit.weight = newWeight;
  renderItemsList(displayedInsects);
  editMenu.style.display = "none";
  }
};

renderItemsList(displayedInsects);

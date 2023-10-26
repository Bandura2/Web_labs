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
const DELETE_BUTTON_ID = "delete_button-";

let ALLInsects = [];
let displayedInsects = [];

function generateNextId() {
  if (ALLInsects.length === 0) {
    return 0; 
  } else {
    const maxId = Math.max(...ALLInsects.map((insect) => insect.id));
    return maxId + 1; 
  }
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
      <button id="${DELETE_BUTTON_ID}${id}" class="delete-button" data-id="${id}">Delete</button>
    </div>
  </li>
`;

const addInsectToPage = (insect) => {
  insectsContainer.insertAdjacentHTML("beforeend", itemTemplate(insect));

  const editButton = document.getElementById(`${EDIT_BUTTON_ID}${insect.id}`);
  const deleteButton = document.getElementById(`${DELETE_BUTTON_ID}${insect.id}`);

  editButton.addEventListener("click", () => {
    openEditMenu(insect.id);
  });
  deleteButton.addEventListener("click", () => {
    openDeleteMenu(insect.id);
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

    const newInsect = {
      id: generateNextId(),
      name,
      speed,
      weight,
    };

    addInsect(newInsect);

    fetch("http://localhost:3000/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newInsect),
    })
      .then((response) => response.json())
      .then((result) => {
        alert(result.message);
      })
      .catch((error) => {
        console.error("Помилка при відправці POST-запиту: " + error);
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
};

function openDeleteMenu(insectId) {
  const insectToDelete = displayedInsects.find((insect) => insect.id === insectId);
  if (insectToDelete) {
    deleteInsect(insectId);
  }
};

function deleteInsect(insectId) {

  fetch('http://localhost:3000/delete', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: insectId }),
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.message == 'insect deleted') {

        ALLInsects = ALLInsects.filter((insect) => insect.id !== insectId);
        displayedInsects = displayedInsects.filter((insect) => insect.id !== insectId);
        renderItemsList(displayedInsects);
      } else {
        console.error('Error deleting:', result.message);
      }
    })
    .catch((error) => {
      console.error('Помилка при відправці DELETE-запиту:', error);
    });
};


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

    fetch('http://localhost:3000/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(insectToEdit)
    })
      .then(response => response.json())
      .then(result => {
        alert('Обєкт оновлено в базі даних.');
      })
      .catch(error => {
        console.error('Помилка оновлення:', error);
      });

    renderItemsList(displayedInsects);
    editMenu.style.display = "none";
  }
};

function get_all_from_db() {
  fetch("http://localhost:3000/getall")
    .then((response) => response.json())
    .then((data) => {
      data.data.forEach((insect) => {
        addInsect(insect);
      });
    })
    .catch((error) => {
      console.error("Error fetching data from the database: " + error);
    });
}

get_all_from_db();

renderItemsList(displayedInsects);
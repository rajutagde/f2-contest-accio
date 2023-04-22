let originalArray = [
    {id:1,name:"john",age:"18",profession:"developer"},
    {id:2,name:"jack",age:"20",profession:"developer"},
    {id:3,name:"karen",age:"19",profession:"admin"}
  ];
  
  const cardContainer = document.getElementById("card-container");
  const professionSelect = document.getElementById("profession");
  const nameInput = document.getElementById("name");
  const ageInput = document.getElementById("age");
  const newProfessionInput = document.getElementById("newProfession");
  
  function filterCards() {
    const selectedProfession = professionSelect.value;
    if (selectedProfession === "") {
      alert("Please select a profession");
      return;
    }
    const filteredArray = originalArray.filter((item) => item.profession === selectedProfession);
    renderCards(filteredArray);
  }
  
  function addUser() {
    const name = nameInput.value;
    const age = ageInput.value;
    const profession = newProfessionInput.value;
    if (name === "" || age === "" || profession === "") {
      alert("Please fill in all fields");
      return;
    }
    const newUser = {id: originalArray.length + 1, name, age, profession};
    originalArray.push(newUser);
    renderCards(originalArray);
    nameInput.value = "";
    ageInput.value = "";
    newProfessionInput.value = "";
  }
  
  function renderCards(array) {
    cardContainer.innerHTML = "";
    array.forEach((item) => {
      const card = document.createElement("div");
      card.innerHTML = `
        <p>ID: ${item.id}</p>
        <p>Name: ${item.name}</p>
        <p>Age: ${item.age}</p>
        <p>Profession: ${item.profession}</p>
      `;
      cardContainer.appendChild(card);
    });
  }
  
  // Initial render of cards
  renderCards(originalArray);
  
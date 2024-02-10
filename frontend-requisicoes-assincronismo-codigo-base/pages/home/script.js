const form = document.querySelector("#form-profile");
const inputName = document.querySelector("#name-profile");
const inputEmail = document.querySelector("#email-profile");
const inputPassword = document.querySelector("#password-profile");

const token = localStorage.getItem("token");

async function loadProfileData() {
  try {
    const response = await api.get("/usuarios", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const { nome, email } = response.data;
    inputName.value = nome;
    inputEmail.value = email;
  } catch (error) {
    console.error(error.response.data);
  }
}

loadProfileData();

async function updateUserData() {
  try {
    const response = await api.put(
      "/usuarios",
      {
        nome: inputName.value,
        email: inputEmail.value,
        password: inputPassword.value,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(response.data);
  } catch (error) {
    console.log(error.response.data);
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  event.stopPropagation();

  if (!inputEmail.value || !inputName.value || !inputPassword.value) {
    alert("Preencha todos os campos");
    return;
  }

  updateUserData();
});

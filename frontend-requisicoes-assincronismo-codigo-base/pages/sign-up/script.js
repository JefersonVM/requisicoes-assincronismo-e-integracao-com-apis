const form = document.querySelector("#form-sign-up");
const inputName = document.querySelector("#name-sign-up");
const inputEmail = document.querySelector("#email-sign-up");
const inputPassword = document.querySelector("#password-sign-up");
const btncancel = document.querySelector("#form-sign-up .btn-cancel");

async function registerUser() {
  try {
    const response = await api.post("/usuarios", {
      nome: inputName.value,
      email: inputEmail.value,
      senha: inputPassword.value,
    });

    if (response.status === 200) {
      window.location.href = "../../index.html";
    }
  } catch (error) {
    console.log(error.response.data);
  }
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  event.stopPropagation();

  if (!inputName.value || !inputEmail.value || !inputPassword.value) {
    alert("Preencha todos os campos!");
    return;
  }

  await registerUser();
});

btncancel.addEventListener("click", () => {
  inputName.value = "";
  inputEmail.value = "";
  inputPassword.value = "";
});

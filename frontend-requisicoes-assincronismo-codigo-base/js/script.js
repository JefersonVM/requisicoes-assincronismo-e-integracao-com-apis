const form = document.querySelector("#form-sign-in");
const inputEmail = document.querySelector("#email-sign-in");
const inputPassword = document.querySelector("#password-sign-in");

async function makeLogin() {
  try {
    const response = await api.post("/login", {
      email: inputEmail.value,
      senha: inputPassword.value,
    });

    const { token } = response.data;
    localStorage.setItem("token", token);

    if (response.status === 200) {
      window.location.href =
        "../../frontend-requisicoes-assincronismo-codigo-base/pages/home/index.html";
    }
  } catch (error) {
    console.log(error.response.data);
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  event.stopPropagation();

  if (inputEmail.value === "" || inputPassword.value === "") {
    alert("Preencha todos os campos");
    return;
  }

  makeLogin();
});

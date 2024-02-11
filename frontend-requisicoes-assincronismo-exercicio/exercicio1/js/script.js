async function loadProfileData() {
  try {
    const response = await api.get("/users");
    const cards = document.querySelectorAll(".card");

    response.data.forEach((user, index) => {
      if (cards[index]) {
        const h1 = cards[index].querySelector("h1");
        const span = cards[index].querySelector("span");
        const strong = cards[index].querySelector("strong");

        h1.innerHTML = user.name;
        span.innerHTML = user.email;
        strong.innerHTML = user.phone;
      }
    });
  } catch (error) {
    console.error(error.response ? error.response.data : error);
  }
}

loadProfileData();

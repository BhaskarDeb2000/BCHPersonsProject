document.addEventListener("DOMContentLoaded", async () => {
  const userGrid = document.getElementById("user-grid");

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    users.forEach((user) => {
      const userCard = document.createElement("div");
      userCard.className = "user-card";

      const avatar = document.createElement("img");
      avatar.src = `https://robohash.org/${user.id}?set=set4`;
      avatar.alt = `${user.name}'s Avatar`;

      const userName = document.createElement("h3");
      userName.textContent = user.name;

      const userUsername = document.createElement("p");
      userUsername.textContent = `@${user.username}`;

      const userEmail = document.createElement("p");
      userEmail.textContent = user.email;

      userCard.appendChild(avatar);
      userCard.appendChild(userName);
      userCard.appendChild(userUsername);
      userCard.appendChild(userEmail);

      userGrid.appendChild(userCard);
    });
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
});

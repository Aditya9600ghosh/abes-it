document.getElementById("fetch_Btn").addEventListener("click", fetchGitHubUsers);

function fetchGitHubUsers() {

    const users = ["mojombo", "defunkt", "pjhyett", "wycats", "ezmobius", "ivey", "evanphx", "vanpelt", "wayneeseguin", "brynary"];
    const userList = document.getElementById("userList");

    userList.innerHTML = "";

    
    users.forEach(user => {
        const listItem = document.createElement("li");
        listItem.textContent = user;
        listItem.addEventListener("click", () => {
            window.open(`https://github.com/${user}`, "_blank");
        });
        userList.appendChild(listItem);
    });
}
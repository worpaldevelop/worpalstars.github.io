const tg = window.Telegram.WebApp;

const user = tg.initDataUnsafe.user;
if (user) {
    document.getElementById("user-name").textContent = user.first_name;
}
const tg = window.Telegram.WebApp;

// Развернуть приложение на весь экран
tg.expand();

// Получить данные пользователя
const user = tg.initDataUnsafe.user;
console.log(user?.first_name, user?.username);

const mainButton = tg.MainButton;

mainButton.text = "Подтвердить";
mainButton.show();
mainButton.onClick(() => {
  tg.sendData(JSON.stringify({ action: "confirm" }));
});

// Закрыть приложение
tg.close();
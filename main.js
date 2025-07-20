const tg = window.Telegram.WebApp;
        
// Инициализация WebApp Telegram
tg.expand();

// Получаем username пользователя
const user = tg.initDataUnsafe.user;
if (user && user.username) {
    document.querySelector('.value').textContent = `@${user.username}`;
}

// Обработка кнопки оплаты
document.getElementById('payButton').addEventListener('click', () => {
    tg.showAlert('Оплата звёзд');
    // Здесь можно добавить логику оплаты через Telegram Payments
});
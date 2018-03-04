var correct = false;

var log = '2833839448';
var pass = 'loh3320344';

while (!correct) {
    var LogInput = prompt("Введите логин");
    var passInput = prompt("Введите пароль");

    if (LogInput == log && passInput == pass) {
      correct = true;
      alert("Выполнен вход");
    } else {
      alert("Неверные данные для входа");
    }
}

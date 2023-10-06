
const yearOfBirth = prompt("Введите ваш год рождения:");


if (!isNaN(yearOfBirth)) {
  
  const age = new Date().getFullYear() - parseInt(yearOfBirth);

  
  if (age < 0) {
    console.log("Вы еще не родились.");
  } else if (age <= 30) {
    console.log("Вы младше 30 лет. Вы молодой человек.");
  } else if (age <= 60) {
    console.log("Вы старше 30 лет, но младше 60 лет. Кризис среднего возраста.");
  } else {
    console.log("Вам старше 60 лет. Вам советуется посетить доктора.");
  }
} else {
  console.log("Введено некорректное значение. Пожалуйста, введите число.");
}

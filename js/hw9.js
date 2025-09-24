// 1
const firstWord = prompt("1 word...");
const secondWord = prompt("2 word...");
if (firstWord && secondWord && secondWord && firstWord !== "" ) {
    console.log("Обидва поля заповнені");
} else {
    console.log("Не всі поля заповнені");
}
// 2
const firstNumber = Number(1);
const secondNumber = Number(prompt("First number is 1, enter number"));
let result = "";
console.log(result = firstNumber + secondNumber);
if (result > 10) {
    console.log("Сума більша за 10");
} else {
    console.log("Сума менша або дорівнює 10");
    
}
// 3
const letter = prompt("Tell something about Frontend");
if (letter.includes("JavaScript")) {
    console.log("Текст містить слово JavaScript");
} else {
    console.log("Текст не містить слово JavaScript");
    
}
// 4
const favorite = prompt("What is your favorite number?");
if (favorite >= 10 && favorite <= 20) {
    console.log("Число входить в діапазон від 10 до 20");
    
} else {
    console.log("Число не входить в діапазон від 10 до 20");
    
} 
// 5
const userName = prompt("Enter your name").length >= 3;
const userEmail = prompt("Enter your email").includes("@");
const userPassword = prompt("Enter your password").length >= 6;
if (userName || userEmail || userPassword === false) {
    console.log("Помилка: неправильне заповнення");
} else {
    console.log("Перенаправлення на іншу сторінку");
    
}
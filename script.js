//task  1 - start
let num = parseInt(prompt("Enter a number"));
let sum = 0;
for (let i = 1; i <= num; i++) {
  sum += i;
}
alert(sum);
//task  1 - end

//task  2 - start
let a = parseInt(prompt("A?"));
let b = parseInt(prompt("B?"));

let c = Math.min(a, b);
for (; c >= 1; c--) {
  if (a % c == 0 && b % c == 0) {
    console.log("C = ", c);
    break;
  }
}
//task  2 - end

//task  3 - start
let number = parseInt(prompt("Enter a number"));
for (let i = 1; i <= number; i++) {
  if (number % i == 0) {
    alert(i);
  }
}
//task  3 - end

//task  4 - start
let n = parseInt(prompt("Enter a number"));
let i = 1;
while (Math.trunc(n / 10) != 0) {
  i++;
  n = Math.trunc(n / 10);
}
alert(i);
//task  4 - end

//task  5 - start
let o = 0;
let zero = 0;
let pol = 0;
let otr = 0;
let ch = 0;
let nech = 0;
while (o != 10) {
  let k = parseInt(prompt("Enter a number"));
  if (isNaN(k)) {
    alert("Invalid date");
  } else {
    if (k > 0) {
      pol++;
    } else if (k < 0) {
      otr++;
    } else if (k == 0) {
      zero++;
    }
    if (k % 2 == 0 && k != 0) {
      ch++;
    } else if (k % 2 != 0) {
      nech++;
    }
    o++;
  }
}
alert(
  `Nuliv - ${zero}, Bilche nula - ${pol}, Menshe nula - ${otr}, Parni - ${ch}, Neparni - ${nech}`
);
//task  5 - end

//task  6 - start
let symbol, a, b;
let q = true;
let ask;
while (q) {
  ask = prompt("Do you want to continue Yes or No?");
  if (ask == "Yes") {
    symbol = prompt("Enter symbol");
    a = parseFloat(prompt("Enter first digit"));
    b = parseFloat(prompt("Enter second digit"));
    switch (symbol) {
      case "+":
        alert(a + b);
        break;
      case "-":
        alert(a - b);
        break;
      case "*":
        alert(a * b);
        break;
      case "/":
        if (a == 0) {
          alert("Error");
        } else {
          alert(a / b);
        }
        break;
    }
  } else {
    q = false;
  }
}
//task  6 - end

//task  7 - start
let zdvih = parseInt(prompt("Enter zdvih"));
let n = prompt("Enter number");
let smallStr = "";
let bigStr = "";
for (let i = 0; i <= zdvih - 1; i++) {
  smallStr += n[i];
}
for (let i = zdvih; i <= n.length - 1; i++) {
  bigStr += n[i];
}
alert(bigStr + smallStr);
//task  7 - end

//task  9 - start
for (let i = 1; i <= 10; i++) {
  let row = "";
  for (let g = 2; g <= 9; g++) {
    row += i * g + " ";
  }
  console.log(row);
}
//task  9 - end

// //task  10 - start
// let digit = parseInt(prompt("Enter a number in diapason form 0 to 100"));
// let que;
// let d = 100;
// let y = 2;
// let diapason = Math.floor(Math.random() * (100 - 50) + 50);
// alert(diapason);
// while (true) {
//   que = prompt("If digit > or < half of diapason, enter symbol");
//   if (que == ">") {
//     diapason = Math.floor(Math.random() * (d - (d / y)) + d / y);
//     d /= y;
//     alert(diapason)
//     que = prompt("Enter if this digit is yours Yes or No");
//     if (que == "Yes") {
//         break;
//     }
//   }
// }

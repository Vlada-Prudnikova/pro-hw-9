// first
let i = 10;
while (i <= 20) {
  console.log(i + ",");
  i++;
}
//second
for (let i = 10; i <= 20; i++) {
  console.log("second " + i ** 2);
}
// third
for (let i = 7; i <= 7; i++) {
  let j = 1;
  while (j <= 9) {
    console.log("third " + i + "*" + j + " = " + i * j);
    j++;
  }
}
// fourth
let suma = 0;
for (let i = 1; i <= 15; i++) {
  suma += i;
  console.log("fourth " + suma);
}
//fifth
let dob = 0;
for (let i = 15; i <= 35; i++) {
  dob = i * ++i;
  // multiple = dob + dob;
  console.log("fifth " + dob);
}
//sixth
let sum = 0;
let ser = 0;
for (let i = 1; i <= 500; i++) {
  sum += i;
  ser = sum / 2;
  console.log("sixth " + ser);
}
//seven
let summa = 0;
for (let i = 30; i < 80; i++) {
  if (i % 2 === 0) {
    summa += i;
  }
  console.log("seven " + summa);
}

// eight
let delen = 0;
for (let i = 100; i < 200; i++) {
  if (i % 3 === 0) {
    delen = i;
  }
  console.log("eight " + delen);
}
// nine
let nat = 8;
let ost = 0;
let kilk = 0;
for (let i = 1; i <= nat; i++) {
  if (nat % i === 0) {
    ost = i;
  }
  console.log("nine " + ost);
}
//ten
ost = parseFloat(ost);
for (let i = 1; i <= 10; i++) {
  if (nat % i === 0) {
    ost = i;
    if (ost % 2 === 0) {
      console.log("ten " + ost);
    }
  }
}
//eleven
ost = parseFloat(ost);
for (let i = 1; i <= 10; i++) {
  if (nat % i === 0) {
    ost = i;
    if (ost % 2 === 0) {
      kilk += ost;

      console.log(kilk);
    }
  }
}
//twelve
for (let i = 1; i <= 10; i++) {
  let j = 1;
  while (j <= 10) {
    console.log("twelve " + i + "*" + j + " = " + i * j);
    j++;
  }
}

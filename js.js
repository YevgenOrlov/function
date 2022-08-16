let count = 0;

function f1() {
  console.log(count);
  console.log(this);
  this.textContent = count;
  console.log(this.querySelector(".b-1"));
  count++;
}

document.querySelector(".b-1").addEventListener("click", f1);

//
// стрелочные не имеют  this
// const f2 = () => {
//   console.log(count);
//   console.log(this);
//   this.textContent = count;

//   count++;
// };

// document.querySelector(".b-2").addEventListener("click", f2);

// f1.call(document.querySelector(".b-1"));
// f1.call(document.querySelector(".b-2"));

// document.querySelector(".b-1").addEventListener("click", () => {
//   f1.call(document.querySelector(".b-2"));
// });

// function f3(count) {
//   console.log(count);
//   console.log(this);
//   this.textContent = count;
//   // console.log(this.querySelector(".b-3"));
//   count++;
// }

// document.querySelector(".b-3").addEventListener("click", () => {
//   count++;
//   f3.call(document.querySelector(".b-2"), count);
// });

// function sum1(a, b) {
//   this.innerHTML = a + b;
// }

// document.querySelector(".b-2").addEventListener("click", () => {
//   sum1.call(document.querySelector(".out-3"), 3, 4);
//   sum1.apply(document.querySelector(".out-4"), [3, 4]);
// });

// const f4 = f1.bind(document.querySelector(".out-5"));
// f4();
// f4();

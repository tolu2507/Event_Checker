import "./style.css";
import { convertToArrayofNumber,checkIfSecondArrayIsGreaterThanFirstArray, getMaximumEvents, getEvents } from "./function.js";

const first = document.getElementById("first");
const second = document.getElementById("second");
const button = document.getElementById("button");
const screen = document.querySelector("#screen");

button.addEventListener("click", () => {
  const First = first.value;
  const Second = second.value;
  screen.innerHTML = "";
  if (!First || !Second) {
    alert("Please enter a value of numbers sepersted with commas");
  } else if (typeof First === "string" && typeof Second === "string") {
    if (First.length !== Second.length) {
      alert("Please enter the same number of values");
    } else if (First.length === Second.length) {
      const newFirst = convertToArrayofNumber(First);
      const newSecond = convertToArrayofNumber(Second);

      if (newFirst && Array.isArray(newFirst)) {
        if (newSecond && Array.isArray(newSecond)) {
          if (checkIfSecondArrayIsGreaterThanFirstArray(newFirst, newSecond)) {
            console.log(getMaximumEvents(newFirst, newSecond));
            screen.innerHTML = `<div class="text-[26px] uppercase font-extrabold text-emerald-900 h-full w-full md:h-full md:w-[600px] md:rounded-[50px] flex items-center justify-center bg-[#9ab9b9] rounded-full px-2" id="screen-reader">
            ${getEvents(newFirst, newSecond)}
            </div>`;
          } else {
            console.log(
              "please ensure the second array values are greater than your first array values for a more accurate figure."
            );
            screen.innerHTML = `<div class="text-[26px] capitalize font-extrabold text-red-700 h-full w-full md:h-full md:w-[600px] md:rounded-[50px] flex items-center justify-center bg-[#789898] rounded-full px-2" id="screen-reader">
            please ensure the second array values are greater than your first array values for a more accurate figure.
            </div>`;
          }
        }
      }
    } else {
      throw new Error("Invalid");
    }
  }
});

// const First = [2, 4, 1, 5];
// const Second = [4, 6, 9, 7];

// const response = getMaximumEvents(First, Second);
// console.log(response);

// const num = "1,2,3,4,y,6,7,8,9";
// console.log(
//   num.split(",").filter((item) => {
//     if (typeof +item !== "number") {
//       throw new Error("invalid number");
//     } else {
//       return +item
//     }
//   })
// );

const first = document.getElementById("first");
const second = document.getElementById("second");
const button = document.getElementById("button");
const screen = document.querySelector("#screen");

function createArray(A, B) {
  if (A.length === 0 && B.length === 0) {
    throw Error(`
          ============================================================================
          ||           array cannot be empty provide some data, sample data=        ||
          ||           array1 =[1,2,3,4,5,6,0,7,8,9]                                ||
          ||           array2 =[1,2,3,4,5,6,0,7,8,9]                                ||
          ============================================================================
          `);
  }
  if (A.length !== B.length) {
    const diff =
      A.length > B.length ? A.length - B.length : B.length - A.length;
    const errorResponse =
      A.length > B.length
        ? `Add ${diff} extra values to the array2`
        : `Add ${diff} extra values to the array1`;
    throw Error(`
          ===================================================================================================
          ||                                                                                                ||
          ||           First Array length = ${A.length}                                                     ||
          ||           Second Array length = ${B.length}                                                    ||
          ||                                                                                                ||
          ||           array cannot be of different lenght, ensure there                                    ||
          ||           data are equal. THIS IS HOW TO FIX YOUR CODE                                         ||
          ||                                                                                                ||
          ||           ${errorResponse}                                                                     ||
          ====================================================================================================
          `);
  }
  const NewArray = [];
  for (let [index, value] of A.entries()) {
    const object = {
      start: value,
      stop: B[index],
    };

    if (object !== null || object !== undefined) {
      NewArray.push(object);
    } else {
      throw Error("Invalid");
    }
  }
  return NewArray;
}
function filterArray(params, second, first) {
  const result = [];
  if (!params) {
    throw Error("please provide a valid array.");
  }
  if (!second) {
    throw Error(
      "please provide a valid array . N.B= this second array is used to keep account of how many times the loops would run "
    );
  }
  if (Array.isArray(second) && Array.isArray(second)) {
    for (const [index, value] of second.entries()) {
      if (value) {
        const obj = {
          start: first[index],
          stop: value,
        };
        const filtered = params.filter((item) => item.start >= value);
        const comp = [obj, ...filtered];
        result.push(comp);
      }
    }
  } else {
    throw new Error("please ensure both arguments are arrays");
  }
  return result;
}
function sortArray(param) {
  return param.map((item) => {
    if (item) {
      return item.sort((a, b) => a.start - b.start);
    }
  });
}
function uniqueCollection(param) {
  const unique = [];
  param.map((item) => {
    let set = [];
    let pet = [];
    if (item) {
      set.length = 0;
      pet.length = 0;
      for (let i = 0; i < item.length; i++) {
        if (!set.includes(item[i].start)) {
          set.push(item[i].start);
          pet.push(item[i].stop);
        }
      }
      let see = createArray(set, pet);
      unique.push(see);
    }
  });
  return unique;
}
function result(params) {
  return params.map((item) => {
    if (Array.isArray(item)) {
      let hit = item[0].stop;
      return item.filter((items) => {
        if (items.stop >= hit) {
          hit = items.stop;
          return items;
        }
      });
    }
  });
}
function Final(res, arr1, arr2) {
  let counter = 0;
  for (const arr of res) {
    if (counter < arr.length) {
      counter = arr.length;
    }
  }
  return `You can attend a maximum of ${counter} ${
    counter === 1 ? "event" : "events"
  } at this time from the following sources of data [${arr1}] and [${arr2}]`;
}
function convertToArrayofNumber(str) {
  if (/^[0-9,]+$/.test(str)) {
    console.log("The string contains only numbers and commas.");
    return str.split(",").map((item) => +item);
  } else {
    console.log("The string does not contain only numbers and commas.");
    alert("values have to be numbers and cant be negative for both arrays");
    console.log(
      "values have to be numbers and cant be negative for both arrays"
    );
    throw new Error(
      "values have to be numbers and cant be negative for both arrays"
    );
  }
}
function getMaximumEvents(array1 = [], array2 = []) {
  const First = array1;
  const Second = array2;

  const NewItem = createArray(First, Second);
  const sortitem = filterArray(NewItem, Second, First);
  const uniqueArray = sortArray(sortitem);
  const onlyNum = uniqueCollection(uniqueArray);
  const res = result(onlyNum);
  return Final(res, First, Second);
}
function checkIfSecondArrayIsGreaterThanFirstArray(array1 = [], array2 = []) {
  const len = array1.length === array2.length ? array1.length : false;
  let count = 0;
  if (len) {
    for (let [index, value] of array1.entries()) {
      if (array2[index] > value) {
        console.log(`${value} is lower than ${array2[index]}`);
        count++;
      }
    }
  }
  return count === len ? true : false;
}

button.addEventListener("click", () => {
  const First = first.value;
  const Second = second.value;
  screen.innerHTML = ""
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
            ${getMaximumEvents(newFirst, newSecond)}
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

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

// "build": "npx webpack --config webpack.config.js",

export {
  createArray,
  filterArray,
  sortArray,
  uniqueCollection,
  result,
  Final,
  convertToArrayofNumber,
  getMaximumEvents,
  checkIfSecondArrayIsGreaterThanFirstArray,
};

// const a_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const b_1 = [4, 5, 7, 9, 9, 7, 9, 9, 10];
console.log(getMaximumEvents([1, 3, 4, 6, 8], [3, 6, 9, 7, 9]));

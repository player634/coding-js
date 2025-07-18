// 179
function findLowestIndex(nums) {
  let minValue = Number.POSITIVE_INFINITY;
  let minIndex = 0;
  nums.forEach((n, i) => {
    if (n < minValue) {
      minValue = n;
      minIndex = i;
    }
  });
  return minIndex;
}

// 180
function countEvens(nums) {
  let count = 0;
  nums.forEach((n) => {
    if (n % 2 === 0) count++;
  });
  return count;
}

// 181
function bigDiff(nums) {
  let largestElement = Math.max(...nums);
  let smallestElement = Math.min(...nums);
  return largestElement - smallestElement;
}

function bigDiff2(nums) {
  let largestElement = Number.NEGATIVE_INFINITY;
  let smallestElement = Number.POSITIVE_INFINITY;

  nums.forEach((n) => {
    if (n > largestElement) largestElement = n;
    if (n < smallestElement) smallestElement = n;
  });

  return largestElement - smallestElement;
}

// 182
function centeredAverage(nums) {
  let sortedArr = nums.sort((a, b) => a - b);
  sortedArr.splice(0, 1);
  sortedArr.splice(sortedArr.length - 1, 1);

  let sum = sortedArr.reduce((acc, next) => {
    return acc + next;
  }, 0);

  return sum / sortedArr.length;
}

function centeredAverage2(nums) {
  let min = Math.min(...nums);
  let max = Math.max(...nums);
  let skippedMin = false;
  let skippedMax = false;
  let arr = [];

  for (let num of nums) {
    if (num === min && !skippedMin) {
      skippedMin = true;
      continue;
    }
    if (num === max && !skippedMax) {
      skippedMax = true;
      continue;
    }
    arr.push(num);
  }

  let sum = arr.reduce((a, b) => a + b, 0);
  return sum / arr.length;
}

// 183
function sum13(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 13) {
      i++;
      continue;
    }
    sum += nums[i];
  }
  return sum;
}

// 184
function sum67(nums) {
  let found6 = false;
  let sum = 0;

  for (let n of nums) {
    if (n === 7 && found6) {
      found6 = false;
      continue;
    }
    if (found6) {
      continue;
    }

    if (n === 6) {
      found6 = true;
      continue;
    }

    sum += n;
  }
  return sum;
}

// 185
function has22(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 2 && nums[i + 1] === 2) {
      return true;
    }
  }
  return false;
}

// 186
function lucky13(nums) {
  for (let n of nums) {
    if (n === 1 || n === 3) {
      return false;
    }
  }
  return true;
}

// 187
function sum28(nums) {
  let sum = 0;
  for (let n of nums) {
    if (n === 2) {
      sum += n;
    }
  }
  if (sum === 8) {
    return true;
  } else {
    return false;
  }
}

// 188
function more14(nums) {
  let oneCount = 0;
  let fourCount = 0;

  for (let n of nums) {
    if (n === 1) oneCount++;
    if (n === 4) fourCount++;
  }

  return oneCount > fourCount;
}

// 189
function prependSum(nums) {
  let sumOfFirstTwo = nums[0] + nums[1];
  return [sumOfFirstTwo, ...nums.slice(2)];
}

// 190
function fizzArray(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(i);
  }
  return result;
}

// 191
function only14(nums) {
  for (let n of nums) {
    if (n !== 1 && n !== 4) return false;
  }
  return true;
}

// 192
function fizzArray2(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(String(i));
  }
  return result;
}

// 193
function no14(nums) {
  return noNumber(nums, 1) || noNumber(nums, 4);
}

function noNumber(arr, number) {
  for (let n of arr) {
    if (n === number) return false;
  }
  return true;
}

// 194
function isEverywhere(nums, val) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== val && nums[i + 1] !== val) return false;
  }
  return true;
}

// 195
function either24(nums) {
  let twotwo = false;
  let fourfour = false;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === 2 && nums[i + 1] === 2) twotwo = true;
    if (nums[i] === 4 && nums[i + 1] === 4) fourfour = true;
  }

  return twotwo !== fourfour;
  // the code above can be written like : (twotwo && !fourfour) || (!twotwo && fourfour);
  // the code is shorter and cleaner but the other one is more explicit
}

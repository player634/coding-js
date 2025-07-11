// 153
function firstLast6(nums) {
  return nums[0] === 6 || nums[nums.length - 1] === 6;
}

// 154
function sameFirstLast(nums) {
  return nums[0] === nums[nums.length - 1] && nums.length >= 1;
}

// 155
function makePi() {
  return [3, 1, 4];
}

// 156
function commonEnd(a, b) {
  return a[0] === b[0] || a[a.length - 1] === b[b.length - 1];
}

// 157
function sum3(nums) {
  return nums.reduce((a, b) => {
    return a + b;
  }, 0);
}

// 158
function rotateLeft3(nums) {
  let firstElement = nums.shift();
  return [...nums, firstElement];
}

function rotateLeft3_2(nums) {
  let firstElement = nums[0];
  let slicedArray = nums.slice(1);
  return [...slicedArray, firstElement];
}

// 159
function reverse3(nums) {
  let result = [];
  nums.forEach((n) => {
    result.unshift(n);
  });
  return result;
}

// 160
function maxEnd3(nums) {
  let largerElement =
    nums[0] > nums[nums.length - 1] ? nums[0] : nums[nums.length - 1];
  return nums.map((n) => {
    return largerElement;
  });
}

// 161
function sum2(nums) {
  return (nums[0] || 0) + (nums[1] || 0);
}

// 162
function middleWay(a, b) {
  let middleA = a[Math.floor(a.length / 2)];
  let middleB = b[Math.floor(b.length / 2)];
  return [middleA, middleB];
}

// 163
function makeEnds(nums) {
  return [nums[0], nums[nums.length - 1]];
}

// 164
function has23(nums) {
  for (let number of nums) {
    if (number === 2 || number === 3) return true;
  }
  return false;
}

// 165
function no23(nums) {
  for (let number of nums) {
    if (number === 2 || number === 3) return false;
  }
  return true;
}

// 166
function makeLast(nums) {
  let allZero = new Array(nums.length * 2).fill(0);
  allZero[allZero.length - 1] = nums[nums.length - 1];
  return allZero;
}

function makeLast2(nums) {
  let allZero = new Array(nums.length * 2 - 1).fill(0);
  return [...allZero, nums[nums.length - 1]];
}

// 167
function double23(nums) {
  if (nums.length < 2) return false;
  let twoCounts = 0;
  let threeCounts = 0;

  for (let n of nums) {
    if (n === 2) twoCounts++;
    if (n === 3) threeCounts++;
  }

  if (twoCounts === 2 || threeCounts === 2) return true;
  return false;
}

// 168
function fix23(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 3 && nums[i - 1] === 2) nums[i] = 0;
  }
  return nums;
}

// 169
function start1(a, b) {
  let count = 0;
  if (a[0] === 1) count++;
  if (b[0] === 1) count++;
  return count;
}

// 170
function biggerTwo(a, b) {
  let sumA = sumArray(a);
  let sumB = sumArray(b);

  if (sumA > sumB) {
    return a;
  } else if (sumB > sumA) {
    return b;
  } else {
    return a;
  }
}

function sumArray(arr) {
  return arr.reduce((acc, next) => {
    return acc + next;
  }, 0);
}

// 171
function plusTwo(a, b) {
  return [...a, ...b];
}

// 172
function swapEnds(nums) {
  [nums[0], nums[nums.length - 1]] = [nums[nums.length - 1], nums[0]];
  return nums;
}

function swapEnds2(nums) {
  let firstElement = nums[0];
  let lastElement = nums[nums.length - 1];

  nums[0] = lastElement;
  nums[nums.length - 1] = firstElement;

  return nums;
}

// 173
function midThree(nums) {
  let middle = Math.floor(nums.length / 2);
  return [nums[middle - 1], nums[middle], nums[middle + 1]];
}

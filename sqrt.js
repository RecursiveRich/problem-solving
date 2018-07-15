// Taking the tolerance on the num/input.
function sqrt(num, tolerance) {
  let lower = num > 1 ? 1 : num;
  let upper = num > 1 ? num : 1;
  let mid = calcMid(lower, upper);
  while (!withinTolerance(num, tolerance, mid)) {
    mid * mid < num ? (lower = mid) : (upper = mid);
    mid = calcMid(lower, upper);
  }
  return mid;
}

// Tolerance on the answer/output
function sqrt2(num, tolerance) {
  let lower = num > 1 ? 1 : num;
  let upper = num > 1 ? num : 1;
  let curr = calcMid(lower, upper);
  let prev = 1;
  while (Math.abs(curr - prev) > tolerance) {
    curr * curr < num ? (lower = curr) : (upper = curr);
    prev = curr;
    curr = calcMid(lower, upper);
  }
  return c;
}

// Helpers
const calcMid = (lower, upper) => (lower + upper) / 2;

const withinTolerance = (num, tolerance, mid) => {
  return num - tolerance < mid * mid && mid * mid < num + tolerance;
};

sqrt(2, 0.0001); // 1.4142
sqrt(4, 0.000000000001); // 2
sqrt(0.25, 0.0000001); // 0.5

sqrt2(2, 0.0001); // 1.4142
sqrt2(4, 0.000000000001); // 2
sqrt2(0.25, 0.0000001); // 0.5

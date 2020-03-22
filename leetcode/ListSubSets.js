function run() {
  let n = 4;
  const array = [1, 1, 1, 1, 1];
  const cloneArray = [...array];
  while (true) {
    console.log(cloneArray);
    let i = n;
    while (cloneArray[i] < cloneArray[i - 1] || cloneArray[i] === 0) {
      i--;
    }
    if (i === 0) {
      break;
    }
    if (
      cloneArray[i] === cloneArray[i - 1] ||
      cloneArray[i] === cloneArray[i - 1] + 1
    ) {
      cloneArray[i - 1] = cloneArray[i] + cloneArray[i - 1];
      cloneArray[i] = 0;
    } else {
      cloneArray[i - 1] += 1;
      cloneArray[i] -= 1;
    }
  }
}
run();

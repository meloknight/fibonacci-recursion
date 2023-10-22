function fibs(n) {
  let nFib = [];

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      nFib.push(0);
    }
    if (i === 1) {
      nFib.push(1);
    }
    if (i > 1) {
      nFib.push(nFib[i - 2] + nFib[i - 1]);
    }
  }
  console.log(nFib);
}
fibs(8);

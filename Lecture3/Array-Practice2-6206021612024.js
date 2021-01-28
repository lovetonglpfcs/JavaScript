let furniture = ["Table", "Chairs", "Couch"];

for (x = 0; x < furniture.length; x++) {
  let str = furniture[x];
  let iterator = str[Symbol.iterator]();

  while (true) {
    let result = iterator.next();
    if (result.done) break;
    console.log(result.value);
  }
  console.log('');
}

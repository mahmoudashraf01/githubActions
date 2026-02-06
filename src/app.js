function great(name) {
  console.log(`Hello, ${name}`);
}

module.exports = {
  great,
};

if(require.main === module) {
  console.log(great("Mahmoud!"));
}
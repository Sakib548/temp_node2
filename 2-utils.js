const sayHello = (name) => {
  setTimeout(() => {
    console.log(`Hello ${name}`);
  }, 1000);
};

module.exports = sayHello;

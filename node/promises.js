const promiseExample = () => {
  return new Promise((resolve) => {
    setTimeout(() => { resolve('Hello') }, 3000);
  });
};

promiseExample()
  .then(res => res + " world")
  .then((res) => console.log(res))
  .catch(e => {console.log("this isn't the result")})

console.log('hi');
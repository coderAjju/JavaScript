let promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise one is created");
    resolve();
  }, 1000);
})

promiseOne.then(() => {
  console.log("promiseOne consumed")
})


let promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise two is created");
    resolve();
  }, 1000)
})
  .then(() => console.log("promiseTwo consumed"))


let promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: "ajay", email: "ajay@gmail.com" })
  }, 1000);
}).then((data) => console.log(data))


let promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ name: 'john', email: 'john@gmail.com' })
    }
    else {
      reject({ msg: "promise is rejected" })
    }
  }, 1000);
})
  .then(data => {
    return data.name
  }).then(username => console.log(username))
  .catch((error) => console.log(error))


let promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let value = false;
    if (value) {
      resolve({ course: "javascript", price: "99999" });
    }
    else {
      reject({ msg: "promise five rejected" });
    }
  }, 1000);
})

async function promiseConsume() {
  try {
    let data = await promiseFive;
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}
promiseConsume();



// fetch data from githup user api

// async function fetchData(){
//   let response = await fetch("https://jsonplaceholder.typicode.com/users")
//   let data = await response.json();
//   console.log(data)
// }
// fetchData();

// fetch("https://jsonplaceholder.typicode.com/users")
fetch("https://api.github.com/users/coderajju")
.then((response)=>{
  return response.json()
})
.then((data)=>{
  console.log(data)
})
.catch(err=>{
  console.log(err)
})
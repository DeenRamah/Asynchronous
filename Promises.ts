
function fetchDatapromis(): Promise<string>{
  return new Promise((resolve, reject) =>{
    const isSuccess = Math.Random() >0.5;
    if(isSuccess){
      resolve("Data Fetched successfully!");
    }else {
      reject(new Error("Failed to fetch data"));
    }
  }, 2000);
});
}


//using the function with Promises
fetchDataPromise()
.then(data=>{
  console.log(data);
})
.catch(error => {
  console.error(error.message);
});

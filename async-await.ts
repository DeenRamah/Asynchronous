async function getDataAsync(){
  try{
    const data:string = await fetchDataPromise();
    console.log(data);
  }catch (error){
    console.log((error as Error).message);
  }
}
getDataAsync;

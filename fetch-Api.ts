import fetch from 'node-fetch';

//function to fetch data from an API
async function fetchApiData (url: string): Promise<any>{

  const response = await fetch(apiUrl);
  if(!response.ok){
    throw new Error("Network was not ok");
  }
  return response.json();
}

//Function to display data
function displayData(data: any): void{
  console.log(data);
}

async function fetchAndDisplayData(){
  const apiUrl =".....";
  try{
    const data = await fetchApiData(apiUrl);
    displayData(data);
  }catch(error){
    console.error("error",(error as error);
  }
}

fetchAndDisplayDat();

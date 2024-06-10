
function fetchDataCallback(callback: (error: Error | null, data?: string) => void) {
    setTimeout(() =>{
        const isSuccess = Math.random() > 0.5;
        if (isSuccess) {
            callback(null, "Data Fetched success");
        } else{
            callback(new Error("Failed to fetch data"));
        }
}, 2000);
}

// using the function with a callback
fetchDataCallback((error, data) =>{
    if(error){
    console.log("Callback:", error.message);
   }else {
    console.log("Callback:", data);
    }
});

fetch("https://api.tvmaze.com/shows/82/episodes")
.then((response)=>{
    console.log("we got a response....")
    console.log(response);
    return response.json();
}).then((jsonData) =>{
    console.log("We got our data");
    console.log(jasonData)
})